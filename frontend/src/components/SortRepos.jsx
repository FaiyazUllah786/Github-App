import React from "react";

const SortRepos = ({ onSort, sortType }) => {
  const Buttons = [
    { text: "Most Recent", type: "recent" },
    { text: "Most Stars", type: "stars" },
    { text: "Most Forks", type: "forks" },
  ];
  return (
    <>
      <div className="flex justify-center lg:justify-end">
        {Buttons.map((button) => (
          <button
            key={button.type}
            type="button"
            className={`bg-glass px-5 py-2.5 me-2 mb-2 text-xs sm:text-sm rounded-lg font-medium focus:outline-none ${
              sortType === button.type ? "border-blue-500 " : ""
            }`}
            onClick={() => onSort(button.type)}
          >
            {button.text}
          </button>
        ))}
      </div>
    </>
  );
};

export default SortRepos;
