"use client";

import React from "react";

import { useRouter } from "next/navigation";
import { UserType } from "@/lib/schemas/userSchema";

interface Props {
	user: UserType;
}

export default function User({ user }: Props) {
	const router = useRouter();

	const handleDelete = async (id: number) => {
		await fetch("/api/post?id=" + id, {
			method: "DELETE",
		});

		router.refresh();
	};

	return (
		<div className="border-2 border-black p-3 rounded-md">
			<h2 className="mb-2">ID: {user._id}</h2>
			<h1 className="text-xl font-semibold">{user.name}</h1>
			<p>{user.email}</p>

			<div className="flex justify-end gap-3 mt-4 text-sm">
				<button
					className="font-semibold"
					onClick={() => router.push(`/update/${user._id}`)}
				>
					Update
				</button>
				<button
					className="font-semibold text-red-500"
					onClick={() => handleDelete(user._id)}
				>
					Delete
				</button>
			</div>
		</div>
	);
}
