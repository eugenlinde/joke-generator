import { Disclosure } from '@headlessui/react';
import { Link } from 'react-router-dom';
import { classNames } from '../util/generalUtil';
import { Route } from '../types';

const NavbarPanel = ({ routes }: { routes: Route[] }) => (
    // Mobile only
    <Disclosure.Panel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
            {routes.map((item) => (
                <Link
                    key={item.name}
                    to={item.href}
                    className={classNames(
                        item.href === location.pathname
                            ? 'bg-gray-900 text-white'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block rounded-md px-3 py-2 text-base font-medium',
                    )}
                    aria-current={
                        item.href === location.pathname ? 'page' : undefined
                    }
                >
                    {item.name}
                </Link>
            ))}
        </div>
    </Disclosure.Panel>
);

export default NavbarPanel;
