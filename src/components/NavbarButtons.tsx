import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { Route } from "../types";
import { classNames } from "../util/generalUtil";

interface NavbarButtonsProps {
  routes: Route[];
  open: boolean;
}

const NavbarButtons = ({ routes, open }: NavbarButtonsProps) => (
  <div className="relative flex h-16 items-center justify-between">
    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
      {/* Mobile */}
      <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
        <span className="absolute -inset-0.5" />
        <span className="sr-only">Open menu</span>
        {open ? (
          <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
        ) : (
          <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
        )}
      </Disclosure.Button>
    </div>
    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
      <div className="hidden sm:block">
        <div className="flex space-x-4">
          {routes.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={classNames(
                item.href === location.pathname
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "rounded-md px-3 py-2 text-sm font-medium"
              )}
              aria-current={
                item.href === location.pathname ? "page" : undefined
              }
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default NavbarButtons;
