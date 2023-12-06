export const SQLQuestions = [
  {
    question: "Select all columns from the table 'users'.",
    answer: "SELECT * FROM users;",
    table: "users",
    columns: ["name", "age", "email"],
  },
  {
    question: "Select the 'name' and 'email' columns from the table 'users'.",
    answer: "SELECT name, email FROM users;",
    table: "users",
    columns: ["name", "email"],
  },
  {
    question: "Select all columns from the table 'orders'.",
    answer: "SELECT * FROM orders;",
    table: "orders",
    columns: ["order_id", "product_id", "quantity"],
  },
  {
    question:
      "Select the 'order_id' and 'quantity' columns from the table 'orders'.",
    answer: "SELECT order_id, quantity FROM orders;",
    table: "orders",
    columns: ["order_id", "quantity"],
  },
  {
    question: "Select all columns from the table 'products'.",
    answer: "SELECT * FROM products;",
    table: "products",
    columns: ["product_id", "name", "price"],
  },
  {
    question:
      "Select the 'name' and 'price' columns from the table 'products'.",
    answer: "SELECT name, price FROM products;",
    table: "products",
    columns: ["name", "price"],
  },
];
