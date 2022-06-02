import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';


function UserPage() {
  const history = useHistory();

  const handleBrowseClick = () => {
    // Tell React Router where to take us:
    history.push('/browse');
};
const handleSellDiscClick = () => {
  // Tell React Router where to take us:
  history.push('/sellDisc');
};
const handleMyDiscsClick = () => {
  // Tell React Router where to take us:
  history.push('/myDiscs');
};
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Go sling some discs!</p>
      {/* <p>Your ID is: {user.id}</p> */}
      <LogOutButton className="btn" />
      <Button onClick={handleBrowseClick} >Browse</Button>
      <Button onClick={handleSellDiscClick}>Sell Disc</Button>
      <Button onClick={handleMyDiscsClick}>My Discs </Button>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
