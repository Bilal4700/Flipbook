import { useState } from "react";
import React from "react";
import axios from "axios";
import "../Styles/FileUploader.css"
//TAKEN FROM BOOTSTRAP
export const FileUploader = ({}) => {
    const[file,setFile] = useState(null)
    const onInputChange = (e) => {
        console.log(e.target.file)
    }
    const onSubmit = (e) =>{
        e.preventDefault();
        const data = new FormData()
        data.append("File", file)

        axios.append("//localhost:5000/uploads", data)
        .then((e) => {console.log("SUCCESS")})
        .catch((e) => {
            console.log("Error",e)
        })


    }

	return (
		<form method="post" action="#" id="#">
			<div className="form-group files">
				<label>Upload Your File </label>
				<input type="file" className="form-control" onChange={onInputChange} />
			</div>
            <button>
                Submit
            </button>
		</form>
	)
}
