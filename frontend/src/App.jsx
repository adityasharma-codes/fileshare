
import { useEffect, useRef,useState } from 'react'
import { UploadFile } from './service/api';
import './App.css'

function App() {
  const[file,setFile] = useState(null);
  const[res,setRes] = useState(null);

  const uploadRef = useRef();
  const handleUpload =()=>{
    uploadRef.current.click();
  }
  //apiCall with Data....
  useEffect(()=>{
    const apiCall = async()=>{

    if(file){
      console.log(file);
        //call the api to upload
        const fileData = new FormData();
        fileData.append("name",file.name);
        fileData.append("file",file);
  
        //call the function from api.js with fileData
        const response = await UploadFile(fileData);
        console.log(response.path);
        setRes(response?.path);
        
    }



    }
    apiCall();

  },[file]);
 
 

  return (
    <div className="container">
      <h1>File Sharing App</h1>
      <div>
        <button onClick={()=>{handleUpload()}}>Upload</button>
       
        <input type="file" ref={uploadRef} style={{display:"none"}} onChange={(event)=>setFile(event.target.files[0])}/>
      </div>
      <div>
      <a href='{res}'>{res}</a>
      </div>

    </div>
  )
}

export default App
