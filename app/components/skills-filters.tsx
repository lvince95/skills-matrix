import { Fragment, useState } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";
import { ActiveFilters } from "./active-filters";

const subCategories = [
  { name: "Frontend", href: "#" },
  { name: "Backpacks", href: "#" },
  { name: "Travel Bags", href: "#" },
  { name: "Hip Bags", href: "#" },
  { name: "Laptop Sleeves", href: "#" },
];

const filters = [
  {
    id: "frontend",
    name: "Frontend",
    options: [
      { value: "white", label: "Angular", checked: true },
      { value: "beige", label: "React", checked: false },
      { value: "blue", label: "Vue", checked: false },
      { value: "brown", label: "Svelte", checked: false },
    ],
  },
  {
    id: "backend",
    name: "Backend",
    options: [
      { value: "new-arrivals", label: "FastAPI", checked: false },
      { value: "sale", label: "Django", checked: false },
      { value: "travel", label: "NodeJS", checked: false },
      { value: "organization", label: ".NET", checked: true },
      { value: "accessories", label: "Accessories", checked: false },
    ],
  },
  {
    id: "database",
    name: "Database",
    options: [
      { value: "2l", label: "MSSQL", checked: false },
      { value: "6l", label: "PostgreSQL", checked: false },
      { value: "12l", label: "MySQL", checked: false },
      { value: "18l", label: "NoSQL", checked: false },
      { value: "20l", label: "CassandraDB", checked: false },
    ],
  },
  {
    id: "cloud",
    name: "Cloud",
    options: [
      { value: "2l", label: "AWS", checked: false },
      { value: "6l", label: "Azure", checked: false },
      { value: "12l", label: "Cloudflare", checked: false },
      { value: "18l", label: "Vercel", checked: false },
      { value: "20l", label: "Netlify", checked: false },
    ],
  },
];

export function SkillsFilters() {
  return (
    <form className="hidden p-8 lg:block">
      <h3 className="border-b pb-4 text-2xl font-semibold">Filters</h3>
      {/* <ul className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
        {subCategories.map((category) => (
          <li key={category.name}>
            <a href={category.href}>{category.name}</a>
          </li>
        ))}
      </ul> */}

      {filters.map((section) => (
        <Disclosure
          as="div"
          key={section.id}
          className="border-b border-gray-200 py-6"
        >
          {({ open }) => (
            <>
              <h3 className="-my-3 flow-root">
                <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                  <span className="font-medium text-gray-900">
                    {section.name}
                  </span>
                  <span className="ml-6 flex items-center">
                    {open ? (
                      <MinusIcon className="h-5 w-5" aria-hidden="true" />
                    ) : (
                      <PlusIcon className="h-5 w-5" aria-hidden="true" />
                    )}
                  </span>
                </Disclosure.Button>
              </h3>
              <Disclosure.Panel className="pt-6">
                <div className="space-y-4">
                  {section.options.map((option, optionIdx) => (
                    <div key={option.value} className="flex items-center">
                      <input
                        id={`filter-${section.id}-${optionIdx}`}
                        name={`${section.id}[]`}
                        defaultValue={option.value}
                        type="checkbox"
                        defaultChecked={option.checked}
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label
                        htmlFor={`filter-${section.id}-${optionIdx}`}
                        className="ml-3 text-sm text-gray-600"
                      >
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ))}
    </form>
  );
}
