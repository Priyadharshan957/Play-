import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';
import im from '../Images/logo4.png';
import { useNavigate } from 'react-router';
import '../Component/Nav.css';

const Nav = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [open, setOpen] = useState(false);

  const handlehome = () => {
    navigate("/kard");
  };

  const handlecon = () => {
    navigate("/con");
  };

  const handlelogin = () => {
    navigate("/");
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handle=()=>{
    navigate("/price");
  }

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <nav>
      <div className='log'>
        <img src={im} alt="logo" />
      </div>
      <ul>
        <li>
          <div className="search-container">
            <input
              type="text"
              className="search-input"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
        </li>
        <li>
          <a onClick={handlehome}><b>HOME</b></a>
        </li>
        <li>
          <div className="select-dropdown" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
            <div className="selected-option"><b>CATEGORIES</b></div>
            {isOpen && (
              <div className="dropdown-options">
                <div className="option">ACTION</div>
                <div className="option">SCI-FI</div>
                <div className="option">HORROR</div>
                <div className="option">POPULAR ANIMATIONS</div>
                <div className="option">VIRTUAL REALITY (VR)</div>
              </div>
            )}
          </div>
        </li>
        <li>
          <a onClick={handlecon}><b>CONTACT US</b></a>
        </li>
        <li>
          <a onClick={handle}><b>SUBSCRIPTION</b></a>
        </li>
        <li>
          <b onClick={handleClickOpen} style={{ color: 'white' }}>
            <b>LOG OUT</b>
          </b>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Are you sure you want to exit from this Account?"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                If you're logged out from this Account, you need to log in again.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>CANCEL</Button>
              <Button onClick={handlelogin} autoFocus>
                OK
              </Button>
            </DialogActions>
          </Dialog>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
