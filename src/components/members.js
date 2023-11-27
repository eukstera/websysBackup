import {ConvertGoogleDriveLinkToDirectURL as convert} from './external_fcuntions.js';
import { useEffect, useState } from "react";
import axios from "axios";
import Flip from 'react-reveal/Flip';
import { Link } from "react-router-dom";


export default function Members() {
  const [members, setMembers] = useState([]);

  const deleteMember = (id) => {
    if (window.confirm("Are you sure?"))
    {  
        axios.delete(`http://localhost/API/Website-Api/api/member/${id}/delete`).then( (response) => {
            console.log(response.data);
            getStudents();
        });
    }
}

  useEffect(() => {
    getStudents();
  }, []);

  function getStudents() {
    axios.get('http://localhost/API/Website-Api/api/member').then((response) => { 
      console.log(response.data);
      setMembers(response.data);
    }); 
  }

  return (
    <>
      
      <div style={{marginTop: "-30px"}} className="container-fluid">
        <div className="border border-info border-start-0 border-end-0 row  p-5">

        
        {members.map((member, index) => (
          <Flip left >
            <div key={index} className="card bg-dark text-white border border-light  col-xl-3 col-lg-3 col-md-6 col-sm-12 ">
              
              
                <a target="_blank" href={member.FB_Link} className="  ">
                  
                      <div className="card-img-container">
                        <img src={convert(member.Profile_Link)} className="card-img" alt="Student" />
                      </div>
                   
               
                 </a>
                
             
              <div className="card-body">
                <h5 className="card-title">{member.Name}</h5>
                <p className="card-text">
                  {member.Role}
                  <br />
                  Age: {member.Age2}
                  <br />
                  Birthdate: {new Date(member.Birthdate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
                {/* stretched-link */}
                <a target="_blank" href={member.FB_Link} className="btn btn-primary ">
                  <div className="row">
                    <i className="bi bi-facebook col-3" style={{ fontSize: "1.5rem", color: "white" }}></i>
                    <p className="align-middle pt-1 col-9">Facebook</p>
                  </div>
                </a>
                <br></br>
               
                <div className="btn-group pt-2">
                   <button onClick={() => deleteMember(member.ID)} type="button" className="btn btn-sm btn-outline-danger">Delete</button>
                    <Link to={`member/${member.ID}/edit`} className="btn btn-sm btn-outline-primary" style={{marginRight: "10px"}}>Edit</Link>
                   
                </div>

              </div>
            </div>
            </Flip>
          ))}
        
          
        </div>
      </div>
    </>
  );
}
