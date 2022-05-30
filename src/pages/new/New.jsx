import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import "./new.scss"
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { useState } from "react";


function New({inputs}) { 

  const [file, setfile] = useState("")

  const handleRemoveItem = () => {
   file
   ?setfile("")
   : window.alert("Not found image...")
   };

  return (
    <div className="new">
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        <div className="top">
            <h1>Add New User</h1>
        </div>
          <div className="bottom">
            <div className="left">
              <img 
              src={
                file 
                ? URL.createObjectURL(file)
                : "https://cdn.pixabay.com/photo/2017/11/10/05/24/add-2935429_960_720.png"
              }
              alt="avatar"/>
              <button onClick={handleRemoveItem}>Delete Image</button>
            </div>
            <div className="right">
              <form>
              <div className="formInput">
                  <label htmlFor="file">
                   Image: <DriveFolderUploadIcon className="icon"/>
                  </label>
                  <input type="file" id="file" 
                  onChange={(e)=>setfile(e.target.files[0])}
                  style={{display:"none"}}/>
                </div>

                {inputs.map((input)=>(
                  <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder}/>
                  </div>
                ))}
                <button>Send</button>
             </form>
            </div>
          </div>
        </div>
    </div>

  )
}

export default New