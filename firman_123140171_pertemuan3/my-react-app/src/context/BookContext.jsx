import { createContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const BookContext = createContext();

export function BookProvider({ children }) {
  const [books, setBooks] = useLocalStorage("books_v4", []);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  return (
    <BookContext.Provider
      value={{ books, setBooks, filter, setFilter, search, setSearch }}
    >
      {children}
    </BookContext.Provider>
  );
}
