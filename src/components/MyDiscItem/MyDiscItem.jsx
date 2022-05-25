import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

function MyDiscItem({ disc }) {
      const dispatch = useDispatch();

      function handleDelete() {
          console.log('Delete', disc.disc_id)
        dispatch({
          type: 'DELETE_DISC',
          payload: disc.disc_id,
        });
      }

    const handleClick = () => {
        console.log('clicked',disc.disc_id)
    }
    return (
        <Grid  item xs={4}>
        <li onClick={handleClick} >
            <p>Manufactuer: {disc.manufacturer}</p>
            <p>Mold: {disc.mold}</p>
            <p>Price: ${disc.price}</p>
            <p>Sleepy Scale: {disc.sleepy_scale}</p>
            <img src={disc.img_path} width='100' />
            <Button onClick={handleDelete} variant="outlined" startIcon={<DeleteIcon />}>
                    Delete Disc
                </Button>
            
        </li>
        </Grid>
    );
}

export default MyDiscItem;