import { useState } from "react";

const Guide = () => {
  const questions = [
    {
      question: "What is SQL and what does it stand for?",
      answer:
        "SQL stands for Structured Query Language, and it is a domain-specific language used for managing and manipulating relational databases.",
    },
    {
      question: "Explain the difference between SQL and MySQL.",
      answer:
        "SQL is a language used to manage and query databases, while MySQL is a relational database management system (RDBMS) that uses SQL as its query language.",
    },
    {
      question:
        "How do you retrieve all the columns from a table named 'employees'?",
      answer: "SELECT * FROM employees;",
    },
    {
      question: "What is the purpose of the WHERE clause in an SQL query?",
      answer:
        "The WHERE clause is used to filter records based on a specified condition, allowing you to retrieve only the data that meets certain criteria.",
    },
    {
      question: "Explain the difference between INNER JOIN and LEFT JOIN.",
      answer:
        "INNER JOIN returns only the matching rows from both tables, while LEFT JOIN returns all rows from the left table and the matching rows from the right table.",
    },
    {
      question: "What is the purpose of the GROUP BY clause?",
      answer:
        "The GROUP BY clause is used to group rows that have the same values into summary rows, like 'find the number of customers in each country'.",
    },
    {
      question: "What is the purpose of the HAVING clause?",
      answer:
        "The HAVING clause is used to filter groups based on a specified condition, like 'find the number of customers in each country with more than 5 customers'.",
    },
    {
      question: "What is the purpose of the ORDER BY clause?",
      answer:
        "The ORDER BY clause is used to sort the result-set in ascending or descending order, based on a specified column.",
    },
    {
      question: "What is the purpose of the LIMIT clause?",
      answer:
        "The LIMIT clause is used to limit the number of records returned in a query result.",
    },
    {
      question: "What is the purpose of the DISTINCT keyword?",
      answer:
        "The DISTINCT keyword is used to return only distinct (different) values.",
    },
    {
      question: "What is the purpose of the IN keyword?",
      answer:
        "The IN keyword is used to specify multiple values in a WHERE clause.",
    },
    {
      question: "What is the purpose of the BETWEEN keyword?",
      answer:
        "The BETWEEN keyword is used to select values within a range, like 'find all customers with IDs between 100 and 200'.",
    },
    {
      question: "What is the purpose of the LIKE keyword?",
      answer:
        "The LIKE keyword is used to search for a specified pattern in a column, like 'find all customers whose name starts with 'A''.",
    },
    {
      question: "What is the purpose of the AS keyword?",
      answer:
        "The AS keyword is used to rename a column or table using an alias, like 'SELECT customer_id AS ID FROM customers'.",
    },
    {
      question: "What is the purpose of the UNION keyword?",
      answer:
        "The UNION keyword is used to combine the result-set of two or more SELECT statements.",
    },
    {
      question: "What is the purpose of the JOIN keyword?",
      answer:
        "The JOIN keyword is used to combine rows from two or more tables, based on a related column between them.",
    },
  ];

  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);

  return (
    <div className="p-4">
      <h1 className="text-3xl mb-4">SQL Guide</h1>
      {questions.map((item, index) => (
        <div key={index} className="mb-4 p-4 border rounded shadow">
          <h2
            className="text-xl mb-2 cursor-pointer"
            onClick={() =>
              setSelectedQuestion(selectedQuestion === index ? null : index)
            }
          >
            Q: {item.question}
          </h2>
          {selectedQuestion === index && (
            <div className="border rounded p-2 mt-2 transition-all">
              <p>A: {item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Guide;
