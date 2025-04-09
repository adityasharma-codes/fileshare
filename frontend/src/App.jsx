import './App.css';
import { useEffect, useRef, useState } from 'react';
import { UploadFile } from './services/api';

function App() {
  const [file, setFile] = useState(null);
  const [res, setRes] = useState(null);

  const uploadref = useRef();

  const handleUpload = () => {
    uploadref.current.click();
  };

  useEffect(() => {
    const apiCall = async () => {
      if (file) {
        const fileData = new FormData();
        fileData.append("name", file.name);
        fileData.append("file", file);

        const response = await UploadFile(fileData);
        console.log("response from api", response);
        setRes(response.path);
      }
    };
    apiCall();
  }, [file]);

  return (
    <div className="container">
      <h1>File Sharing App</h1>

      <div>
        <button onClick={handleUpload}>Upload File</button>
        <input
          type="file"
          ref={uploadref}
          style={{ display: "none" }}
          onChange={(event) => setFile(event.target.files[0])}
        />
      </div>

      <div>
        {res && (
          <a
            href={res}
            className="filelink"
            target="_blank"
            rel="noopener noreferrer"
          >
            {res}
          </a>
        )}
      </div>
    </div>
  );
}

export default App;
