
import './App.css'
import { useEffect, useRef, useState } from 'react'
import { UploadFile } from './services/api';

function App() {
  const [file, setFile] = useState(null);
  const [res, setRes] = useState(null);


  const uploadref = useRef();
  const handleUpload = () => {
    uploadref.current.click();
  }

  useEffect(() => {
    const apiCall = async () => {

      if(file){

        const fileData = new FormData();
        fileData.append("name", file.name);
        fileData.append("file", file);
  
        const response = await UploadFile(fileData);
        console.log("response from apo",response)
        console.log("response from api",response.path);
        setRes(response.path);
      }
      
    }
    apiCall();
  },[file]);


  return (
    <div className="container"> 
    <h1>
      File Sharing App
    </h1>
    <div>
      <button onClick={()=>{handleUpload()}}>Upload File</button>
      <input type="file" ref={uploadref} style={{display: "none"}} onChange={(event) => {setFile(event.target.files[0])}}/>
      </div>
     <div> 
     <a href='{res}' >{res}</a>
    </div>
    </div>
  )
}

export default App
