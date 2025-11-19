import React from "react";

export default function BookFilter({ value, onChange }) {
  return (
    <div className="book-filter">
      <label>Filter: </label>
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="all">Semua</option>
        <option value="milik">Milik</option>
        <option value="baca">Sedang dibaca</option>
        <option value="beli">Ingin dibeli</option>
      </select>
    </div>
  );
}
