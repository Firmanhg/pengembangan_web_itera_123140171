import React, { useContext, useState } from "react";
import { BookContext } from "../context/BookContext";

export default function BookForm() {
  const { addBook } = useContext(BookContext);

  const [judul, setJudul] = useState("");
  const [penulis, setPenulis] = useState("");
  const [status, setStatus] = useState("Dimiliki");

  const handleSubmit = () => {
    if (!judul.trim() || !penulis.trim()) return;

    addBook({ judul, penulis, status });

    setJudul("");
    setPenulis("");
    setStatus("Dimiliki");
  };

  return (
    <>
      <h3>Tambah Buku</h3>

      <input placeholder="Judul buku" value={judul} onChange={(e) => setJudul(e.target.value)} />

      <input placeholder="Penulis" value={penulis} onChange={(e) => setPenulis(e.target.value)} />

      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option>Dimiliki</option>
        <option>Dipinjam</option>
        <option>Wishlist</option>
      </select>

      <button className="button-cyber" onClick={handleSubmit}>Simpan</button>
    </>
  );
}
