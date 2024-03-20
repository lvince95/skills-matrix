import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSeparator,
} from "./dropdown";
import { MenuButton as HeadlessMenuButton } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/16/solid";

export const Profile = () => {
  return (
    <Dropdown>
      <HeadlessMenuButton
        className="flex w-48 items-center gap-3 rounded-xl border border-transparent p-1 data-[active]:border-zinc-200 data-[hover]:border-zinc-200 dark:data-[active]:border-zinc-700 dark:data-[hover]:border-zinc-700"
        aria-label="Account options"
      >
        <img className="size-10 rounded-lg" src="/images/angry.webp" alt="" />
        <span className="block text-left">
          <span className="block text-sm/5 font-medium">Test User</span>
          <span className="block text-xs/5 text-zinc-500">Admin</span>
        </span>
        <ChevronUpDownIcon className="ml-auto mr-1 size-4 shrink-0 stroke-zinc-400" />
      </HeadlessMenuButton>
      <DropdownMenu className="min-w-[--button-width]">
        <DropdownItem href="/profile">My profile</DropdownItem>
        <DropdownItem href="/settings">Settings</DropdownItem>
        <DropdownSeparator />
        <DropdownItem>Sign out</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
