import { Listbox, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import SelectButton from './SelectButton';
import SelectOption from './SelectOption';

interface SelectProps {
    data: string[];
    value: string;
    callback: (selectedOption: string) => void;
}

const Select = ({ data, value, callback }: SelectProps): JSX.Element => {
    return (
        <Listbox value={value} onChange={(e) => callback(e)}>
            {({ open }) => (
                <>
                    <div className="relative mt-2" data-testid="test-select">
                        <SelectButton value={value} />
                        <Transition
                            show={open}
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                {data.map((value) => (
                                    <SelectOption value={value} key={value} />
                                ))}
                            </Listbox.Options>
                        </Transition>
                    </div>
                </>
            )}
        </Listbox>
    );
};

export default Select;
