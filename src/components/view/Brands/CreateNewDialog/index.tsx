import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import TypographMuted from "@/components/ui/Typography/TypographMuted";
import TypographyLead from "@/components/ui/Typography/TypographyLead";
import TypographySmall from "@/components/ui/Typography/TypographySmall";
import { Ellipsis, Plus, X } from "lucide-react";
import Image from "next/image";
import React from "react";

const CreateNewDialog = () => {
  return (
    <>
      <DialogHeader>
        <DialogTitle>Create new brand profile</DialogTitle>
      </DialogHeader>
      <div className="grid grid-cols-3 w-full gap-6">
        <div className="flex flex-col gap-y-4">
          {/* Upload Cover Photo */}
          <div className="flex flex-col gap-y-2 border-gray-100">
            <div className="flex items-center justify-between">
              <Label>Upload cover photo</Label>
              <Plus size={14} />
            </div>
            <div className="w-full h-48 relative">
              <Image
                src="/placeholder/image.png"
                alt="placeholder"
                className="rounded-lg object-cover"
                layout="fill"
              />
            </div>
            <TypographMuted>
              Cover photo should have dimensions of 1920px by 1080px
            </TypographMuted>
          </div>
          {/* Upload Profile Photo */}
          <div className="flex flex-col gap-y-2">
            <div className="flex items-center justify-between">
              <Label>Upload profile photo</Label>
              <Plus size={14} />
            </div>
            <div className="w-full h-48 relative">
              <Image
                src="/placeholder/image.png"
                alt="placeholder"
                className="rounded-lg object-cover"
                width={200}
                height={200}
              />
            </div>
            <TypographMuted>
              Cover photo should have dimensions of 1920px by 1080px
            </TypographMuted>
          </div>
        </div>
        <div className="flex flex-col gap-y-4">
          <div className="flex flex-col gap-y-2">
            <Label>Basic Information</Label>
            <Input placeholder="Brand name" />
            <Textarea placeholder="Description" rows={5} />
            <div className="flex items-center gap-x-2">
              <Input placeholder="Industry" />
              <Input placeholder="Website" />
            </div>
          </div>
          <div className="flex flex-col gap-y-2">
            <Label>Social Media Links</Label>
            <div className="grid grid-cols-2 gap-2">
              <Input placeholder="Instagram" />
              <Input placeholder="Youtube" />
              <Input placeholder="TikTok" />
              <Input placeholder="X (formerly Twitter)" />
              <Input placeholder="Facebook" />
              <Input placeholder="Snapchat" />
            </div>
          </div>
          <div className="flex flex-col gap-y-2">
            <Label>Basic Information</Label>
            <Input placeholder="Brand name" />
            <Textarea placeholder="Description" rows={5} />
            <div className="flex items-center gap-x-2">
              <Input placeholder="Industry" />
              <Input placeholder="Website" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-4">
          <div className="flex flex-col gap-y-2">
            <div className="flex items-center justify-between">
              <Label>Assigned agents</Label>
              <Button size="iconsm" variant="ghost">
                <Plus size={14} />
              </Button>
            </div>
            <div className="flex flex-col gap-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-2">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src="/placeholder/image.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <TypographySmall>Agent Name</TypographySmall>
                </div>
                <Button size="iconsm" variant="ghost">
                  <X size={14} />
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-2">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src="/placeholder/image.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <TypographySmall>Agent Name</TypographySmall>
                </div>
                <Button size="iconsm" variant="ghost">
                  <X size={14} />
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-2">
            <div className="flex items-center justify-between">
              <Label>Attach files</Label>
              <Button size="iconsm" variant="ghost">
                <Plus size={14} />
              </Button>
            </div>
            <div className="flex items-center justify-center p-4 rounded-lg border-dashed border border-gray-200">
              <TypographySmall className="text-gray-400">
                Drop files here or click to <u>upload</u>
              </TypographySmall>
            </div>
            <div className="flex flex-col gap-y-2 mt-2">
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-y-1">
                  <Label>Terms and Conditions</Label>
                  <TypographMuted>100kb of 100kb</TypographMuted>
                </div>
                <Button size="iconsm" variant="ghost">
                  <Ellipsis size={14} />
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-y-1">
                  <Label>NDA_002.pdf</Label>
                  <TypographMuted>100kb of 100kb</TypographMuted>
                </div>
                <Button size="iconsm" variant="ghost">
                  <Ellipsis size={14} />
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-2">
            <div className="flex items-center justify-between">
              <Label>Contact person</Label>
              <Button variant="ghost" size="sm">
                Edit
              </Button>
            </div>
            <Input type="text" placeholder="Name" />
            <Input type="email" placeholder="Email" />
            <Input type="text" placeholder="Contact number" />
            <Input type="text" placeholder="LinkedIn" />
          </div>
        </div>
      </div>
      <DialogFooter className="border-t border-gray-100 pt-4">
        <Button variant="secondary">Complete Later</Button>
        <Button>Save</Button>
      </DialogFooter>
    </>
  );
};

export default CreateNewDialog;
