import useBookStats from "../hooks/useBookStats";

export default function Stats() {
  const stats = useBookStats();

  return (
    <div className="card">
      <h3 className="card-title">Statistik Buku</h3>

      <p>Total Buku: {stats.total}</p>
      <p>Buku Dimiliki: {stats.owned}</p>
      <p>Sedang Dibaca: {stats.reading}</p>
      <p>Wishlist: {stats.wishlist}</p>
    </div>
  );
}
