
import axios from 'axios';
import { useState,} from 'react';
import { useNavigate } from 'react-router-dom';
  
import Flip from 'react-reveal/Flip';



export default function Manage_content()
{

    const navigate = useNavigate();

    const[title,setTitle] = useState("");
    const [name, setName] = useState("");
    const [Picture, setPicture] = useState("");
 
    const [desc,setDesc] = useState("");

    const Sub = (event) =>{
        event.preventDefault();

        let data = {
            title: title,
            author: name,
            desc : desc,
            pic_url : Picture
        }

        axios.post('http://localhost/API/Website-Api/api/content/save',data).then((response)=>{
            console.log(response.data); 
            navigate('/WebSYS');
        });
    
    }


    return(
        <>

<div className="border border-start-0 border-end-0 border-info border-3 container mt-5 p-5">
  <h1 style={{ fontFamily: '"Monofett", monospace' }} className="text-white">
    Content Manager
  </h1>
  <Flip top cascade>
  <form onSubmit={Sub}>
    <div className="form-floating mb-3">
      <input
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        className="form-control"
        id="projectTitle"
        placeholder="Project Title"
      />
      <label htmlFor="projectTitle">Project Title</label>
    </div>
    <div className="form-floating mb-3">
      <textarea
        style={{ height: "1.1in" }}
        onChange={(e) => setDesc(e.target.value)}
        className="form-control"
        id="description"
        placeholder="Description"
        defaultValue={""}
      />
      <label htmlFor="description">Description</label>
    </div>
    <div className="form-floating mb-3">
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        className="form-control"
        id="name"
        placeholder="Your Name"
      />
      <label htmlFor="name">Your Name</label>
    </div>
    <div className="form-floating mb-3">
      <input
        onChange={(e) => setPicture(e.target.value)}
        type="text"
        className="form-control"
        id="pictureLink"
        placeholder="Link to Picture"
      />
      <label htmlFor="pictureLink">Link to Picture</label>
    </div>
    <button type="submit" className="btn btn-primary">
      Upload Content
    </button>
  </form>
  </Flip>
  
</div>

        
        </>
    );
}