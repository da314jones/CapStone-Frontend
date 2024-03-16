import React, { useState } from 'react';

export default function FileUploader() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert('Please select a file first!');
      return;
    }
    // Obtain the presigned URL from your server
    const presignedUrl = await getPresignedUrlFromServer(file.name, file.type);
    const success = await uploadFileToS3(file, presignedUrl);
    if (success) {
      alert('File uploaded successfully!');
    } else {
      alert('Upload failed');
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload to S3</button>
    </div>
  );
}
