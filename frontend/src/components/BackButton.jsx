// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import PropTypes from "prop-types";

const BackButton = ({ destination = "/" }) => {
  return (
    <div className="flex">
      <Link
        to={destination}
        className="bg-sky-800 text-white px-4 py-1 rounded-lg w-fit"
      >
        <BsArrowLeft className="text-2xl" />
      </Link>
    </div>
  );
};

export default BackButton;

BackButton.propTypes = {
  destination: PropTypes.string.isRequired, // Add the missing prop type validation
};
