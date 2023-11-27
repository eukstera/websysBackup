import "../App.css";


import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
export default function Nav()
{
    return(
        <>
           <nav className="border-bottom border-info navbar navbar-dark navbar-expand-lg bg-body-dark">
                <div className="container-fluid">
                    <Link style={{fontSize:'23px', fontFamily: "'Monofett', monospace"}} className="navbar-brand" to = "/WebSYS">G2</Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            
                            {/* add links here */}

                             {/*Home Link  */}
                             <Link  style={{textDecoration:'none'}} to="/WebSYS" className="nav-item" ><li data-bs-toggle="tooltip" data-bs-title="Another one here too" className="nav-link " >Home</li></Link>
                             {/* Members Link */}
                             <Link style={{textDecoration:'none'}} to="/members" className="nav-item" ><li className="nav-link" >Members</li></Link>
                             {/* Content Management Link */}
                             
                            

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Actions
                                </a>
                                <ul className="dropdown-menu dropdown-menu-dark  ">
                                <Link style={{textDecoration:'none'}} to="/MemberManager" className="dropdown-item" ><li className="" >Add Members</li></Link>
                                <Link style={{textDecoration:'none'}} to="/ContentManager" className="dropdown-item" ><li className="" >Add Content</li></Link>
                                   
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


        </>
    );
}