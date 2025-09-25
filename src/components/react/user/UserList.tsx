"use client";

import { UserType } from "@/lib/schemas/userSchema";
import Image from "next/image";

interface UserListProps {
	users: UserType[];
	setEditingUser: (user: UserType | null) => void;
	fetchUsers: () => void;
}

export default function UserList({
	users,
	setEditingUser,
	fetchUsers,
}: UserListProps) {
	const handleDelete = async (id: string) => {
		try {
			const res = await fetch(`/api/users/${id}`, { method: "DELETE" });
			if (!res.ok) {
				throw new Error("Failed to delete user");
			}
			fetchUsers();
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div>
			<h2 className="text-xl font-semibold mb-4">Users</h2>
			{users.length === 0 ? (
				<p>No users found</p>
			) : (
				<ul className="space-y-2">
					{users.map((user) => (
						<li
							key={user._id}
							className="border p-4 rounded flex justify-between items-center"
						>
							<div>
								{user.image && (
									<Image
										src={user.image}
										alt={user.name}
										width={30}
										height={30}
										className="rounded-full"
									/>
								)}
							</div>
							<div>
								<p>{user.name}</p>
								<p>{user.email}</p>
							</div>

							<div>
								<button
									onClick={() => {
										console.log(user);
										setEditingUser(user);
									}}
									className="bg-yellow-500 text-white p-2 rounded mr-2"
								>
									Edit
								</button>
								<button
									onClick={() => handleDelete(user._id!)}
									className="bg-red-500 text-white p-2 rounded"
								>
									Delete
								</button>
							</div>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
