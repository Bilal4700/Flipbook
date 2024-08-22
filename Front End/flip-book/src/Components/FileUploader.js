import React, { useState, useRef } from "react"; // Import useRef correctly
import axios from "axios";
import "../Styles/FileUploader.css";

// USED BOOTSTRAP FOR JSX AND CSS TO MAKE A DRAG AND DROP UPLOADER and edited some parts for my use
export const FileUploader = () => {
	const [file, setFile] = useState(null);
	const fileInputRef = useRef(null); 

	const onInputChange = (e) => {
		console.log(e.target.files[0]);
		setFile(e.target.files[0]);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		const data = new FormData();
		data.append("file", file); // Just to remember the key is file

		axios.post("http://localhost:5000/uploads", data)
			.then(() => {
				console.log("SUCCESS");
			})
			.catch((e) => {
				console.log("Error", e);
			});
	};

	const onDelete = () => {
		setFile(null); // Clear the selected file
		if (fileInputRef.current) {
			fileInputRef.current.value = ""; // Reset the file input element
		}
	};

	return (
		<div className="Uploader">
			<form method="post" action="#" id="#" onSubmit={onSubmit}>
				<div className="form-group files">
					<label>
						<b>Upload Your File here</b>
					</label>
					<input
						type="file"
						className="form-control"
						ref={fileInputRef} 
						onChange={onInputChange}
					/>
				</div>
				<div className="button-container">
					<button type="submit" disabled={!file}>Submit</button>
					{file && (
						<button type="button" onClick={onDelete} style={{ backgroundColor: 'red', color: 'white' }}>
							Delete
						</button>
					)}
				</div>
			</form>
		</div>
	);
};
