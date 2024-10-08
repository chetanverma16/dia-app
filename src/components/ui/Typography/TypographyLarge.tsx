import { cn } from "@/lib/utils";
import React from "react";

const TypographyLarge = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("text-lg font-semibold", className)}>{children}</div>
  );
};

export default TypographyLarge;
