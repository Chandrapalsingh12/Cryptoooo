import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import CalculateIcon from '@mui/icons-material/Calculate';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import ViewTimelineIcon from '@mui/icons-material/ViewTimeline';
import HelpIcon from '@mui/icons-material/Help';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import LanguageIcon from '@mui/icons-material/Language';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { ConnectButton } from "@rainbow-me/rainbowkit";

function Navbar() {
  return (
    <div className="main-nav">
      <div className="top-nav">
        <div className="logo">
          <h2>Cryptoooo</h2>
        </div>

        <div className="user-auth">
          <button>
            <Link to="/login" style={{ color: "white" }}>
              Swap<SwapHorizIcon />
            </Link>
          </button>
          <button>
              <ConnectButton />
            {/* <Link to="/join" style={{ color: "white" }}>
            </Link> */}
          </button>
        </div>
      </div>
      <div className="left-nav">
        <div className="nav-item">
          <h2>Core</h2>
          <ul>
            <li>
              <NavLink to="/">
                <div className="icons">
                  {" "}
                  <DashboardIcon />
                  Dashboard
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/like-item">
                <div className="icons">
                  {" "}
                  <CalculateIcon />
                  Calculation
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/like-item">
                <div className="icons">    
                  <SwapHorizIcon />
                  Swap
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/like-item">
                <div className="icons">    
                  <ViewTimelineIcon />
                  To Do List
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/like-item">
                <div className="icons">    
                  <HelpIcon />
                  FAQ
                </div>
              </NavLink>
            </li>
          </ul>

          <h2>LINKS</h2>

          <ul>
            <li>
              <NavLink to="/">
                <div className="icons">
                  {" "}
                  <ConnectWithoutContactIcon />
                  Social
                </div>
              </NavLink>
            </li> 
             <li>
              <NavLink to="/">
                <div className="icons">
                  {" "}
                  <LanguageIcon />
                  Website
                </div>
              </NavLink>
            </li>  
            <li>
              <NavLink to="/">
                <div className="icons">
                  {" "}
                  <AccountBalanceWalletIcon />
                  Wallet
                </div>
              </NavLink>
            </li>

            </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
