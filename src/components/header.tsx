import React from "react";

type HeaderProps = {
  items: { name: string }[];
};

const Header: React.FC<HeaderProps> = ({ items }) => {
  items = [
    {
      name: "Notifications",
    },
    {
      name: "Settings",
    },
    {
      name: "Profile",
    },
  ];

  return (
    <header className="flex justify-end items-center h-28 px-8">
      <ul className="flex gap-x-4">
        {items.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
