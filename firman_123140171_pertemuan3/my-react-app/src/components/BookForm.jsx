import React, { useState, useContext, useEffect } from "react";
import { BookContext } from "../context/BookContext";

const emptyForm = { title: "", author: "", status: "milik" };

export default function BookForm({ editBook, onDone }) {
  const { addBook, updateBook } = useContext(BookContext);
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (editBook) setForm(editBook);
  }, [editBook]);

  function validate() {
    const err = {};
    if (!form.title.trim()) err.title = "Judul wajib diisi";
    if (!form.author.trim()) err.author = "Penulis wajib diisi";
    return err;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const err = validate();
    setErrors(err);
    if (Object.keys(err).length) return;

    if (editBook) {
      updateBook(editBook.id, form);
      onDone && onDone();
    } else {
      addBook(form);
      setForm(emptyForm);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="book-form">
      <div>
        <label>Judul</label>
        <input
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        {errors.title && <small className="error">{errors.title}</small>}
      </div>

      <div>
        <label>Penulis</label>
        <input
          value={form.author}
          onChange={(e) => setForm({ ...form, author: e.target.value })}
        />
        {errors.author && <small className="error">{errors.author}</small>}
      </div>

      <div>
        <label>Status</label>
        <select
          value={form.status}
          onChange={(e) => setForm({ ...form, status: e.target.value })}
        >
          <option value="milik">Milik</option>
          <option value="baca">Sedang dibaca</option>
          <option value="beli">Ingin dibeli</option>
        </select>
      </div>

      <button type="submit">{editBook ? "Simpan Perubahan" : "Tambah Buku"}</button>
      {editBook && (
        <button type="button" onClick={onDone}>
          Batal
        </button>
      )}
    </form>
  );
}
