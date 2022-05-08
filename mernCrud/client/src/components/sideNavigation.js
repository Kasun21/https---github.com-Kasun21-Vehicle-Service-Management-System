import React, { Component } from 'react';
class sideNavigation extends Component {
    render() {
        return (
            
            <div class="sidebar">
            <div class="logo-details">
              <i class='bx bx-atom icon'></i>
                <div class="logo_name">Spathodea</div>
                <i class='bx bx-menu' id="btn" ></i>
            </div>
            <ul class="nav-list">
              <li>
                  <i class='bx  bx-search'></i>
            
                 <span class="tooltip">Search</span>
              </li>
              <li>
                <a href="<?php echo site_url('Welcome/loadLogin') ?>">
                  <i class='bx bx-grid-alt'></i>
                  <span class="links_name">Dashboard</span>
                </a>
                 <span class="tooltip">Dashboard</span>
              </li>
              <li>
               <a href="#">
                 <i class='bx bx-user' ></i>
                 <span class="links_name">User</span>
               </a>
               <span class="tooltip">User</span>
             </li>
             <li>
               <a href="#">
                 <i class='bx bx-message' ></i>
                 <span class="links_name">Messages</span>
               </a>
               <span class="tooltip">Messages</span>
             </li>
             <li>
               <a href="#">
                 <i class='bx bx-user-pin' ></i>
                 <span class="links_name">Complaints</span>
               </a>
               <span class="tooltip">Complaints</span>
             </li>
             <li>
               <a href="#">
                 <i class='bx bx-cog' ></i>
                 <span class="links_name">Payment</span>
               </a>
               <span class="tooltip">Payment</span>
             </li>
             <li>
               <a href="#">
                 <i class='bx bx-calendar' ></i>
                 <span class="links_name">Event</span>
               </a>
               <span class="tooltip">Event</span>
             </li>
             <li>
               <a href="#">
                 <i class='bx bx-face' ></i>
                 <span class="links_name">Visitors</span>
               </a>
               <span class="tooltip">Visitors</span>
             </li>
             <li>
               <a href="#">
                 <i class='bx bx-car' ></i>
                 <span class="links_name">Car Park</span>
               </a>
               <span class="tooltip">Car Park</span>
             </li>
             <li>
               <a href="#">
                 <i class='bx bx-user-circle' ></i>
                 <span class="links_name">Committee</span>
               </a>
               <span class="tooltip">Committee</span>
             </li>
        
             <li>
               <a href="#">
                 <i class='bx bx-cog' ></i>
                 <span class="links_name">Setting</span>
               </a>
               <span class="tooltip">Setting</span>
             </li>
             <li class="profile">
                 <div class="profile-details">
                   
                  
                   <div class="name_job">
                     <div class="name">Prem Shahi</div>
                    
                     <div class="job">Resident SPE10901</div>
                    
                   </div>
                 </div>
                 <i class='bx bx-log-out' id="log_out" ></i>
             </li>
    
            </ul>
          </div>
        );
    }
}

export default sideNavigation;