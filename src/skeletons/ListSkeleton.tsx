const ListSkeleton = () => {
  return (
    <div
      className="mx-auto mt-4 rounded-xl ring-1 ring-gray-200 lg:mx-0 lg:max-w-none px-6 py-4"
      role="presentation"
    >
      <ul className="divide-y divide-gray-100">
        <li className="flex items-center justify-between gap-x-6 py-5 animate-pulse">
          <div className="flex gap-x-4 w-full">
            <div className="min-w-0 flex-auto">
              <div className="max-w-5xl">
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-300 mb-4" />
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-300 mb-4" />
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-300 max-w-[100px] mb-4" />
              </div>
            </div>
          </div>
          <div className="h-10 bg-gray-200 rounded dark:bg-gray-300 w-24" />
        </li>
        <li className="flex items-center justify-between gap-x-6 py-5 animate-pulse">
          <div className="flex gap-x-4 w-full">
            <div className="min-w-0 flex-auto">
              <div className="max-w-5xl">
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-300 mb-4" />
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-300 mb-4" />
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-300 max-w-[100px] mb-4" />
              </div>
            </div>
          </div>
          <div className="h-10 bg-gray-200 rounded dark:bg-gray-300 w-24" />
        </li>
        <li className="flex items-center justify-between gap-x-6 py-5 animate-pulse">
          <div className="flex gap-x-4 w-full">
            <div className="min-w-0 flex-auto">
              <div className="max-w-5xl">
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-300 mb-4" />
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-300 mb-4" />
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-300 max-w-[100px] mb-4" />
              </div>
            </div>
          </div>
          <div className="h-10 bg-gray-200 rounded dark:bg-gray-300 w-24" />
        </li>
      </ul>
    </div>
  );
};

export default ListSkeleton;
