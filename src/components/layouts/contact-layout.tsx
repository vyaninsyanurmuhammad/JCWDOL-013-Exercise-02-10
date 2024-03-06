import React, { ReactNode } from "react";

const ContactLlayout = ({
  children,
  className,
  href,
}: {
  children: ReactNode;
  className?: string;
  href?: string;
}) => {
  return (
    <>
      <a
        className={`flex shrink-0 p-4 rounded-full bg-[#272427] hover:opacity-70 ${className}`}
        href={href}
        target="_blank"
      >
        {children}
      </a>
    </>
  );
};

export default ContactLlayout;
