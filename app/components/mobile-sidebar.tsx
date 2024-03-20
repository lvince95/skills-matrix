import { useState } from "react";
import {
  Bars3Icon,
  BellIcon,
  CalendarIcon,
  ChartPieIcon,
  Cog6ToothIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";
import clsx from "clsx";
import { Link } from "./link";
import {
  Dialog,
  DialogActions,
  DialogBody,
  DialogDescription,
  DialogTitle,
} from "./dialog";
import { Field, Label } from "./fieldset";
import { Input } from "./input";
import { Button } from "./button";

const navigation = [
  { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
  { name: "Team", href: "#", icon: UsersIcon, current: false },
  { name: "Projects", href: "#", icon: FolderIcon, current: false },
  { name: "Calendar", href: "#", icon: CalendarIcon, current: false },
  {
    name: "Documents",
    href: "#",
    icon: DocumentDuplicateIcon,
    current: false,
  },
  { name: "Reports", href: "#", icon: ChartPieIcon, current: false },
];

const teams = [
  { id: 1, name: "Heroicons", href: "#", initial: "H", current: false },
  { id: 2, name: "Tailwind Labs", href: "#", initial: "T", current: false },
  { id: 3, name: "Workcation", href: "#", initial: "W", current: false },
];

type MobileSidebarProps = {
  isOpen: boolean;
  handleClose: () => void;
};

export const MobileSidebar = ({ isOpen, handleClose }: MobileSidebarProps) => {
  return (
    <Dialog size="xl" open={isOpen} onClose={handleClose}>
      <DialogTitle>Refund payment</DialogTitle>
      <DialogDescription>
        The refund will be reflected in the customer’s bank account 2 to 3
        business days after processing.
      </DialogDescription>
      <DialogBody>
        <Field>
          <Label>Amount</Label>
          <Input name="amount" placeholder="$0.00" />
        </Field>
      </DialogBody>
      <DialogActions>
        <Button plain onClick={() => handleClose()}>
          Cancel
        </Button>
        <Button onClick={() => handleClose()}>Refund</Button>
      </DialogActions>
    </Dialog>
  );
};
