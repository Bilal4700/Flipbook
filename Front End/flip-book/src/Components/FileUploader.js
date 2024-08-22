import { useState } from "react";
import React from "react";
import axios from "axios";
import "../Styles/FileUploader.css";

// USED BOOTSTRAP FOR JSX AND CSS TO MAKE A DRAG AND DROP UPLOADER
export const FileUploader = () => {
  const [file, setFile] = useState(null);

  const onInputChange = (e) => {
    console.log(e.target.files[0]); // Corrected to access the selected file
    setFile(e.target.files[0]); // Store the selected file in state
  };

  const onSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    const data = new FormData();
    data.append("file", file); // Ensure the key is "file" to match your backend

    axios.post("http://localhost:5000/uploads", data) // Corrected from "append" to "post"
      .then(() => {
        console.log("SUCCESS");
      })
      .catch((e) => {
        console.log("Error", e);
      });
  };

  return (
    <form method="post" action="#" id="#" onSubmit={onSubmit}>
      <div className="form-group files">
        <label>Upload Your File</label>
        <input
          type="file"
          className="form-control"
          onChange={onInputChange}
        />
      </div>
      <button type="submit">
        Submit
      </button>
    </form>
  );
};
