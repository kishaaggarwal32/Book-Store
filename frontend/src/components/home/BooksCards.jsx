/* eslint-disable react/prop-types */
import BookSingleCards from "./BookSingleCards";

const BooksCard = ({ books }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {books.map((item) => (
        <BookSingleCards key={item._id} book={item} />
      ))}
    </div>
  );
};

export default BooksCard;
