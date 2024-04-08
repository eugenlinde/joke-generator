import React from 'react';
import Navbar from '../components/Navbar';

interface NewJokesLayoutProps {
    children: React.ReactNode;
}

const NewJokesLayout: React.FC<NewJokesLayoutProps> = ({ children }) => {
    return (
        <>
            <Navbar />
            <main className="mx-auto px-2 sm:px-6 lg:px-8 max-w-7xl">
                {children}
            </main>
        </>
    );
};

export default NewJokesLayout;
