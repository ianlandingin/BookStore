// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import axios from "axios";
import BackButton from "../components/BackButton.jsx";
import Spinner from "../components/Spinner.jsx";
import { useNavigate, useParams } from "react-router-dom";

const EditBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setTitle(response?.data?.title);
        setAuthor(response?.data?.author);
        setPublishYear(response?.data?.publishYear);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error?.message);
      });
  }, [id]);

  const handleEditBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .put(`http://localhost:5555/books/${id}`, data)
      .then((response) => {
        console.log(response);
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
    <>
      <div className="p-4">
        <BackButton />
        <h1 className="text-3xl my-4">Edit Book</h1>
        {loading ? (
          <Spinner />
        ) : (
          <div className="flex flex-col border-2 border-sky-400 rounded-xl p-4 mx-auto w-[600px]">
            <div className="my-4 flex flex-col">
              <label className="text-xl mr-4 text-gray-500">Title</label>
              <input
                type="text"
                name="create-title"
                id="create-title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border-2 border-gray-500 px-4"
              />
            </div>
            <div className="my-4 flex flex-col">
              <label className="text-xl mr-4 text-gray-500">Author</label>
              <input
                type="text"
                name="create-author"
                id="create-author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="border-2 border-gray-500 px-4"
              />
            </div>
            <div className="my-4 flex flex-col">
              <label className="text-xl mr-4 text-gray-500">Publish year</label>
              <input
                type="text"
                name="create-publishYear"
                id="create-publishYear"
                value={publishYear}
                onChange={(e) => setPublishYear(e.target.value)}
                className="border-2 border-gray-500 px-4"
              />
            </div>
            <button className="p-2 bg-sky-300 m-8" onClick={handleEditBook}>
              Save Edit
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default EditBook;
