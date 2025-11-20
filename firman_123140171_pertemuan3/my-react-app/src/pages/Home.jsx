import BookForm from "../components/BookForm";
import BookFilter from "../components/BookFilter";
import BookList from "../components/BookList";

export default function Home() {
  return (
    <div>
      <BookForm />
      <BookFilter />
      <BookList />
    </div>
  );
}
