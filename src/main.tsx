import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import "./index.css";
import NewJokes, { loader } from "./routes/NewJokes";
import SavedJokes from "./routes/SavedJokes";
import ErrorPage from "./ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <NewJokes/>,
        errorElement: <ErrorPage/>,
        loader: loader
    },
    {
        path: "/saved",
        element: <SavedJokes/>,
        errorElement: <ErrorPage/>
    },
]);

const root = document.getElementById("root")!;
ReactDOM.createRoot(root).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);