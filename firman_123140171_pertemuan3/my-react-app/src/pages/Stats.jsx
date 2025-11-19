import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";

export default function Stats() {
  const { books } = useContext(BookContext);

  const total = books.length;
  const dimiliki = books.filter(b => b.status === "Dimiliki").length;
  const dipinjam = books.filter(b => b.status === "Dipinjam").length;
  const wishlist = books.filter(b => b.status === "Wishlist").length;

  return (
    <div className="card">
      <h2>STATISTIK BUKU</h2>

      <p>Total Buku: <b>{total}</b></p>
      <p>Buku Dimiliki: <b>{dimiliki}</b></p>
      <p>Buku Dipinjam: <b>{dipinjam}</b></p>
      <p>Wishlist: <b>{wishlist}</b></p>
    </div>
  );
}
