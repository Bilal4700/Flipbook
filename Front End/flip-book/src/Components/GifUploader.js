import React, { useState } from "react";
import { FileUploader } from "./FileUploader";
import DownloadButton from "./DownloadButton";
import "../Styles/GifUploader.css";

export default function GifUploader() {
	const [filename, setFilename] = useState("");
	const [isFileReady, setIsFileReady] = useState(false);
	const [isProcessing, setIsProcessing] = useState(false);
	const [showDownloadButton, setShowDownloadButton] = useState(false);
  


	const handleUploadSuccess = (uploadedFilename) => {
		setFilename(uploadedFilename);
		setIsFileReady(true);
		setShowDownloadButton(true);
		setIsProcessing(false);
	};


	const handleProcessingStart = () => {
		setIsFileReady(false);
		setIsProcessing(true);
	};

	const handleDownloadClick = () => {
		setShowDownloadButton(false);
	};

	return (
		<div>
			<FileUploader
				onSuccess={handleUploadSuccess}
				onProcessingStart={handleProcessingStart}
			/>
			{isProcessing && <p className="processing">Processing...</p>}
			{isFileReady && (
				<div className="download">
					<p>Your Flipbook is ready</p>
					{showDownloadButton && (
						<DownloadButton filename={filename} onClick={handleDownloadClick} />
					)}
				</div>
			)}
		</div>
	);
}
