
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class NavBar extends Component {
    render() {
        return (
          
            <div >             
                    
              <ul class="nav justify-content-end navbar-dark bg-dark" >             
  <li class="nav-item">
    
    <a class="nav-link active" href="/" ><div class="p-2 mb-2 bg-dark text-white"><b>Home</b></div></a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#"><div class="p-2 mb-2 bg-dark text-white"><b>About</b></div></a>
  </li>

  <li class="nav-item">
    <a class="nav-link" href="/register"><div class="p-2 mb-2 bg-dark text-white"><b>Registration</b></div></a>
  </li>
  <li class="nav-item">
    <a class="nav-link " href="/login"><div class="p-2 mb-2 bg-dark text-white"><b>Login</b></div></a>
    </li>
    
</ul>
            </div>
        );
    }
}

export default NavBar;