import React, { Component } from 'react';
import "./Menu.css";

import { Link ,NavLink} from 'react-router-dom';

class Menu extends Component {
    render() {
        return (
            <div>
                <nav className="navstyle">
                    <ul>
                        <li>  <NavLink to='/' exact strict activeStyle={{color:'green'}}>Tic-Tac-Toe</NavLink> </li>
                        <li>  <NavLink to='/about' exact strict activeStyle={{color:'green'}}>About</NavLink> </li>
                        <li>  <NavLink to='/contact' exact strict activeStyle={{color:'green'}}>Contact</NavLink> </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Menu;