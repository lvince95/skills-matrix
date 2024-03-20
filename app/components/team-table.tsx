import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/table";
import {
  Pagination,
  PaginationGap,
  PaginationList,
  PaginationNext,
  PaginationPage,
  PaginationPrevious,
} from "@/components/pagination";

const users = [
  {
    name: "Test",
    handle: "test",
    role: "Software Engineer",
    email: "test@orsted.com",
    access: "Member",
  },
  {
    name: "Test",
    handle: "test",
    role: "Software Engineer",
    email: "test@orsted.com",
    access: "Member",
  },
  {
    name: "Test",
    handle: "test",
    role: "Software Engineer",
    email: "test@orsted.com",
    access: "Member",
  },
  {
    name: "Test",
    handle: "test",
    role: "Software Engineer",
    email: "test@orsted.com",
    access: "Member",
  },
  {
    name: "Test",
    handle: "test",
    role: "Software Engineer",
    email: "test@orsted.com",
    access: "Member",
  },
];

export function TeamTable() {
  return (
    <>
      <Table
        grid
        className="[--gutter:theme(spacing.6)] sm:[--gutter:theme(spacing.8)]"
      >
        <TableHead>
          <TableRow className="bg-white text-zinc-950 dark:text-white">
            <TableHeader>Name</TableHeader>
            <TableHeader>Handle</TableHeader>
            <TableHeader>Role</TableHeader>
            <TableHeader>Email</TableHeader>
            <TableHeader>Access</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody className="bg-white">
          {users.map((user) => (
            <TableRow key={user.handle}>
              <TableCell className="font-medium">{user.name}</TableCell>
              <TableCell>@{user.handle}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell className="text-zinc-500">{user.access}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Pagination className="mt-6">
        <PaginationPrevious href="?page=2" />
        <PaginationList>
          <PaginationPage href="?page=1">1</PaginationPage>
          <PaginationPage href="?page=2">2</PaginationPage>
          <PaginationPage href="?page=3" current>
            3
          </PaginationPage>
          <PaginationPage href="?page=4">4</PaginationPage>
          <PaginationGap />
          <PaginationPage href="?page=65">65</PaginationPage>
          <PaginationPage href="?page=66">66</PaginationPage>
        </PaginationList>
        <PaginationNext href="?page=4" />
      </Pagination>
    </>
  );
}
