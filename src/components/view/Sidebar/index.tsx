"use client";

import React from "react";

// Components
import { Button } from "@/components/ui/button";

// Assets
import {
  Briefcase,
  Calendar,
  ChartNoAxesColumnIncreasing,
  ChevronRight,
  GroupIcon,
  LogOut,
  MessageCircle,
  Minimize2,
  NotebookPen,
  Settings,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const navs = [
    {
      Icon: ChartNoAxesColumnIncreasing,
      name: "Overview",
      href: "/",
    },
    {
      Icon: Briefcase,
      name: "Brands",
      href: "/brands",
    },
    {
      Icon: Calendar,
      name: "Calendar",
      href: "/calendar",
    },
    {
      Icon: GroupIcon,
      name: "Talents",
      href: "/talents",
    },
    {
      Icon: NotebookPen,
      name: "Drafts",
      href: "/drafts",
    },
    {
      Icon: MessageCircle,
      name: "Messages",
      href: "/messages",
    },
  ];

  return (
    <div className="w-[248px] bg-[#161616] text-white flex flex-col justify-between">
      <div className="flex flex-col gap-y-16 p-2">
        <div className="flex items-center justify-between p-3">
          <h3 className="text-2xl">DIA</h3>
          <Button
            size="icon"
            variant="ghost"
            className="hover:bg-[#606060] hover:text-white"
          >
            <Minimize2 size={14} />
          </Button>
        </div>
        <nav className="flex flex-col gap-y-2">
          {navs.map((nav) => (
            <Button
              key={nav.name}
              className={cn(
                "flex items-center justify-start gap-x-2 w-full hover:bg-[#606060] hover:text-white",
                {
                  "bg-[#606060] text-white":
                    pathname === nav.href || pathname.startsWith(nav.href),
                }
              )}
              variant="ghost"
            >
              <nav.Icon size={16} />
              <span>{nav.name}</span>
            </Button>
          ))}
        </nav>
      </div>
      <div className="flex flex-col p-2">
        <Separator className="bg-gray-700 w-full" />
        <div className="my-4 flex flex-col gap-y-2">
          <Button
            className={cn(
              "flex items-center justify-start gap-x-2 w-full hover:bg-[#606060] hover:text-white"
            )}
            variant="ghost"
          >
            <Avatar className="h-6 w-6">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span>Profile</span>
          </Button>
          <Button
            className={cn(
              "flex items-center justify-start gap-x-2 w-full hover:bg-[#606060] hover:text-white"
            )}
            variant="ghost"
          >
            <Settings size={16} />
            <span>Settings</span>
          </Button>
          <Button
            className={cn(
              "flex items-center justify-start gap-x-2 w-full hover:bg-[#606060] hover:text-white"
            )}
            variant="ghost"
          >
            <LogOut size={16} />
            <span>Logout</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
