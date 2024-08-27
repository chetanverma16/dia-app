// Components
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import CreateNewDialog from "@/components/view/Brands/CreateNewDialog";
import SubHeader from "@/components/view/SubHeader";

// Dummy data
import { dummyBrands } from "@/lib/dummy/brands";

// assets
import {
  ArrowDownUp,
  ChevronLeft,
  ChevronRight,
  ChevronsUpDown,
  Filter,
  Plus,
} from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-col gap-y-2">
      <SubHeader />
      <Separator />
      <div className="flex items-center justify-between w-full py-2">
        <Dialog>
          <DialogTrigger>
            <Button className="flex items-center gap-x-2">
              <Plus size={14} />
              Create new brand profile
            </Button>
          </DialogTrigger>
          <DialogContent
            style={{
              height: "calc(100vh - 100px)",
            }}
            className="w-full max-w-6xl overflow-y-auto"
          >
            <CreateNewDialog />
          </DialogContent>
        </Dialog>

        <div className="flex items-center gap-x-2">
          <Input placeholder="Search" />
          <Button variant="outline" className="flex items-center gap-x-2">
            <ArrowDownUp size={14} />
            Sort
          </Button>
          <Button variant="outline" className="flex items-center gap-x-2">
            <Filter size={14} />
            Filter
          </Button>
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Industy</TableHead>
            <TableHead>Assigned Agents</TableHead>
            <TableHead>
              Number of campaigns
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Button
                    size="iconsm"
                    variant="ghost"
                    className="hover:bg-gray-300"
                  >
                    <ChevronsUpDown size={14} />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Sort</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Ascending</DropdownMenuItem>
                  <DropdownMenuItem>Descending</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableHead>
            <TableHead>
              Total amount spend{" "}
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Button
                    size="iconsm"
                    variant="ghost"
                    className="hover:bg-gray-300"
                  >
                    <ChevronsUpDown size={14} />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Sort</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Ascending</DropdownMenuItem>
                  <DropdownMenuItem>Descending</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {dummyBrands.map((item) => (
            <TableRow key={item.name}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.industry}</TableCell>
              <TableCell className="flex items-center -space-x-2">
                {item.assignedAgents.map((agent) => (
                  <div key={agent.name}>
                    <Avatar className="h-6 w-6 border border-gray-700">
                      <AvatarImage src={agent.avatar} />
                      <AvatarFallback>{agent.name}</AvatarFallback>
                    </Avatar>
                  </div>
                ))}
              </TableCell>
              <TableCell>{item.numberOfCampaigns}</TableCell>
              <TableCell>{item.totalAmountSpend}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Separator />
      <Pagination>
        <PaginationContent className="flex items-center justify-between w-full">
          <PaginationItem>
            <Button variant="outline" className="flex items-center gap-x-2">
              <ChevronLeft size={14} />
              Previous
            </Button>
          </PaginationItem>
          <div className="flex items-center gap-x-2">
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
              <PaginationLink href="#">2</PaginationLink>
              <PaginationLink href="#">3</PaginationLink>
              <PaginationLink href="#">4</PaginationLink>
            </PaginationItem>
          </div>
          <PaginationItem>
            <Button variant="outline" className="flex items-center gap-x-2">
              Next
              <ChevronRight size={14} />
            </Button>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </main>
  );
}
