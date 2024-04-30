import React, { useState} from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { ref, uploadBytes } from "firebase/storage";
import { storage } from './Data/storage_upload_blob';



function App() {
  //const [count, setCount] = useState(0)
  const [imageUpload, setImageUpload] = useState();

  const uploadFile = () => {
    if (!imageUpload) return; 

    const imageRef = ref(storage, `toywebapp/images/${imageUpload.name}`)
  }

  uploadBytes(imageRef, imageUpload).then((snapshort) => {
    getDownloadURL(snapshot.ref).then((url) => {
      console.log(url);
    })
  });


  return (
    <div className='App'>

      <input type="file" 
      onChange={(event) => { 
       setImageUpload(event.target.files[0]);
      }} 
      />
      <button onClick={uploadFile} >Upload</button>
      <h1> L-e-k </h1>

      <Navbar />     
    </div>
    
  )
}


export default App
