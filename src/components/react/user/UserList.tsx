"use client";

import { UserType } from "@/lib/schemas/userSchema";

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
								<p>
									<strong>Name:</strong> {user.name}
								</p>
								<p>
									<strong>Email:</strong> {user.email}
								</p>
								{user.image && (
									<p>
										<strong>Image:</strong>{" "}
										<img
											src={user.image}
											alt={user.name}
											className="w-16 h-16"
										/>
									</p>
								)}
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
