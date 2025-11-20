import { useContext } from "react";
import { BookContext } from "../context/BookContext";
import BookTable from "./BookTable";

export default function BookList() {
  const { books, filter, search } = useContext(BookContext);

  const filtered = books
    .filter((b) => (filter === "all" ? true : b.status === filter))
    .filter((b) => b.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="card">
      <h3 className="card-title">Daftar Buku</h3>
      <BookTable rows={filtered} />
    </div>
  );
}
