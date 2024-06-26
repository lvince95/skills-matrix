import { Bars3Icon, BellIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Profile } from "./profile";
import { useState } from "react";
import { MobileSidebar } from "./mobile-sidebar";
import { Link } from "./link";
import { NavLink } from "./nav-link";

export const AltHeader = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarOpen = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <>
      <MobileSidebar isOpen={sidebarOpen} handleClose={handleSidebarOpen} />
      <div className="flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-6">
        <button
          type="button"
          className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
          onClick={() => setSidebarOpen(true)}
        >
          <span className="sr-only">Open sidebar</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>

        {/* Separator */}
        <div className="h-6 w-px bg-gray-900/10 lg:hidden" aria-hidden="true" />

        <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="mr-8 flex flex-shrink-0 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#4099da"
                viewBox="0 0 302 91"
                className="h-8 w-auto"
              >
                <path d="M48.2 15.3C65 17.9 77.5 31.6 77.5 49.2c0 19.4-15.3 34.7-35.3 34.7S7 68.6 7 49.2c0-17.6 12.7-31.3 29.3-33.9V5.1h11.9v10.2zm15.5 33.8c0-10.7-6.2-18.8-15.5-21.2v20.3h-12V27.9C27 30.3 20.8 38.4 20.8 49.1c0 12.3 9.2 21.7 21.4 21.7s21.5-9.3 21.5-21.7zM114.4 36v12.7c-5.6.1-13.3 1.9-16.7 5.4v28.7H85.1V36.2h12.7v4.9c4.8-3.7 11.5-5.3 16.6-5.1zm2.7 39.4 7-9c3.1 3.9 7.9 6.1 12.7 6.1 3 0 4.9-1.3 4.9-3.5 0-3.2-3-3.9-8.9-5.2-9.4-2-13.9-6.7-13.9-14.3 0-8.2 7.5-14.3 17.4-14.3 6.6 0 12.5 2.3 16.8 6.8l-6.2 8.3c-3.2-2.8-6.6-4.2-10.5-4.2-3 0-5 1.2-5 3.1 0 2.6 2.2 3.1 8.8 4.4 9 1.9 13.9 7.2 13.9 15 0 8.6-7.1 14.7-16.9 14.7-8.1.2-15.9-2.8-20.1-7.9zm76.5 5.1c-3.8 1.9-7.8 2.8-11.6 2.8-9.6 0-17.2-6.3-17.2-18V47.5h-7.6V36.2h7.6V21.4h12.5v14.8h12.5l-3.1 11.4h-9.3v16.2c0 5.8 2.9 8.5 6.9 8.5 1.9 0 4.2-.6 6.4-1.8l2.9 10zm25.8-8.2c5.4 0 9-2.4 11.4-5.8l8.1 8c-4.3 5.8-11.5 9.3-19.5 9.3-14.2 0-24.9-10.4-24.9-24.2 0-13.7 10.5-24.2 24.4-24.2 13.2 0 22.5 10.3 22.5 23.5 0 1.7-.1 3.3-.3 4.5h-33.2c1.3 5.4 5.9 8.9 11.5 8.9zm-11.3-17.9h20.7c-1.3-5-5-8.2-9.8-8.2-5.3-.1-9.3 3.1-10.9 8.2zM295 15.6v67.2h-12.7v-2.2c-3.4 2-7.4 3.1-11.7 3.1-13.6 0-23.9-10.4-23.9-24.2s10.3-24.2 23.9-24.2c4.3 0 8.3 1.1 11.7 3.1V15.6H295zm-12.5 52.2V51.2c-2.1-2.5-5.7-4.3-10-4.3-7.3 0-12.5 5.5-12.5 12.7s5.3 12.7 12.5 12.7c4.3-.1 7.8-1.9 10-4.5z" />
              </svg>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
              <NavLink
                href="/"
                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
              >
                Dashboard
              </NavLink>
              <NavLink
                href="team"
                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
              >
                Team
              </NavLink>
              <NavLink
                href="users"
                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
              >
                User
              </NavLink>
              <NavLink
                href="settings"
                className="inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900"
              >
                Skills
              </NavLink>
              <NavLink
                href="#"
                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
              >
                Settings
              </NavLink>
            </div>
          </div>
          <div className="flex items-center gap-x-4 lg:gap-x-6">
            <button
              type="button"
              className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">View notifications</span>
              <BellIcon className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* Separator */}
            <div
              className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10"
              aria-hidden="true"
            />

            {/* Profile dropdown */}
            <Profile />
          </div>
        </div>
      </div>
    </>
  );
};
