import React from "react";
import  { Link } from "react-router-dom";
import "./App.css";

class home extends React.Component{
        render(){
            return(
            <><h1>Welcome to Kids Worksheets!</h1><div class="options">
                    
                    <Link to="/mathematics">Mathematics worksheet</Link>
                    <Link to="/lifeSkills">Life Skills Worksheet</Link>
                    <Link to="/vocabulary">Vocabulary Worksheet</Link>
                </div></>
            );
            
               
            
        }
}

export default home;