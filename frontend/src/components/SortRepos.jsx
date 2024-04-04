import React from "react";

const SortRepos = () => {
  return (
    <>
      <div className="flex justify-center lg:justify-end">
        <button
          type="button"
          className="bg-glass px-5 py-2.5 me-2 mb-2 text-xs sm:text-sm rounded-lg font-medium focus:outline-none"
        >
          Most Recent
        </button>
        <button
          type="button"
          className="bg-glass px-5 py-2.5 me-2 mb-2 text-xs sm:text-sm rounded-lg font-medium focus:outline-none"
        >
          Most Stars
        </button>
        <button
          type="button"
          className="bg-glass px-5 py-2.5 me-2 mb-2 text-xs sm:text-sm rounded-lg font-medium focus:outline-none"
        >
          Most Forks
        </button>
      </div>
    </>
  );
};

export default SortRepos;
