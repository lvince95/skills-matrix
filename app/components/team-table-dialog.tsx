import { Button } from "@/components/button";
import {
  Dialog,
  DialogActions,
  DialogBody,
  DialogDescription,
  DialogTitle,
} from "@/components/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/table";
import { useState } from "react";
import { Text } from "@/components/text";
import clsx from "clsx";

const users = [
  {
    name: "Test",
    handle: "test",
    role: "Software Engineer",
    email: "test@orsted.com",
    access: "Member",
    width: "w-full",
  },
  {
    name: "Test",
    handle: "test",
    role: "Software Engineer",
    email: "test@orsted.com",
    access: "Member",
    width: "w-2/5",
  },
  {
    name: "Test",
    handle: "test",
    role: "Software Engineer",
    email: "test@orsted.com",
    access: "Member",
    width: "w-4/5",
  },
  {
    name: "Test",
    handle: "test",
    role: "Software Engineer",
    email: "test@orsted.com",
    access: "Member",
    width: "w-full",
  },
  {
    name: "Test",
    handle: "test",
    role: "Software Engineer",
    email: "test@orsted.com",
    access: "Member",
    width: "w-1/5",
  },
];

export function TeamTableDialog() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button className="mt-8" type="button" onClick={() => setIsOpen(true)}>
        Show Details
      </Button>
      <Dialog open={isOpen} onClose={setIsOpen} size="5xl">
        <DialogTitle>Skills</DialogTitle>
        <DialogDescription>
          The following users have these skills.
        </DialogDescription>
        <DialogBody>
          <Table dense>
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
                        "rounded-lg bg-blue-500 px-4 py-2 shadow-lg",
                        user.width,
                      )}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </DialogBody>
        <DialogActions>
          <Button onClick={() => setIsOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
