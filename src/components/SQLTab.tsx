import { useContext, useState } from "react";
import { SQLCommands } from ".";
import { SQLQuestions } from "../assets/data/questions";
import { ResultContext } from "../context/ResultContext";

const SQLTab = () => {
  const { handleResults } = useContext(ResultContext);
  const handleSubmit = () => {
    // console.log("submit");
    console.log(query.join(" "));
    console.log(SQLQuestions[selectedQuestion].answer);
    if (query.join(" ") === SQLQuestions[selectedQuestion].answer) {
      console.log("correct");
      handleResults({
        question: SQLQuestions[selectedQuestion].question,
        answer: SQLQuestions[selectedQuestion].answer,
        given: query.join(" "),
        correct: true,
      });
    } else {
      console.log("incorrect");
      handleResults({
        question: SQLQuestions[selectedQuestion].question,
        answer: SQLQuestions[selectedQuestion].answer,
        given: query.join(" "),
        correct: false,
      });
    }
    setQuery([]);
    setSelectedQuestion((prev) => (prev + 1) % SQLQuestions.length);
    localStorage.setItem(
      "selectedQuestion",
      ((selectedQuestion + 1) % SQLQuestions.length).toString()
    );
  };

  const [selectedQuestion, setSelectedQuestion] = useState<number>(
    parseInt(localStorage.getItem("selectedQuestion") || "0")
  );
  const [query, setQuery] = useState<string[]>([]);
  return (
    <div className="flex flex-col justify-between w-full h-full gap-2 p-2">
      <div className="w-full text-xl text-white border-gray-400 border rounded-md p-2 self-start h-[300px]">
        {query.length ? (
          query.join(" ")
        ) : (
          <span className="text-gray-400 text-base">
            Build a query by clicking on the fragments below.
            <br /> Don't know SQL or need a hint? <br />
            Check out the guide tab!
          </span>
        )}
      </div>
      <div className="flex justify-between items-center">
        <div className="flex justify-between items-center gap-4">
          <button
            className="text-2xl font-bold text-center -mt-2"
            onClick={() =>
              setQuery((prev) =>
                prev.map((item, index) =>
                  index === prev.length - 1 ? item + ";" : item
                )
              )
            }
          >
            ;
          </button>

          <button
            className="flex justify-between items-center gap-1"
            onClick={handleSubmit}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="white"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-play"
            >
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
            Execute
          </button>
          <button
            className="text-2xl font-bold text-center -mt-2"
            onClick={() =>
              setQuery((prev) =>
                prev.map((item, index) =>
                  index === prev.length - 1 ? item + "," : item
                )
              )
            }
          >
            ,
          </button>
        </div>
        <div className="flex justify-between items-center gap-2">
          <button
            onClick={() => {
              setQuery([]);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-trash-2"
            >
              <path d="M3 6h18" />
              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
              <line x1="10" x2="10" y1="11" y2="17" />
              <line x1="14" x2="14" y1="11" y2="17" />
            </svg>
          </button>
          <button
            onClick={() => {
              setQuery((prev) => prev.slice(0, prev.length - 1));
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-delete"
            >
              <path d="M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z" />
              <line x1="18" x2="12" y1="9" y2="15" />
              <line x1="12" x2="18" y1="9" y2="15" />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between h-full gap-4">
        <div className="flex flex-col justify-evenly items-center lg:w-1/2 border-white border rounded-md max-w-full p-4">
          <span className="text-xl">Brief</span>
          <p>{SQLQuestions[selectedQuestion].question}</p>
        </div>
        <SQLCommands
          setQuery={setQuery}
          question={SQLQuestions[selectedQuestion]}
        />
      </div>
    </div>
  );
};

export default SQLTab;
