import React, { Component } from 'react';
import './Sidebar.css';
import { HashLink as Link } from 'react-router-hash-link';
import Profile from '../images/Photo.jpeg'

class Sidebar extends Component {
    render() {

        return (
            <div className="sidebar">
                <br/>
                <div style={{ color: 'black', fontWeight: 'bold' }} className=""> # hello_world </div> <br/>
                <div style={{ color: 'black', fontWeight: 'bold' }} className=""> # designing </div>
                <div style={{ color: 'black', fontWeight: 'bold' }} className=""> # coding </div>
                <h1><Link smooth to="/#start" className="h1_links">Pamoda Rasangi Silva</Link></h1>

                <img src={Profile} />
                <p style={{ color: 'black', fontWeight: 'bold' }} className="gmail"><a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJftvBffjPmxWxvfHWRHWnhTbpQgPxBxvkcnPpFpFqbhrXMCHXSJTsCXCVLsQzgRcVLpnPL" rel="noopener noreferrer" target="_blank" className="fa fa-envelope"></a> pamodasilva21@gmail.com </p>

                <ul className="sidebar-nav">
                    <li className="sidebar-nav-items"><Link smooth to="/#about" className="links">About</Link></li>
                    <li className="sidebar-nav-items"><Link smooth to="/#interest" className="links">Interest</Link></li>
                    <li className="sidebar-nav-items"><Link smooth to="/#education" className="links" >Education</Link></li>
                </ul>

                <div className="flip-card-back">
                    <ul className="sidebar-nav">  
                        <li className="sidebar-nav-icons"> <a href="https://github.com/pamodarasangi" rel="noopener noreferrer" target="_blank" className="fa fas fa-github fa-lg"></a></li>
                        <li className="sidebar-nav-icons"><a href="https://www.linkedin.com/in/pamoda-rasangi-66a409215" rel="noopener noreferrer" target="_blank" className="fa fas fa-linkedin fa-lg"></a></li>
                        <li className="sidebar-nav-icons"> <a href="PamodaSilva:pamodasilva21@gmail.com" rel="noopener noreferrer" target="_blank" className="fa fas fa-envelope fa-lg"></a></li>

                        <li className="sidebar-nav-icons"> <a /* href="https://twitter.com/Sachin_Mittal98" */  rel="noopener noreferrer" target="_blank" className="fa fas fa-twitter fa-lg"></a></li>
                        <li className="sidebar-nav-icons"> <a /* href="https://www.instagram.com/decent_sachin.mittal/" */ rel="noopener noreferrer" target="_blank" className="fa fas fa-instagram fa-lg"></a></li>
                        <li className="sidebar-nav-icons"> <a /* href="https://www.facebook.com/profile.php?id=100011989067867" */ rel="noopener noreferrer" target="_blank" className="fa fas fa-facebook fa-lg"></a></li> 

                    </ul>
                </div>

            </div>
        )
    }
}

export default Sidebar