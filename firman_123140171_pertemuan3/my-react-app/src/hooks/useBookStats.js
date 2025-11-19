import { useMemo } from "react";

export default function useBookStats(books) {
  return useMemo(() => {
    const total = books.length;
    const byStatus = books.reduce((acc, book) => {
      acc[book.status] = (acc[book.status] || 0) + 1;
      return acc;
    }, {});
    return { total, byStatus };
  }, [books]);
}
