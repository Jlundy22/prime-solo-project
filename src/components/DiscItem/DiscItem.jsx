import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';
import { useHistory } from 'react-router-dom';


function DiscItem({ disc }) {
    const dispatch = useDispatch();
    const history = useHistory();
   

    const handleClick = () => {
        console.log('clicked',disc.disc_id);
        dispatch({
            type: 'SET_EDIT_DISC',
            payload: disc
        });
        setTimeout(() => {
            history.push(`/details/${disc.disc_id}`);
          }, "300")
    }
    return (
        <Grid className='Grid' item xs={6}>
        <li onClick={handleClick} >
            <p> {disc.manufacturer} {disc.mold}</p>
            {/* <p> {disc.mold}</p> */}
            {/* <p>Sleepy Scale: {disc.sleepy_scale}</p> */}
            <img src={disc.img_path} width='100' />
            {/* <p> Username: {disc.username}</p> */}
            <p>Price: ${disc.price}</p>
        </li>
        </Grid>
    );
}

export default DiscItem;
