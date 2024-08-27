"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import TypographyLarge from "@/components/ui/Typography/TypographyLarge";
import { Bell } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <div className="flex items-center justify-between w-full p-3">
      <TypographyLarge>Brands</TypographyLarge>
      <div className="flex items-center gap-x-2">
        <Input placeholder="Search" />
        <Button variant="ghost" size="icon">
          <Bell size={14} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
