import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";

export default function BookTable() {
  const { books } = useContext(BookContext);

  return (
    <>
      <h3>Daftar Buku</h3>

      <table>
        <thead>
          <tr>
            <th>Judul</th>
            <th>Penulis</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {books.length === 0 ? (
            <tr><td colSpan="3">Tidak ada data</td></tr>
          ) : (
            books.map((b, i) => (
              <tr key={i}>
                <td>{b.judul}</td>
                <td>{b.penulis}</td>
                <td>{b.status}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </>
  );
}
