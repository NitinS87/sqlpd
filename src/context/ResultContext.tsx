import { ReactNode, createContext, useState } from "react";

export type Result = {
  question: string;
  answer: string;
  given: string;
  correct: boolean;
};
export type ResultContextType = {
  results: Result[];
  setResults: React.Dispatch<React.SetStateAction<Result[]>>;
  handleResults: (newResult: Result) => void;
};
export const ResultContext = createContext<ResultContextType>({
  results: [],
  setResults: () => {},
  handleResults: () => {},
});

export const ResultContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [results, setResults] = useState<Result[]>(
    JSON.parse(localStorage.getItem("results") || "[]")
  );
  const handleResults = (newResult: Result) => {
    const results = JSON.parse(localStorage.getItem("results") || "[]");
    results.push(newResult);
    setResults(results);
    localStorage.setItem("results", JSON.stringify(results));
  };
  return (
    <ResultContext.Provider value={{ results, setResults, handleResults }}>
      {children}
    </ResultContext.Provider>
  );
};
