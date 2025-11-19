import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";
import useBookStats from "../hooks/useBookStats";

export default function Stats() {
  const { books } = useContext(BookContext);
  const stats = useBookStats(books);

  return (
    <div>
      <h2>Statistik Buku</h2>
      <p>Total buku: {stats.total}</p>

      <ul>
        {Object.entries(stats.byStatus).map(([st, jumlah]) => (
          <li key={st}>
            {st} : {jumlah}
          </li>
        ))}
      </ul>
    </div>
  );
}
