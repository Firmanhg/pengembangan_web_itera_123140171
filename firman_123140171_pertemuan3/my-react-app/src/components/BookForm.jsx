import { useState, useContext } from "react";
import { BookContext } from "../context/BookContext";
import DraggableWindow from "./DraggableWindow";

export default function BookForm() {
  const { books, setBooks } = useContext(BookContext);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [status, setStatus] = useState("owned");

  const [showPopup, setShowPopup] = useState(false);

  function saveBook(e) {
    e.preventDefault();
    if (!title.trim()) return;

    const newBook = {
      id: Date.now(),
      title,
      author,
      status,
    };

    setBooks([...books, newBook]);
    setTitle("");
    setAuthor("");
    setStatus("owned");

    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 1300);
  }

  return (
    <div className="card">
      <h3 className="card-title">Tambah Buku</h3>

      <form onSubmit={saveBook}>
        <input 
          placeholder="Judul Buku"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input 
          placeholder="Penulis"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="owned">Dimiliki</option>
          <option value="reading">Sedang Dibaca</option>
          <option value="wishlist">Wishlist</option>
        </select>

        <button className="button-cyber">Simpan</button>
      </form>

      {showPopup && <DraggableWindow message="Buku berhasil disimpan!" />}
    </div>
  );
}
