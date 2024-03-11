import ListSkeleton from "../skeletons/ListSkeleton";
import { Joke } from "../types";
import Button from "./Button";

interface ListProps {
  data: Joke[];
  buttonText: string;
  buttonCallback: (a: Joke) => void;
  children?: React.ReactNode;
}

const List = ({ data, buttonText, buttonCallback }: ListProps): JSX.Element => {
  if (!data.length) {
    return <ListSkeleton />;
  }

  return (
    <div
      className="mx-auto mt-4 rounded-xl ring-1 ring-gray-200 lg:mx-0 lg:max-w-none px-6 py-4"
      data-testid="test-list"
    >
      <ul role="list" className="divide-y divide-gray-100">
        {data.map((el: Joke) => (
          <li
            key={el.value}
            className="flex items-center justify-between gap-x-6 py-5"
          >
            <div className="flex min-w-0 gap-x-4">
              <div className="min-w-0 max-w-5xl flex-auto">
                <p className="text-ellipsis text-s leading-5 text-gray-500">
                  {el.value}
                </p>
              </div>
            </div>
            <div className="shrink-0 sm:flex sm:flex-col max-w-24">
              <Button
                text={buttonText}
                value={el.value}
                callback={buttonCallback}
              />
              <p className="mt-1 text-xs leading-5 text-gray-500">
                <time dateTime="2024-03-07T13:23Z">{el.date}</time>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
