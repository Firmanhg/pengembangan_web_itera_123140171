import { useContext } from "react";
import { BookContext } from "../context/BookContext";

export default function BookList() {
  const { books, setBooks, filter, search } = useContext(BookContext);

  const filtered = books
    .filter((b) => (filter === "all" ? true : b.status === filter))
    .filter((b) => b.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="neo-card">
      <h3>Daftar Buku</h3>

      <table className="neo-table">
        <thead>
          <tr>
            <th>Judul</th>
            <th>Penulis</th>
            <th>Status</th>
            <th>Aksi</th>
          </tr>
        </thead>

        <tbody>
          {filtered.map((b) => (
            <tr key={b.id}>
              <td>{b.title}</td>
              <td>{b.author}</td>
              <td>{b.status}</td>
              <td>
                <button
                  className="btn-del"
                  onClick={() => setBooks(books.filter((x) => x.id !== b.id))}
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}

          {filtered.length === 0 && (
            <tr>
              <td colSpan="4" className="empty">
                Tidak ada data
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
