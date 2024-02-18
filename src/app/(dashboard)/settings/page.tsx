"use client";

import { addUser } from "@/db/actions/users";
import { InsertUser, users } from "@/db/schema/users";
import { useMutation } from "@tanstack/react-query";
import React from "react";

interface PageProps {
  title: string;
  content: string;
}

const Page: React.FC<PageProps> = ({ title, content }) => {
  const mutation = useMutation({
    mutationKey: ["users"],
    mutationFn: (newUser: InsertUser) => addUser(newUser),
  });

  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>

      <div
        onClick={() =>
          mutation.mutate({
            name: "test",
            email: "test@test.test",
            password: "test",
          })
        }
      >
        {mutation.isPending ? "Adding user..." : "Add user"}
      </div>
    </div>
  );
};

export default Page;
