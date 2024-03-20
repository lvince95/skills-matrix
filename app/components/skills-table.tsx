import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/table";
import clsx from "clsx";
import { Text } from "./text";

const users = [
  {
    name: "Example User 1",
    handle: "exampleuser1",
    role: "Software Engineer",
    email: "exampleuser1@orsted.com",
    access: "Member",
    width: "w-full",
    width2: "w-3/4",
  },
  {
    name: "Example User 2",
    handle: "exampleuser2",
    role: "Software Engineer",
    email: "exampleuser2@orsted.com",
    access: "Member",
    width: "w-2/5",
    width2: "w-full",
  },
  {
    name: "Example User 3",
    handle: "exampleuser3",
    role: "Software Engineer",
    email: "exampleuser3@orsted.com",
    access: "Member",
    width: "w-4/5",
    width2: "w-2/5",
  },
  {
    name: "Example User 4",
    handle: "exampleuser4",
    role: "Software Engineer",
    email: "exampleuser4@orsted.com",
    access: "Member",
    width: "w-3/5",
    width2: "w-3/5",
  },
  {
    name: "Example User 5",
    handle: "exampleuser5",
    role: "Software Engineer",
    email: "exampleuser5@orsted.com",
    access: "Member",
    width: "w-4/5",
    width2: "w-2/5",
  },
  {
    name: "Example User 6",
    handle: "exampleuser6",
    role: "Software Engineer",
    email: "exampleuser6@orsted.com",
    access: "Member",
    width: "w-3/5",
    width2: "w-3/5",
  },
  {
    name: "Example User 7",
    handle: "exampleuser7",
    role: "Software Engineer",
    email: "exampleuser7@orsted.com",
    access: "Member",
    width: "w-4/5",
    width2: "w-2/5",
  },
  {
    name: "Example User 8",
    handle: "exampleuser8",
    role: "Software Engineer",
    email: "exampleuser8@orsted.com",
    access: "Member",
    width: "w-3/5",
    width2: "w-2/5",
  },
  {
    name: "Example User 9",
    handle: "exampleuser9",
    role: "Software Engineer",
    email: "exampleuser9@orsted.com",
    access: "Member",
    width: "w-4/5",
    width2: "w-2/5",
  },
  {
    name: "Example User 10",
    handle: "exampleuser10",
    role: "Software Engineer",
    email: "exampleuser10@orsted.com",
    access: "Member",
    width: "w-1/5",
    width2: "w-4/5",
  },
  {
    name: "Example User 11",
    handle: "exampleuser11",
    role: "Software Engineer",
    email: "exampleuser11@orsted.com",
    access: "Member",
    width: "w-4/5",
    width2: "w-full",
  },
  {
    name: "Example User 12",
    handle: "exampleuser12",
    role: "Software Engineer",
    email: "exampleuser12@orsted.com",
    access: "Member",
    width: "w-3/5",
    width2: "w-2/5",
  },
];

export function SkillsTable() {
  return (
    <Table
      dense
      grid
      className="[--gutter:theme(spacing.6)] sm:[--gutter:theme(spacing.8)]"
    >
      <TableHead>
        <TableRow>
          <TableHeader>Name</TableHeader>
          <TableHeader className="flex flex-row justify-between">
            <Text>Novice</Text>
            <Text>Competent</Text>
            <Text>Professional</Text>
            <Text>Expert</Text>
          </TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.handle}>
            <TableCell className="font-medium">{user.name}</TableCell>
            <TableCell>
              <div
                className={clsx(
                  "rounded-lg bg-red-500 px-4 py-1.5 shadow-lg",
                  user.width,
                )}
              />
              <div
                className={clsx(
                  "mt-2 rounded-lg bg-blue-500 px-4 py-1.5 shadow-lg",
                  user.width2,
                )}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
