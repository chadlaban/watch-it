import React from "react";

export const ReviewsSkeleton = (prop) => {
  return (
    <div
      key={prop.index}
      className="animate-pulse border-b border-gray-200 p-4"
      role="status"
    >
      <div className="flex items-center gap-2">
        <div className="flex items-center justify-center rounded-full w-12 h-[45px] object-cover bg-gray-300 dark:bg-gray-700">
          <svg
            className="w-6 h-6 text-gray-200 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 20"
          >
            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
          </svg>
        </div>
        <article className="flex-col w-full">
          <h2 className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-[30%] mt-4 mb-[12px]">
            {""}
          </h2>
          <p className="h-2.5 mr-2 mt-2 mb-4 bg-gray-300 rounded-full dark:bg-gray-600 w-[30%]">
            {""}
          </p>
        </article>
      </div>
      <article className="flex-col">
        <p className="h-2.5 ms-2 my-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full mb-1">
          {""}
        </p>
        <p className="h-2.5 ms-2 my-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full mb-1">
          {""}
        </p>
        <p className="h-2.5 ms-2 my-2 bg-gray-300 rounded-full dark:bg-gray-600 w-[50%] mb-1">
          {""}
        </p>
      </article>
    </div>
  );
};
