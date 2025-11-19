import React, { useContext, useState } from "react";
import { BookContext } from "../context/BookContext";
import BookForm from "./BookForm";

export default function BookList({ filter }) {
  const { books, removeBook } = useContext(BookContext);
  const [editing, setEditing] = useState(null);

  const filtered = books.filter((b) =>
    filter === "all" ? true : b.status === filter
  );

  if (!filtered.length) return <p>Tidak ada buku.</p>;

  return (
    <div>
      {filtered.map((book) => (
        <div key={book.id} className="book-item">
          <div>
            <strong>{book.title}</strong> — <em>{book.author}</em>
            <div>Status: {book.status}</div>
          </div>

          <div className="actions">
            <button onClick={() => setEditing(book)}>Edit</button>
            <button onClick={() => removeBook(book.id)}>Hapus</button>
          </div>

          {editing && editing.id === book.id && (
            <div className="edit-box">
              <BookForm editBook={editing} onDone={() => setEditing(null)} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
