import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Flip from 'react-reveal/Flip';


export default function Edit()
{

    const Navigate = useNavigate();

    const[title,setTitle] = useState("");
    const [name, setName] = useState("");
    const [Picture, setPicture] = useState("");
    // const new_url = convert(Picture);
    const [desc,setDesc] = useState("");
    const {id} = useParams();

    useEffect(() => {
        getContent();
    }, []);

    function getContent()
    {
            
        axios.get(`http://localhost/API/Website-Api/api/content/${id}`).then(function(response) { 
            setTitle(response.data.Title);
            setName(response.data.Author);
            setDesc(response.data.Description);
            setPicture(response.data.Pic_Link);
        });
    }

    const Sub = (event) => {
        event.preventDefault();

        let data = {
            ID : id,
            title: title,
            author: name,
            desc : desc,
            pic_url : Picture
        }

        axios.put(`http://localhost/API/Website-Api/api/WebSYS/content/${id}/edit`, data).then( (response) => {
            console.log(response.data);
            Navigate('/WebSYS');
        });

    }

    



    return(
        <>

<div className="border border-start-0 border-end-0 border-info border-3 container mt-5 p-5">
  <h1 style={{ fontFamily: '"Monofett", monospace' }} className="text-white">
    Content Editor
  </h1>
  <Flip top cascade>
  <form onSubmit={Sub}>
    <div className="form-floating mb-3">
      <input
        value={title}
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
        value={desc}
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
        value={name}
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
      value={Picture}
        onChange={(e) => setPicture(e.target.value)}
        type="text"
        className="form-control"
        id="pictureLink"
        placeholder="Link to Picture"
      />
      <label htmlFor="pictureLink">Link to Picture</label>
    </div>
    <button type="submit" className="btn btn-primary">
      Update Content
    </button>
  </form>
  </Flip>
  
</div>

        
        </>
    );
}