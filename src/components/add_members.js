
import {useState} from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Flip from 'react-reveal/Flip';


  

export default function Content_add()
{

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [Role, setRole] = useState("");
    const [age, setAge] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [fb_link, setfb_link] = useState("");
    const [PPL, setPPL] = useState("");

   

    const Sub = (event) =>{
        event.preventDefault();

        let data = {
            name : name,
            role : Role,
            age : age,
            birthdate: birthdate,
            fb_link : fb_link,
            pic_url : PPL
        }

        axios.post('http://localhost/API/Website-Api/api/member/save',data).then((response)=>{
            console.log(response.data); 
            navigate('/Members');
        });
    
    }

    
    

  

    return(
        <>
            <div className='border border-start-0 border-end-0 border-info border-3 container mt-5 p-5 ' >
              <h1 style={{fontFamily: "'Monofett', monospace"}} className=' text-white' >Members Card Creator XD</h1>
                <Flip top cascade>
                <form onSubmit={Sub} >
                    
                    <div className="form-floating ">
                        <input onChange={(e)=> setName(e.target.value)} type="text" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                        <label htmlFor="floatingInput">Name</label>
                    </div>
  
                    <div className='row'>
  
  
                    <div className="  mt-2 form-floating col-sm-12  col-lg-6 ">
                              <select
                                  //setRole(e.target.value)
                                  value = {Role}
                                  onChange={(e) => setRole(e.target.value)}
                                  className="form-select"
                                  id="floatingSelect"
                                  aria-label="Floating label select example"
                              >
                                  <option value="">Choose Role</option>
                                  <option value={"Project Leader"}>Project Leader</option>
                                  <option value={"Programmer"}>Programmer</option>
                                  <option value={"Assistant Programmer"}>Assistant Programmer</option>
                                  <option value={"Pancit Canton Sponsor"}>Pancit Canton Sponsor</option>
                                  <option value={"Moral Support"}>Moral Support</option>
                              </select>
                              <label className="ms-2" htmlFor="floatingSelect">
                                  Member Roles
                              </label>
                     </div>
  
                      
                      {/* <div className="  mt-2 form-floating col-sm-12  col-lg-6 ">
                          <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
                              <option selected>Open this select menu</option>
                              <option value="1">Project Leader</option>
                              <option value="2">Programmer</option>
                              <option value="3">Assistant Programmer</option>
                              <option value="4">Pancit Canton Sponsor</option>
                              <option value="5">Moral Support</option>
                            
                          </select>
                          <label className='ms-2'  htmlFor="floatingSelect">Works with selects</label>
                      </div> */}
  
                        {/* <div className=" mt-2 form-floating col-sm-12  col-lg-6 ">
                            <input type="text" className="ps-2  form-control" id="floatingPassword" placeholder="Password"/>
                            <label className='ms-1' htmlFor="floatingPassword">Student Course i.e. BSIT Student </label>
                        </div> */}
  
                        <div className="mt-2 form-floating col-sm-12  col-lg-3 ">
                            <input   onChange={(e)=> setAge(e.target.value)} type="number" className=" form-control" id="floatingInput" placeholder="Password"/>
                            <label className='ms-1' htmlFor="floatingInput">Age </label>
                        </div>
  
                        <div className="mt-2 form-floating col-sm-12  col-lg-3 ">
                            <input min="0" max="120"  onChange={(e)=> setBirthdate(e.target.value)} type="Date" className=" form-control" id="floatingInput" placeholder="Password"/>
                            <label className='ms-1' htmlFor="floatingInput">Birthdate </label>
                        </div>
  
                        
  
  
                    </div>
  
                    <div className='row'>
  
                          <div className="mt-2 input-group   col-sm-12 col-md-6 ">
                              <span className="input-group-text">  <i className="text-primary bi bi-facebook" style={{fontSize: "1.5rem", color: "white"}}></i> </span>
                              <div className="form-floating ">
                              <input   onChange={(e)=> setfb_link(e.target.value)} type="text" className="form-control" id="floatingInputGroup1" placeholder="Username"/>
                              <label htmlFor="floatingInputGroup1">Facebook Link</label>
                              </div>
                          </div>
  
                          <div className="mt-2 input-group   col-sm-12 col-md-6 ">
                              <span className="input-group-text">  <i className="text-primary bi bi-facebook" style={{fontSize: "1.5rem", color: "white"}}></i> </span>
                              <div className="form-floating ">
                              <input   onChange={(e)=> setPPL(e.target.value)} type="text" className="form-control" id="floatingInputGroup1" placeholder="Username"/>
                              <label htmlFor="floatingInputGroup1">Get Profile Link From Googel Drive... Upload Your Profile There</label>
                              </div>
                          </div>
  
  
                    </div>
  
                   
  
                        
                        <button type='submit' className="mt-5 btn btn-primary">Add Member</button>
                  </form>
                </Flip>
                

   

             

            </div>
        </>
    );
}







