import React, { Component } from 'react';
import logo from 'images/logo.png'
import './Header.css';

function Header(){

    return(
        <div className="navbar">
            <div className="logo">
                <a class="dojo-icon">
                    <img src={logo} alt="logo" />
                </a>
            </div>
            <ul>
                <li><a>Home</a></li>
                <li><a>Scratch</a></li>
                <li><a>Python</a></li>
            </ul>
        </div>
    )

}

export default Header
