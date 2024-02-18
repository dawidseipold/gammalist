import Link from "next/link";
import React from "react";
import Icon from "../helper/icon";

interface BreadcrumbProps {
  name: string;
  href: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ name, href }) => {
  return (
    // TODO: Change the color of the link
    <Link href={href} className="flex gap-x-2 items-center text-zinc-500">
      <Icon name="Folder" size={16} />
      <span className="capitalize">{name}</span>
    </Link>
  );
};

export default Breadcrumb;
