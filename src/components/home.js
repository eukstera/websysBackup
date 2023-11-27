import {ConvertGoogleDriveLinkToDirectURL as convert}  from "./external_fcuntions.js"
import axios from 'axios';
import {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
// import Wobble from 'react-reveal/Wobble';
import Zoom from 'react-reveal/Zoom';


// https://drive.google.com/uc?id=1kgUen6PFDMiC3jFgBFbvjganQX9nsfEg
//https://drive.google.com/file/d/1kgUen6PFDMiC3jFgBFbvjganQX9nsfEg/view?usp=sharing

const get_drive_profile = "https://drive.google.com/file/d/1kgUen6PFDMiC3jFgBFbvjganQX9nsfEg/view?usp=drive_link"
const drive_profile = convert(get_drive_profile);



export default function Home()


{

    const deleteContent = (id) => {
        if (window.confirm("Are you sure?"))
        {  
            axios.delete(`http://localhost/API/Website-Api/api/content/${id}/delete`).then( (response) => {
                console.log(response.data);
                getContent();
            });
        }
    }



    const [students, setStudents] = useState([]);
    useEffect(() => {
        getContent();
      }, []);
    
      function getContent() {
        axios.get('http://localhost/API/Website-Api/api/content').then((response) => { 
          console.log(response.data);
          setStudents(response.data);
        }); 
      }

    return(
        <>
 
                <section>
                    <div className="container pt-5 pb-3  mt-5 border border-start-0 border-end-0 border-primary border-3 text-white ">

                        <div id="Home-mainContent"className="row">
                
                    
                            <div style={{width:"300px", minHeight:'309px', height:'auto' }} className=" col-xl-3   " >
                                <Flip left >
                                <img 
                                className=""
                                style={{   borderRadius:'50px', width: "100%", padding: '20px 0px 0px 10px'}}
                                src= {drive_profile}
                                alt="Profile Picture"/>
                                </Flip>
                                
                            </div>
                            
                    
                    
                    
                    

                            <div className=" col-xl-9 ">
                                <h1
                                style={{fontFamily: "'Monofett', monospace", paddingTop: "2vh"}}>Websystems 3 Group 2 XD</h1>
                            
                                <div className="border border-start-0 border-top-0 border-info  ">
                                    <p
                                     style={{fontSize: "25px", fontFamily: "Arial, Helvetica, sansSerif"}}>
                                        {/* Home Content Text Here */}
                                        We Are The <b>Group 2</b> BSIT 3F Students Currently Sudying in EVSU 
                                        (Eastern Visayas State University)
                                    </p>
                                </div>
                            </div>

                    
                        </div>
                    </div>

                    <div style={{marginTop:'1.8in'}} className=" border-bottom border-info container-fluid text-white">
                        <h1>Featured</h1>

                    </div>
                    <Zoom>
                    <div  className="container mt-3 border-bottom border-info">
                            <div className="row">
                                <div className="col-lg-5 col-md-6 col-sm-12">
                                    <div className="bg-dark text-white border border-info card mb-3">
                                        <div className="container" style={{ width: '100%' }}>
                                        <iframe  style={{width:'100%', height:'300px'}} src="https://www.youtube.com/embed/7YK7CT7ZHko" title="That time na nag Ome TV ak Dahil Board ako XD" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                        {/* <iframe src="https://drive.google.com/file/d/1BzJcjRiG67GECuDyWZ-exiPAs-guQjvU/preview" style={{width:'100%', height:'300px'}} allow="autoplay"></iframe> */}
                                        </div>

                                        

                                        <div className="card-body">
                                            <p className="card-text">~yahalloXD<br></br>
                                                Shout out sa mga taga Samar makukulit talaga kayo XD 
                                                Follow me on Facebook : <br></br>
                                                <a style={{textDecoration:'none'}} href="https://www.facebook.com/euksteragaming"> euksteragaming </a> <br></br>
                                                <a style={{textDecoration:'none'}} href="https://www.facebook.com/eukstera.XD"> eukstera</a>
                                                 
                                            </p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-5 col-md-6 col-sm-12">
                                    <div className="border border-info card text-white bg-dark mb-3">
                                        <div className="card-body">
                                            <p className="card-text">Title: <b>Ome TV Part 3 XD</b> </p>
                                            <p className="card-text">Author: <b>Euky Abria</b></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                     </div>
                    </Zoom>
                    




                    <div style={{marginTop:'1.8in'}} className=" border-bottom border-info container-fluid text-white">
                        <h1>Class Projects</h1>

                    </div>

                   
                    {students.map((content, index) => (
                         <Fade bottom>
                                <div  key={index} className="container mt-3  border-bottom border-info">
                        <div className="row">
                            <div className="col-lg-5 col-md-6 col-sm-12">
                            <div className="bg-dark text-white border border-info card mb-3">
                                <div className="container" style={{width:'90%'}} >
                                    <img style={{width:'100%'}} src={convert(content.Pic_Link)} className="card-img-top" alt="..."/>
                                </div>
                                
                                <div className="card-body">
                                <p className="card-text">{content.Description}</p>
                                <div className="d-flex justify-content-between align-items-center">

                                    
                                    <div className="btn-group pt-2">
                                    <button  onClick={() => deleteContent(content.ID)} type="button" className="btn btn-sm btn-outline-danger">Delete</button>
                                        <Link to={`content/${content.ID}/edit`} className="btn btn-sm btn-outline-primary" style={{marginLeft: "0.5px"}}>Edit</Link>
                                    
                                    </div>
                                    
                                </div>
                                </div>
                            </div>
                            </div>

                            <div className=" col-lg-5 col-md-6 col-sm-12">
                            <div className=" border border-info card text-white bg-dark mb-3">
                            
                                <div className="card-body">
                                <p className="card-text">Title: <b>{content.Title}</b></p>
                                <p className="card-text">Author: <b>{content.Author}</b></p>
                                <p className="card-text">Date Published: <b>{new Date(content.DOR).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</b></p>
                                
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                         </Fade>
                    
                      ))}


                </section>
       
            
        </>
    );
}