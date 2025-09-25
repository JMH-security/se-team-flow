import mongoose, { Schema, model, models, Document } from "mongoose";

const UserSchema = new Schema<UserDocument>(
	{
		// Email field - primary identifier
		email: {
			type: String,
			required: [true, "Email is required"],
			unique: true,
			lowercase: true,
			trim: true,
			// match: [
			// 	/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
			// 	"Please provide a valid email address",
			// ],
		},

		// User display name
		name: {
			type: String,
			required: [true, "Name is required"],
			trim: true,
			maxlength: [100, "Name cannot exceed 100 characters"],
		},

		// Profile image URL (from OAuth providers)
		image: {
			type: String,
			default: null,
			trim: true,
		},

		// Email verification timestamp
		emailVerified: {
			type: Date,
			default: null,
		},
		role: {
			type: String,
			default: "user",
		},
	},
	{
		timestamps: true, // Automatically adds createdAt and updatedAt
	}
);

// Export the model
const User = models.User || model<UserDocument>("User", UserSchema);

export default User;
