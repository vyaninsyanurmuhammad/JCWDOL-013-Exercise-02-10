import React, { ReactNode } from "react";

const ContentLayout = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <>
      <div
        className={`relative flex flex-col gap-4 w-full h-fit bg-[#1e1b1e] p-6 rounded-3xl ${className}`}
      >
        {children}
      </div>
    </>
  );
};

export default ContentLayout;
