// eslint-disable-next-line no-unused-vars
import { React, useEffect } from "react";
import axios from "axios";

const App = () => {
  useEffect(() => {
    axios
      .get("http://localhost:5555/books")
      .then((response) => console.log(response));
  }, []);
  return <div className="bg-red-400 text-white">App</div>;
};

export default App;
