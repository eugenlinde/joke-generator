import { Listbox } from '@headlessui/react';
import { ChevronUpDownIcon } from '@heroicons/react/20/solid';

const SelectButton = ({ value }: { value: string }) => (
    <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
        <span className="flex items-center">
            <span className="ml-3 block truncate">{value}</span>
        </span>
        <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
            <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
            />
        </span>
    </Listbox.Button>
);

export default SelectButton;
