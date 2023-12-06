import { useContext } from "react";
import { ResultContext } from "../context/ResultContext";

const Results = () => {
  const { results } = useContext(ResultContext);
  console.log(results);
  const handleClear = () => {
    localStorage.setItem("results", "[]");
    localStorage.setItem("selectedQuestion", "0");
    window.location.reload();
  };
  return (
    <div className="flex flex-col items-center gap-2">
      {results.length < 1 ? (
        <div className="text-center text-3xl flex flex-col justify-center items-center gap-3">
          <h2>Results</h2>
          <span className="text-lg">No results to be shown</span>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border- table-auto">
            <thead>
              <tr className="text-left">
                <th className="px-4 py-2">S.No</th>
                <th className="px-4 py-2">Question</th>
                <th className="px-4 py-2">Answer</th>
                <th className="px-4 py-2">Given</th>
                <th className="px-4 py-2">Correct</th>
              </tr>
            </thead>
            <tbody>
              {results.map((result, index) => (
                <tr key={index} className="text-left border-b border-gray-200">
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2">{result.question}</td>
                  <td className="px-4 py-2">{result.answer}</td>
                  <td className="px-4 py-2">{result.given}</td>
                  <td className="px-4 py-2">{result.correct ? "Yes" : "No"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <button
        className="text-center px-4 py-2 hover:bg-white hover:text-black border-white border mx-auto rounded-md"
        onClick={handleClear}
      >
        Clear
      </button>
    </div>
  );
};

export default Results;
