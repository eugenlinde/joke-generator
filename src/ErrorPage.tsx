import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError() as { statusText: string; message: string };
  console.log("e: ", error);

  return (
    <div>
      <p>Error: Something went wrong...</p>
      <p>{error.statusText || error.message}</p>
    </div>
  );
};

export default ErrorPage;
