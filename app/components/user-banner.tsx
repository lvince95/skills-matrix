import {
  BriefcaseIcon,
  CalendarIcon,
  CheckIcon,
  CurrencyDollarIcon,
  MapPinIcon,
  PencilIcon,
} from "@heroicons/react/20/solid";
import { Link } from "./link";

export default function UserBanner() {
  return (
    <>
      <div className="md:flex md:items-center md:justify-between md:space-x-5">
        <div className="flex items-start space-x-5">
          <div className="flex-shrink-0">
            <div className="relative">
              <img
                className="h-16 w-16 rounded-full"
                src="/images/angry.webp"
                alt=""
              />
              <span
                className="absolute inset-0 rounded-full shadow-inner"
                aria-hidden="true"
              />
            </div>
          </div>
          {/*
          Use vertical padding to simulate center alignment when both lines of text are one line,
          but preserve the same layout if the text wraps without making the image jump around.
        */}
          <div className="pt-1.5">
            <h1 className="text-2xl font-bold text-gray-900">Example User</h1>
            <p className="text-sm font-medium text-gray-500">
              <Link href="#" className="text-gray-900">
                Front End Developer
              </Link>{" "}
            </p>
          </div>
        </div>
        <div className="mt-6 flex flex-col-reverse justify-stretch space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-x-3 sm:space-y-0 sm:space-x-reverse md:mt-0 md:flex-row md:space-x-3">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            <PencilIcon
              className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            Edit
          </button>
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <CheckIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
            Publish
          </button>
        </div>
      </div>
      <div className="mt-2 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
        <div className="mt-4 flex items-center text-sm text-gray-500">
          <BriefcaseIcon
            className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
            aria-hidden="true"
          />
          Full-time
        </div>
        <div className="mt-4 flex items-center text-sm text-gray-500">
          <MapPinIcon
            className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
            aria-hidden="true"
          />
          United States
        </div>
        <div className="mt-4 flex items-center text-sm text-gray-500">
          <CurrencyDollarIcon
            className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
            aria-hidden="true"
          />
          L3
        </div>
        <div className="mt-4 flex items-center text-sm text-gray-500">
          <CalendarIcon
            className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
            aria-hidden="true"
          />
          Joined on January 9, 2020
        </div>
      </div>
    </>
  );
}
