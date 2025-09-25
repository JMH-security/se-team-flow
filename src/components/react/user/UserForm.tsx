"use client";

import { useState, useEffect, FormEvent } from "react";
import { UserType } from "@/lib/schemas/userSchema";

interface UserFormProps {
	fetchUsers: () => void;
	editingUser: UserType | null;
	setEditingUser: (user: UserType | null) => void;
}

export default function UserForm({
	fetchUsers,
	editingUser,
	setEditingUser,
}: UserFormProps) {
	const [name, setName] = useState(editingUser?.name || "");
	const [email, setEmail] = useState(editingUser?.email || "");
	const [image, setImage] = useState(editingUser?.image || "");
	const [error, setError] = useState<string | null>(null);

	// Sync form state with editingUser when it changes
	useEffect(() => {
		if (editingUser) {
			setName(editingUser.name || "");
			setEmail(editingUser.email || "");
			setImage(editingUser.image || "");
		} else {
			setName("");
			setEmail("");
			setImage("");
		}
	}, [editingUser]);

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		setError(null);
		const role = "user"; // Default role for new users
		const method = editingUser ? "PUT" : "POST";
		const url = editingUser ? `/api/users/${editingUser._id}` : "/api/users";

		try {
			const res = await fetch(url, {
				method,
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ name, email, image, role }),
			});

			if (!res.ok) {
				const errorData = await res.json();
				throw new Error(errorData.error || "Failed to save user");
			}

			setName("");
			setEmail("");
			setImage("");
			setEditingUser(null);
			fetchUsers();
		} catch (err: any) {
			setError(err.message);
		}
	};

	return (
		<form onSubmit={handleSubmit} className="mb-8">
			<div className="mb-4">
				<label className="block text-sm font-medium">Name</label>
				<input
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
					className="mt-1 p-2 border rounded w-full"
					required
				/>
			</div>
			<div className="mb-4">
				<label className="block text-sm font-medium">Email</label>
				<input
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					className="mt-1 p-2 border rounded w-full"
					required
				/>
			</div>
			<div className="mb-4">
				<label className="block text-sm font-medium">Image URL</label>
				<input
					type="text"
					value={image}
					onChange={(e) => setImage(e.target.value)}
					className="mt-1 p-2 border rounded w-full"
				/>
			</div>
			{error && <p className="text-red-500">{error}</p>}
			<button type="submit" className="bg-blue-500 text-white p-2 rounded">
				{editingUser ? "Update User" : "Add User"}
			</button>
			{editingUser && (
				<button
					type="button"
					onClick={() => setEditingUser(null)}
					className="ml-2 bg-gray-500 text-white p-2 rounded"
				>
					Cancel
				</button>
			)}
		</form>
	);
}
