import { useContext } from "react";
import { BookContext } from "../context/BookContext";

export default function BookTable({ rows }) {
  const { books, setBooks } = useContext(BookContext);

  function remove(id) {
    setBooks(books.filter((b) => b.id !== id));
  }

  return (
    <table className="cp-table">
      <thead>
        <tr>
          <th>Judul</th>
          <th>Penulis</th>
          <th>Status</th>
          <th>Aksi</th>
        </tr>
      </thead>

      <tbody>
        {rows.length === 0 && (
          <tr>
            <td colSpan={4} style={{ textAlign: "center", padding: "15px" }}>
              Tidak ada data
            </td>
          </tr>
        )}

        {rows.map((b) => (
          <tr key={b.id}>
            <td>{b.title}</td>
            <td>{b.author}</td>
            <td>{b.status}</td>
            <td>
              <button className="mini-btn" onClick={() => remove(b.id)}>
                hapus
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
