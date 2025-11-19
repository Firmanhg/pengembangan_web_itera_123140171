import React, { createContext, useState, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const BookContext = createContext();

export function BookProvider({ children }) {
  const [savedBooks, setSavedBooks] = useLocalStorage("books", []);
  const [books, setBooks] = useState(savedBooks);

  useEffect(() => {
    setSavedBooks(books);
  }, [books]);

  function addBook(book) {
    setBooks((prev) => [...prev, { ...book, id: Date.now().toString() }]);
  }

  function updateBook(id, data) {
    setBooks((prev) =>
      prev.map((b) => (b.id === id ? { ...b, ...data } : b))
    );
  }

  function removeBook(id) {
    setBooks((prev) => prev.filter((b) => b.id !== id));
  }

  return (
    <BookContext.Provider value={{ books, addBook, updateBook, removeBook }}>
      {children}
    </BookContext.Provider>
  );
}
