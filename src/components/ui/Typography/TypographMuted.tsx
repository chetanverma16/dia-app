import React from "react";

const TypographMuted = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className="text-sm text-gray-400">{children}</div>;
};

export default TypographMuted;
