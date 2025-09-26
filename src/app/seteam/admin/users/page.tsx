"use client";

import { useState, useEffect } from "react";
import UserForm from "@/components/react/user/UserForm";
import UserList from "@/components/react/user/UserList";
import { UserType } from "@/lib/schemas/userSchema";
import ContentBlock from "@/components/react/reusable/Content-block";
import SearchForm from "@/components/react/reusable/SearchForm";

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
		<>
			<div className="container mx-auto p-2 max-w-[900px] mt-2">
				<h1 className="text-2xl font-bold mb-4">User Management</h1>
			</div>
			<div className="grid md:grid-cols-5 md:grid-rows-[45px_1fr] grid-rows-[45px_300px_500px]">
				<div className="md:row-start-1 md:row-span-1 md:col-start-1 md:col-span-2 p-2">
					<SearchForm />
				</div>
				<div className="md:row-start-2 md:row-span-full md:col-start-1 md:col-span-2 p-2">
					<ContentBlock>
						<UserList
							users={users}
							setEditingUser={setEditingUser}
							fetchUsers={fetchUsers}
						/>
					</ContentBlock>
				</div>
				<div className="md:row-start-1 md:row-span-full md:col-start-3 md:col-span-full p-2">
					<ContentBlock>
						<UserForm
							fetchUsers={fetchUsers}
							editingUser={editingUser}
							setEditingUser={setEditingUser}
						/>
					</ContentBlock>
				</div>
			</div>
		</>
	);
}
