import React from "react";
import NavBar from "./NavBar";
import axios from 'axios';
import {useHistory} from "react-router-dom"

const Login = () => {
    
    return (
        <div><NavBar/>
        <div class="white-box">
        <br/>
        <br/>
        <p align="left"><h6>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Best Automobile Care Specialist</h6></p>
        <p align="left"><h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LogIn</h2></p>
        <div className="login">
        <br></br><br></br>
        <form>
        <div className="name label-input">
            <label htmlFor="name">User Name</label>
            <input type="text" placeholder="Your name"/>
        </div>

        <div className="password label-input">
            <label htmlFor="password">Password</label>
            <input type="text" placeholder="Your password"/>
        </div>
        <div>
            <br/>
        <label htmlFor="address">You havent account?</label> <a href="/register"> Register Here</a>
        </div>
        <div class="text-center">
       <button type="submit">Login</button>
       </div>
        <br/>
        
        </form><br/><br/><br/><br/>
        <footer class="page-footer font-small blue">
    <div class="footer-copyright text-center py-3"><b>© 2022 All right recieved</b>
  </div>
  </footer>
        </div>
        </div>
        </div>
    )
}
export default Login