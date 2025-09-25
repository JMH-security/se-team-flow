"use client";

import { useState, useEffect } from "react";
import UserForm from "@/components/react/user/UserForm";
import UserList from "@/components/react/user/UserList";
import { UserType } from "@/lib/schemas/userSchema";

export default function Home() {
	const [users, setUsers] = useState<UserType[]>([]);
	const [editingUser, setEditingUser] = useState<UserType | null>(null);

	const fetchUsers = async () => {
		const res = await fetch("/api/users");
		const data = await res.json();
		setUsers(data);
	};

	useEffect(() => {
		fetchUsers();
	}, []);

	return (
		<div className="container mx-auto p-4">
			<h1 className="text-2xl font-bold mb-4">User Management</h1>
			<UserForm
				fetchUsers={fetchUsers}
				editingUser={editingUser}
				setEditingUser={setEditingUser}
			/>
			<UserList
				users={users}
				setEditingUser={setEditingUser}
				fetchUsers={fetchUsers}
			/>
		</div>
	);
}
