import { cn } from "@/lib/utils";
import React from "react";

const TypographyLead = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p className={cn("text-lg font-semibold tracking-tight", className)}>
      {children}
    </p>
  );
};

export default TypographyLead;
