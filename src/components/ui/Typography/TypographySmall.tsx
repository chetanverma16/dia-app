import { cn } from "@/lib/utils";
import React from "react";

const TypographySmall = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("text-sm font-medium leading-none", className)}>
      {children}
    </div>
  );
};

export default TypographySmall;
