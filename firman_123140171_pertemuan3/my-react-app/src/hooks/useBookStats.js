import { useContext } from "react";
import { BookContext } from "../context/BookContext";

export default function useBookStats() {
  const { books } = useContext(BookContext);

  return {
    total: books.length,
    owned: books.filter((b) => b.status === "owned").length,
    reading: books.filter((b) => b.status === "reading").length,
    wishlist: books.filter((b) => b.status === "wishlist").length,
  };
}
