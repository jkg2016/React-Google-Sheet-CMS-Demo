import React from 'react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import SignupButton from './SignupButton';

const NavBar = () => {
    return ( 
        <div>
        <ul id="nav">
          <li><LoginButton/></li>
          <li><LogoutButton /></li>
          <li><SignupButton /></li>
        </ul>
      </div>
     );
}
 
export default NavBar;