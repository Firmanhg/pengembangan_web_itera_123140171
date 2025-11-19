import React from "react";
import BookForm from "../components/BookForm";
import BookTable from "../components/BookTable";

export default function Home() {
  return (
    <>
      <div className="card">
        <BookForm />
      </div>

      <div className="card">
        <BookTable />
      </div>
    </>
  );
}
