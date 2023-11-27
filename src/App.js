import './App.css';
import Nav from './components/nav.js'  ; 
import Home from './components/home.js';
import Footer from './components/footer.js';
import Members from './components/members.js';
import MemberManager from './components/add_members.js';
import ContentManager from './components/manage_content.js';
import EditContent from './components/edit_content.js';
import EditMembers from './components/edit_members.js';

import {BrowserRouter as Router,Routes,Route,Link, BrowserRouter} from "react-router-dom";






function App() {
  
  return (
  <>
  
    <Router >
    <Nav/> 

    <section style={{ minHeight:' 78vh', height: '84vh', overflow:"hidden", overflowY:"scroll"}}>


    <Routes>
        {/* add routes here */}

        <Route path='/WebSYS' element={<Home/>}></Route>
        <Route path='/members/member/:id/edit' element={<EditMembers/>}></Route>
        <Route path='/Members' element={<Members/>}></Route>
        <Route path='/MemberManager' element={<MemberManager/>}></Route>
        <Route path='/ContentManager' element={<ContentManager/>}></Route>
        <Route path='/WebSYS/content/:id/edit' element={<EditContent/>}></Route>
        
      </Routes>

  
   
   
    </section>
    <Footer/>
    </Router>
    

</>
    
  );
}

export default App;
 


  
  