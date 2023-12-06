import { useState } from "react";

interface SQLCommandsProps {
  setQuery: React.Dispatch<React.SetStateAction<string[]>>;
  question: {
    question: string;
    answer: string;
    table: string;
    columns: string[];
  };
}

const SQLCommands = ({ setQuery, question }: SQLCommandsProps) => {
  const [selectedTab, setSelectedTab] = useState("Table");
  const commands = [
    "SELECT",
    "FROM",
    "WHERE",
    "GROUP BY",
    "HAVING",
    "ORDER BY",
  ];

  const keywords = ["DISTINCT", "LIMIT", "ASC", "DESC"];

  const filters = [
    "<",
    ">",
    "=",
    "!=",
    "NOT",
    "IN",
    "BETWEEN",
    "AND",
    "OR",
    "(",
    ")",
  ];

  return (
    <div className="flex flex-col justify-between items-center lg:w-1/2 gap-1">
      <div className="flex justify-between items-center w-full">
        <button
          className={`border-white w-full py-2 hover:underline ${
            selectedTab == "Table"
              ? "rounded-tl-md rounded-tr-md font-semibold border-b-0 border after:content-[''] after:h-1 after:bg-black"
              : "border-b"
          }`}
          onClick={() => setSelectedTab("Table")}
        >
          Table
        </button>
        <button
          className={`border-white w-full py-2 hover:underline ${
            selectedTab == "Keywords"
              ? "rounded-tl-md rounded-tr-md font-semibold border-b-0 border after:content-[''] after:h-1 after:bg-black"
              : "border-b"
          }`}
          onClick={() => setSelectedTab("Keywords")}
        >
          Keywords
        </button>
        <button
          className={`border-white w-full py-2 hover:underline ${
            selectedTab == "Filters"
              ? "rounded-tl-md rounded-tr-md font-semibold border-b-0 border after:content-[''] after:h-1 after:bg-black"
              : "border-b"
          }`}
          onClick={() => setSelectedTab("Filters")}
        >
          Filters & Values
        </button>
      </div>
      {selectedTab === "Table" && (
        <div className="flex justify-around items-center w-full border-gray-300 border p-1 rounded-md">
          <div className="flex flex-col justify-between items-center gap-2">
            {commands.map((command) => (
              <button
                key={command}
                className="px-3 py-1 rounded-md border-gray-400 border w-28 hover:bg-white hover:text-black transition-all"
                onClick={() => setQuery((prev) => [...prev, command])}
              >
                {command}
              </button>
            ))}
          </div>
          <div className="flex flex-col justify-between items-center border border-white rounded-md">
            <div className="w-full flex justify-between items-center border-b">
              <button
                className="text-center mx-auto border-r border-white w-1/6 py-1 hover:underline"
                onClick={() => setQuery((prev) => [...prev, "*"])}
              >
                *
              </button>
              <button
                className="text-center mx-auto border-r border-white w-4/6 py-1 hover:underline"
                onClick={() => setQuery((prev) => [...prev, question.table])}
              >
                {question?.table}
              </button>
              <button
                className="text-center mx-auto w-1/6 py-1 hover:underline"
                onClick={() =>
                  setQuery((prev) => [
                    ...prev,
                    question?.table?.charAt(0).toLocaleUpperCase(),
                  ])
                }
              >
                {question?.table?.charAt(0).toLocaleUpperCase()}
              </button>
            </div>
            <div className="flex flex-col gap-2 justify-between px-8 py-2">
              {question.columns.map((column, index) => {
                return (
                  <button
                    key={index}
                    className="hover:underline"
                    onClick={() => setQuery((prev) => [...prev, column])}
                  >
                    {column}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
      {selectedTab === "Keywords" && (
        <div className="flex flex-wrap justify-between items-center w-full p-1 rounded-md gap-2">
          {keywords.map((command) => (
            <button
              key={command}
              className="px-3 py-1 rounded-md border-gray-400 border w-28 hover:bg-white hover:text-black transition-all"
              onClick={() => setQuery((prev) => [...prev, command])}
            >
              {command}
            </button>
          ))}
        </div>
      )}
      {selectedTab === "Filters" && (
        <div className="flex flex-wrap items-center w-full p-1 rounded-md h-full gap-2">
          {filters.map((command) => (
            <button
              key={command}
              className="px-3 py-1 rounded-md border-gray-400 border w-28 hover:bg-white hover:text-black transition-all"
              onClick={() => setQuery((prev) => [...prev, command])}
            >
              {command}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SQLCommands;
