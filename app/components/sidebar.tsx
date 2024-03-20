import {
  ChartPieIcon,
  Cog6ToothIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import { Link } from "./link";
import { NavLink } from "./nav-link";

const navigation = [
  { name: "Dashboard", href: "/", icon: HomeIcon, current: false },
  { name: "Team", href: "team", icon: UsersIcon, current: false },
  { name: "User", href: "users", icon: UsersIcon, current: false },
  { name: "Skills", href: "skills", icon: ChartPieIcon, current: false },
  { name: "Settings", href: "settings", icon: Cog6ToothIcon, current: false },
];

const teams = [
  { id: 1, name: "Heroicons", href: "#", initial: "H", current: false },
  { id: 2, name: "Tailwind Labs", href: "#", initial: "T", current: false },
  { id: 3, name: "Workcation", href: "#", initial: "W", current: false },
];

export const Sidebar = () => {
  return (
    <aside className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-72 lg:flex-col">
      <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4">
        <div className="flex h-16 shrink-0 items-center">
          {/* <img
            className="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=white"
            alt="Your Company"
          /> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#4099da"
            viewBox="0 0 302 91"
            className="h-8 w-auto"
          >
            <path d="M48.2 15.3C65 17.9 77.5 31.6 77.5 49.2c0 19.4-15.3 34.7-35.3 34.7S7 68.6 7 49.2c0-17.6 12.7-31.3 29.3-33.9V5.1h11.9v10.2zm15.5 33.8c0-10.7-6.2-18.8-15.5-21.2v20.3h-12V27.9C27 30.3 20.8 38.4 20.8 49.1c0 12.3 9.2 21.7 21.4 21.7s21.5-9.3 21.5-21.7zM114.4 36v12.7c-5.6.1-13.3 1.9-16.7 5.4v28.7H85.1V36.2h12.7v4.9c4.8-3.7 11.5-5.3 16.6-5.1zm2.7 39.4 7-9c3.1 3.9 7.9 6.1 12.7 6.1 3 0 4.9-1.3 4.9-3.5 0-3.2-3-3.9-8.9-5.2-9.4-2-13.9-6.7-13.9-14.3 0-8.2 7.5-14.3 17.4-14.3 6.6 0 12.5 2.3 16.8 6.8l-6.2 8.3c-3.2-2.8-6.6-4.2-10.5-4.2-3 0-5 1.2-5 3.1 0 2.6 2.2 3.1 8.8 4.4 9 1.9 13.9 7.2 13.9 15 0 8.6-7.1 14.7-16.9 14.7-8.1.2-15.9-2.8-20.1-7.9zm76.5 5.1c-3.8 1.9-7.8 2.8-11.6 2.8-9.6 0-17.2-6.3-17.2-18V47.5h-7.6V36.2h7.6V21.4h12.5v14.8h12.5l-3.1 11.4h-9.3v16.2c0 5.8 2.9 8.5 6.9 8.5 1.9 0 4.2-.6 6.4-1.8l2.9 10zm25.8-8.2c5.4 0 9-2.4 11.4-5.8l8.1 8c-4.3 5.8-11.5 9.3-19.5 9.3-14.2 0-24.9-10.4-24.9-24.2 0-13.7 10.5-24.2 24.4-24.2 13.2 0 22.5 10.3 22.5 23.5 0 1.7-.1 3.3-.3 4.5h-33.2c1.3 5.4 5.9 8.9 11.5 8.9zm-11.3-17.9h20.7c-1.3-5-5-8.2-9.8-8.2-5.3-.1-9.3 3.1-10.9 8.2zM295 15.6v67.2h-12.7v-2.2c-3.4 2-7.4 3.1-11.7 3.1-13.6 0-23.9-10.4-23.9-24.2s10.3-24.2 23.9-24.2c4.3 0 8.3 1.1 11.7 3.1V15.6H295zm-12.5 52.2V51.2c-2.1-2.5-5.7-4.3-10-4.3-7.3 0-12.5 5.5-12.5 12.7s5.3 12.7 12.5 12.7c4.3-.1 7.8-1.9 10-4.5z" />
          </svg>
        </div>
        <nav className="flex flex-1 flex-col">
          <ul className="flex flex-1 flex-col gap-y-7">
            <li>
              <ul className="-mx-2 space-y-1">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <NavLink
                      href={item.href}
                      className={({ isActive, isPending }) =>
                        clsx(
                          isActive
                            ? "bg-gray-50 text-indigo-600"
                            : "text-gray-700 hover:bg-gray-50 hover:text-indigo-600",
                          "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6",
                        )
                      }
                    >
                      {({ isActive, isPending }) => (
                        <>
                          <item.icon
                            className={clsx(
                              isActive
                                ? "text-indigo-600"
                                : "text-gray-400 group-hover:text-indigo-600",
                              "h-6 w-6 shrink-0",
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </>
                      )}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <div className="text-xs font-semibold leading-6 text-gray-400">
                Your teams
              </div>
              <ul className="-mx-2 mt-2 space-y-1">
                {teams.map((team) => (
                  <li key={team.name}>
                    <Link
                      href={team.href}
                      className={clsx(
                        team.current
                          ? "bg-gray-50 text-indigo-600"
                          : "text-gray-700 hover:bg-gray-50 hover:text-indigo-600",
                        "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6",
                      )}
                    >
                      <span
                        className={clsx(
                          team.current
                            ? "border-indigo-600 text-indigo-600"
                            : "border-gray-200 text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600",
                          "flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border bg-white text-[0.625rem] font-medium",
                        )}
                      >
                        {team.initial}
                      </span>
                      <span className="truncate">{team.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li className="mt-auto">
              <Link
                href="#"
                className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
              >
                <Cog6ToothIcon
                  className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                  aria-hidden="true"
                />
                Settings
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};
