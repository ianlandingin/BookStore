// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import axios from "axios";
import BackButton from "../components/BackButton.jsx";
import Spinner from "../components/Spinner.jsx";
import { useNavigate, useParams } from "react-router-dom";

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        console.log(error?.message);
        alert("An error happened. Please check the console log");
      });
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Delete Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col items-center border-2 border-sky-400 rounded-x p-8 mx-auto w-[600px]">
          <h3 className="text-2xl">
            Are you sure you want to delete this book?
          </h3>

          <button
            className="p-4 bg-red-600 text-white m-8 w-full"
            onClick={handleDeleteBook}
          >
            Yes, Delete it.
          </button>
        </div>
      )}
    </div>
  );
};

export default DeleteBook;
