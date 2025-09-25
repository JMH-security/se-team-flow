import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongoose";
import { User, userZodSchema } from "@/lib/schemas/userSchema";

export async function GET(
	req: NextRequest,
	{ params }: { params: Promise<{ id: string }> }
) {
	try {
		await connectDB();
		const { id } = await params;
		const user = await User.findById(id);
		if (!user) {
			return NextResponse.json({ error: "User not found" }, { status: 404 });
		}
		return NextResponse.json(user);
	} catch (error) {
		return NextResponse.json(
			{ error: "Failed to fetch user" },
			{ status: 500 }
		);
	}
}

export async function PUT(
	req: NextRequest,
	{ params }: { params: Promise<{ id: string }> }
) {
	try {
		await connectDB();
		const { id } = await params;
		const body = await req.json();
		console.log("PUT body:", body);
		console.log("Updating user with ID:", id);
		const parsed = userZodSchema.safeParse(body);
		console.log("Parsed data:", parsed.data);
		if (!parsed.success) {
			return NextResponse.json({ error: parsed.error.errors }, { status: 400 });
		}

		const user = await User.findByIdAndUpdate(
			id,
			{ $set: parsed.data },
			{ new: true }
		);
		if (!user) {
			return NextResponse.json({ error: "User not found" }, { status: 404 });
		}
		console.log(user);
		return NextResponse.json(user);
	} catch (error) {
		return NextResponse.json(
			{ error: "Failed to update user" },
			{ status: 500 }
		);
	}
}

export async function DELETE(
	req: NextRequest,
	{ params }: { params: Promise<{ id: string }> }
) {
	try {
		await connectDB();
		const { id } = await params;
		const user = await User.findByIdAndDelete(id);
		if (!user) {
			return NextResponse.json({ error: "User not found" }, { status: 404 });
		}
		return NextResponse.json({ message: "User deleted" });
	} catch (error) {
		return NextResponse.json(
			{ error: "Failed to delete user" },
			{ status: 500 }
		);
	}
}
