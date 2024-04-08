import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './ErrorPage';
import './index.css';
import NewJokes from './components/NewJokes';
import SavedJokes from './components/SavedJokes';
import { loader } from './loaders';

const router = createBrowserRouter([
    {
        path: '/',
        element: <NewJokes />,
        errorElement: <ErrorPage />,
        loader: loader,
    },
    {
        path: '/saved',
        element: <SavedJokes />,
        errorElement: <ErrorPage />,
    },
]);

const root = document.getElementById('root')!;
ReactDOM.createRoot(root).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
