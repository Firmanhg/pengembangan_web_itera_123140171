import { useContext } from "react";
import { BookContext } from "../context/BookContext";

export default function BookFilter() {
  const { filter, setFilter, search, setSearch } = useContext(BookContext);

  return (
    <div className="card">
      <h3 className="card-title">Filter & Cari</h3>

      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="all">Semua</option>
        <option value="owned">Dimiliki</option>
        <option value="reading">Sedang Dibaca</option>
        <option value="wishlist">Wishlist</option>
      </select>

      <input
        placeholder="Cari judul..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
