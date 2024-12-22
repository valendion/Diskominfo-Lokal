"use client";

import { Popover } from "flowbite-react";

const PopOver = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  const content = (
    <div className="w-64 text-sm text-gray-500 dark:text-gray-400">
      <div className="px-3 py-2">
        <p>{title}</p>
      </div>
    </div>
  );

  return (
    <Popover content={content} trigger="hover" placement="top">
      {children}
    </Popover>
  );
};

export default PopOver;
