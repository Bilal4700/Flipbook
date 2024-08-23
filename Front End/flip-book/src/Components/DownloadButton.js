import React, { useState } from 'react';

const DownloadButton = ({ filename, onClick }) => {
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    try {
      setIsLoading(true); 

      // Ensuring the filename has a .pdf extension
      const pdfFilename = filename.replace('.gif', '.pdf');

      const response = await fetch(`http://127.0.0.1:5000/pdf/${pdfFilename}`);
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', pdfFilename); // Set the file name for download
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);

        if (onClick) {
          onClick(); // Call the onClick prop to hide the button
        }
      } else {
        console.error('Failed to fetch PDF:', response.statusText);
      }
    } catch (error) {
      console.error('Error during PDF download:', error);
    } finally {
      setIsLoading(false); // Set loading to false once data fetching is complete
    }
  };

  return (
    <button onClick={fetchData} disabled={isLoading}>
      Download
    </button>
  );
};

export default DownloadButton;
