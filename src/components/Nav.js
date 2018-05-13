import React from 'react';
import { 
  NavLink
} from 'react-router-dom';


function Nav(props){
    return(
    <div>
        <h1>Menu</h1>
          <nav> 
            <ul>
              <li><NavLink exact to="/React"> Home </NavLink></li>
              <li><NavLink to="/React/searchGiphy"> Find Giphy </NavLink></li>
              <li><NavLink to="/React/searchSticker"> Find Sticker </NavLink></li>
              <li><NavLink to="/React/randomGiphy"> Random Giphy </NavLink></li>
              <li><NavLink to="/React/randomSticker"> Random Sticker </NavLink></li>
            </ul>
          </nav>
    </div>
      );
}

export default Nav;
