import React from 'react';
import Navbar from '../components/Navbar';

interface SavedJokesLayoutProps {
    children: React.ReactNode;
}

const SavedJokesLayout: React.FC<SavedJokesLayoutProps> = ({ children }) => {
    return (
        <>
            <Navbar />
            <main className="mx-auto px-2 sm:px-6 lg:px-8 max-w-7xl">
                {children}
            </main>
        </>
    );
};

export default SavedJokesLayout;
