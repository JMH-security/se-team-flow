import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongoose";
import { User, userZodSchema } from "@/lib/schemas/userSchema";

//***********   /api/users - method: GET - Returns a list of all users  **********
export async function GET() {
	try {
		await connectDB();
		const users = await User.find({});
		return NextResponse.json(users);
	} catch (error) {
		return NextResponse.json(
			{ error: "Failed to fetch users" },
			{ status: 500 }
		);
	}
}

//***********   /api/users - method: POST - Creates a new user ******************
export async function POST(req: NextRequest) {
	try {
		await connectDB();
		const body = await req.json();
		body.role = "user"; // Default role for new users
		const parsed = userZodSchema.safeParse(body);

		if (!parsed.success) {
			return NextResponse.json({ error: parsed.error.errors }, { status: 400 });
		}

		const user = await User.create(parsed.data);
		return NextResponse.json(user, { status: 201 });
	} catch (error) {
		return NextResponse.json(
			{ error: "Failed to create user" },
			{ status: 500 }
		);
	}
}
