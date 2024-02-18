"use client";

import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "@/db/actions/users/getUsers";
// import getUsers from "@/lib/getUsers";

interface NotificationSettingsPageProps {}

const NotificationSettingsPage = ({}: NotificationSettingsPageProps) => {
  const { data: users, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: () => getUsers(),
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <ul className="bg-red-500 p-8">
      {users && users.map((user) => <li key={user.id}>{user.id}</li>)}
    </ul>
  );
};

export default NotificationSettingsPage;
