import React from "react";

export const DetailsSkeleton = () => {
  return (
    <div
      className="animate-pulse max-w-5xl mx-auto h-auto p-6 bg-gray-100 rounded-lg shadow-md mt-8"
      role="status"
    >
      <div className="py-8 px-2 flex flex-col lg:flex-row gap-10 items-center">
        {/* Poster Image */}
        <div className="flex items-center justify-center w-[276px] h-96 rounded-lg bg-gray-300 dark:bg-gray-700 shadow-md">
          <svg
            className="w-12 h-12 text-gray-200 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 20"
          >
            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
          </svg>
        </div>

        {/* Movie Details */}
        <div className="flex-col h-full w-[75%]">
          <h2 className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-[30%] mt-4 mb-[12px]">
            {""}
          </h2>
          <h2 className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-[40%] mt-4 mb-8">
            {""}
          </h2>
          <article className="w-full">
            <p className="h-2.5 my-2 bg-gray-300 rounded-full dark:bg-gray-600 w-[95%] mb-1">
              {""}
            </p>
            <p className="h-2.5 my-2 bg-gray-300 rounded-full dark:bg-gray-600 w-[85%] mb-1">
              {""}
            </p>
            <p className="h-2.5 my-2 bg-gray-300 rounded-full dark:bg-gray-600 w-[100%] mb-1">
              {""}
            </p>
            <p className="h-2.5 my-2 bg-gray-300 rounded-full dark:bg-gray-600 w-[80%] mb-1">
              {""}
            </p>
            <p className="h-2.5 my-2 bg-gray-300 rounded-full dark:bg-gray-600 w-[90%] mb-1">
              {""}
            </p>
            <p className="h-2.5 my-2 bg-gray-300 rounded-full dark:bg-gray-600 w-[70%] mb-8">
              {""}
            </p>
          </article>

          {/* Additional Info */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-[30%] mt-4 mb-[12px]">
                {""}
              </h4>
              <ul className="text-gray-700">
                <li className="h-2.5 my-2 bg-gray-300 rounded-full dark:bg-gray-600 w-[20%] mb-1">
                  {""}
                </li>
                <li className="h-2.5 my-2 bg-gray-300 rounded-full dark:bg-gray-600 w-[20%] mb-1">
                  {""}
                </li>
                <li className="h-2.5 my-2 bg-gray-300 rounded-full dark:bg-gray-600 w-[20%] mb-1">
                  {""}
                </li>
              </ul>
            </div>

            <div>
              <h4 className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-[30%] mt-4 mb-[12px]">
                {""}
              </h4>
              <ul className="text-gray-700">
                <li className="h-2.5 my-2 bg-gray-300 rounded-full dark:bg-gray-600 w-[20%] mb-1">
                  {""}
                </li>
                <li className="h-2.5 my-2 bg-gray-300 rounded-full dark:bg-gray-600 w-[25%] mb-1">
                  {""}
                </li>
                <li className="h-2.5 my-2 bg-gray-300 rounded-full dark:bg-gray-600 w-[20%] mb-1">
                  {""}
                </li>
                <li className="h-2.5 my-2 bg-gray-300 rounded-full dark:bg-gray-600 w-[30%] mb-1">
                  {""}
                </li>
                <li className="h-2.5 my-2 bg-gray-300 rounded-full dark:bg-gray-600 w-[20%] mb-1">
                  {""}
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-4">
            <div>
              <h4 className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-[30%] mt-4 mb-[12px]">
                {""}
              </h4>
              <p className="h-2.5 my-2 bg-gray-300 rounded-full dark:bg-gray-600 w-[35%] mb-1">
                {""}
              </p>
            </div>
            <div>
              <h4 className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-[30%] mt-4 mb-[12px]">
                {""}
              </h4>
              <p className="h-2.5 my-2 bg-gray-300 rounded-full dark:bg-gray-600 w-[35%] mb-1">
                {""}
              </p>
            </div>
            <div>
              <h4 className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-[25%] mt-4 mb-[12px]">
                {""}
              </h4>
              <p className="h-2.5 my-2 bg-gray-300 rounded-full dark:bg-gray-600 w-[15%] mb-1">
                {""}
              </p>
            </div>
            <div>
              <h4 className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-[30%] mt-4 mb-[12px]">
                {""}
              </h4>
              <p className="h-2.5 my-2 bg-gray-300 rounded-full dark:bg-gray-600 w-[15%] mb-1">
                {""}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
