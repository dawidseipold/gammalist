import React from "react";

interface SectionHeaderProps {
  title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
  return (
    <div>
      <h1 className="text-5xl capitalize">{title}</h1>
    </div>
  );
};

export default SectionHeader;
