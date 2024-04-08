import { Disclosure } from '@headlessui/react';
import { Route } from '../types';
import NavbarButtons from './NavbarButtons';
import NavbarPanel from './NavbarPanel';

const routes: Route[] = [
    {
        href: '/',
        name: 'New Jokes',
    },
    {
        href: '/saved',
        name: 'Saved',
    },
];

const Navbar = () => {
    return (
        <Disclosure as="nav" className="bg-gray-800" data-testid="test-navbar">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <NavbarButtons routes={routes} open={open} />
                    </div>
                    <NavbarPanel routes={routes} />
                </>
            )}
        </Disclosure>
    );
};

export default Navbar;
