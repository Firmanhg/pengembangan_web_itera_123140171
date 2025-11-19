import React, { useState, useContext } from "react";
import BookForm from "../components/BookForm";
import BookList from "../components/BookList";
import BookFilter from "../components/BookFilter";
import { BookContext } from "../context/BookContext";

export default function Home() {
  const [filter, setFilter] = useState("all");
  const { books } = useContext(BookContext);

  return (
    <div className="container">

      {/* LEFT SIDE */}
      <div className="left">
        <div className="card">
          <h2>Tambah Buku</h2>
          <BookForm />
        </div>

        <div className="card">
          <h2>Filter</h2>
          <BookFilter value={filter} onChange={setFilter} />
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="right">
        <div className="card">
          <h2>Daftar Buku ({books.length})</h2>
          <BookList filter={filter} />
        </div>
      </div>

    </div>
  );
}
