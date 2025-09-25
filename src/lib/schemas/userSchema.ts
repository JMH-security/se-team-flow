import mongoose, { Schema } from "mongoose";

import { z } from "zod";

// Mongoose Schema
const userSchema = new Schema({
	_id: { type: Schema.Types.ObjectId, auto: true }, // Explicitly define _id
	name: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	image: { type: String, required: false },
	role: { type: String, default: "unauthorized" },
	emailVerified: { type: Date, required: false, default: null },
	updatedAt: { type: Date, required: true, default: Date.now },
});

// Update updatedAt before saving
userSchema.pre("save", function (next) {
	this.updatedAt = new Date();
	next();
});

export const User = mongoose.models.User || mongoose.model("User", userSchema);

// Zod Schema
export const userZodSchema = z.object({
	_id: z.string().optional(), // _id as string for API params, optional for creation
	name: z.string().min(2, "Name must be at least 2 characters"),
	email: z.string().email("Invalid email address"),
	image: z.string().optional(),
	role: z.string().optional(),
	emailVerified: z.date().nullable().optional(),
	updatedAt: z.date().optional(),
});

export type UserType = z.infer<typeof userZodSchema>;
