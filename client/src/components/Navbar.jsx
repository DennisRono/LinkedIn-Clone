import React, { useState, useEffect } from 'react'
import '../styles/css/navbar.css'
import useWindowDimensions from '../includes/dimensions'
import {  ReactComponent as NavLogo } from '../assets/svg/navlogo.svg'
import {  ReactComponent as SearchIcon } from '../assets/svg/searchIcon.svg'
import { Link } from "react-router-dom"
import {  ReactComponent as Home } from '../assets/svg/nav-home.svg'
import {  ReactComponent as Network } from '../assets/svg/nav-network.svg'
import {  ReactComponent as Jobs } from '../assets/svg/nav-jobs.svg'
import {  ReactComponent as Messaging } from '../assets/svg/nav-messaging.svg'
import {  ReactComponent as Notifications } from '../assets/svg/nav-notifications.svg'
import {  ReactComponent as ProfileDropDown } from '../assets/svg/down-icon.svg'
import {  ReactComponent as NavWork } from '../assets/svg/nav-work.svg'
import {  ReactComponent as More } from '../assets/svg/nav-more.svg'
import ProfileImage from '../assets/images/kibet.png'

const Navbar = () => {
    const [activeTab, setActiveTab] = useState('home')
    const activePageTab = (page) =>{
        console.log(page);
        setActiveTab(page)
    }
    const { width } = useWindowDimensions();
    useEffect(()=>{
        if(width > 920){
            document.querySelector(".nav-dropdown").classList.remove("show");
        }
    }, [width]);
    const navDrop = () => {
        if(width < 920){
            document.querySelector(".nav-dropdown").classList.toggle("show");
        }
    }
    const pnavDrop = () => {
        document.querySelector(".profileDetDrop").classList.toggle("show");
        console.log('clicked');
    }
    window.onClick = function(event) {
        if(width < 920){
            if (!event.target.matches('.nav-dropdown')) {
                var dropdowns = document.getElementsByClassName("nav-dropdown");
                var i;
                for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
                }
            }
        }
        if (!event.target.matches('.profileDetDrop')) {
            var pdropdowns = document.getElementsByClassName("profileDetDrop");
            var k;
            for (k = 0; k < pdropdowns.length; k++) {
            var popendrop = pdropdowns[k];
            if (popendrop.classList.contains('show')) {
                popendrop.classList.remove('show');
            }
            }
        }
    }
  return (
    <div className="navbar">
        <div className="navcontainer">
            <div className="navflex">
                <div className="navleft">
                    <div className="navlogo">
                        <NavLogo className="logo"/>
                    </div>
                    <div className="navsearch">
                        <SearchIcon className="navsearchIcon"/>
                        <input type="text" className="navsearchInput" placeholder="Search" />
                    </div>
                </div>
                <div className="navright">
                    <div className="navigation">
                        <div className="nav-group">
                            <Link to="/feed" className={activeTab==='home'?"activeTab nav-link":"nav-link"} onClick={()=>{activePageTab('home')}} >
                                <div className="nav-icon">
                                    <Home height="100%" width="100%" />
                                </div>
                                <span className="nav-texts">Home</span>
                            </Link>
                            <Link to="/network" className={activeTab==='network'?"activeTab nav-link":"nav-link"} onClick={()=>{activePageTab('network')}}>
                                <Network className="nav-icon" />
                                <span className="nav-texts">My Network</span>
                            </Link>
                            <Link to="/jobs" className={activeTab==='jobs'?"activeTab nav-link":"nav-link"} onClick={()=>{activePageTab('jobs')}}>
                                <Jobs className="nav-icon" />
                                <span className="nav-texts">Jobs</span>
                            </Link>
                            <Link to="/messaging" className={activeTab==='messaging'?"activeTab nav-link messaging-link-nav":"nav-link messaging-link-nav"} onClick={()=>{activePageTab('messaging')}}>
                                <Messaging className="nav-icon" />
                                <span className="nav-texts">Messaging</span>
                            </Link>
                            <Link to="/notifications" className={activeTab==='notifications'?"activeTab nav-link notif-link-nav":"nav-link notif-link-nav"} onClick={()=>{activePageTab('notifications')}}>
                                <Notifications className="nav-icon" />
                                <span className="nav-texts">Notifications</span>
                            </Link>
                            <Link to="/profile"  className="nav-link prof-link-nav">
                                <img src={ProfileImage} alt="avatar" className="nav-icon nav-profile-image" />
                                <span className="nav-texts">Me
                                    <span><ProfileDropDown className="profile-drop-icon"/></span>
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className="nav-work">
                        <Link to="/profile" className="nav-link nav-works" onClick={()=>{pnavDrop()}}>
                            <NavWork className="nav-icon" />
                            <span className="nav-texts">Me
                                <span><ProfileDropDown className="profile-drop-icon"/></span>
                            </span>
                        </Link>
                        <div className="profileDetDrop">

                        </div>
                        <Link to="" className="nav-premium">
                            Try premium for <br/>free
                        </Link>
                        <div className="nav-more" onClick={()=>{navDrop()}}>
                            <More className="nav-icon" />
                        </div>
                        <div className="nav-dropdown">
                            <div className="drop-nav-flex">
                                <Link to="/messaging" className="nav-link messaging-link-nav-drop">
                                    <Messaging className="nav-icon" />
                                    <span className="nav-texts">Messaging</span>
                                </Link>
                                <Link to="/notifications" className="nav-link notif-link-nav-drop">
                                    <Notifications className="nav-icon" />
                                    <span className="nav-texts">Notifications</span>
                                </Link>
                                <Link to="/profile" className="nav-link prof-link-nav-drop">
                                    <img src={ProfileImage} alt="avatar" className="nav-icon nav-profile-image" />
                                    <span className="nav-texts">Me
                                        <span><ProfileDropDown className="profile-drop-icon"/></span>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar