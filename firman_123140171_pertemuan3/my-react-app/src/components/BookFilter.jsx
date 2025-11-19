import { useContext } from "react";
import { BookContext } from "../context/BookContext";

export default function BookFilter() {
  const { filter, setFilter, search, setSearch } = useContext(BookContext);

  return (
    <div className="neo-card">
      <h4>Filter & Cari</h4>

      <div className="filter-row">
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">Semua</option>
          <option value="owned">Dimiliki</option>
          <option value="reading">Dibaca</option>
          <option value="wishlist">Ingin Dibeli</option>
        </select>

        <input
          placeholder="Cari judul..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
}
