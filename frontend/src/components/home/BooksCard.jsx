// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import BookSingleCard from "./BookSingleCard";

const BooksCard = ({ books }) => {
  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {books.map((item) => (
          <BookSingleCard key={item?._id} book={item} />
        ))}
      </div>
    </>
  );
};

export default BooksCard;

BooksCard.propTypes = {
  books: PropTypes.array.isRequired, // Add the missing prop type validation
};
