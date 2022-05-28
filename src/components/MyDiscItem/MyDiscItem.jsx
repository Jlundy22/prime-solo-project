import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { useHistory } from 'react-router-dom';

function MyDiscItem({ disc }) {
    const dispatch = useDispatch();
    const history = useHistory();


    function handleDelete() {
        dispatch({
            type: 'DELETE_DISC',
            payload: disc.disc_id,
        });
    }
    function fetchEditPage(id) {
        dispatch({
            type: 'FETCH_ONE_DISC',
            payload: id
        });
        setTimeout(() => {
            history.push(`/edit/${id}`);
          }, "100")
         
    }
    return (
        <Grid item xs={4}>
            <li >
                <p>Manufactuer: {disc.manufacturer}</p>
                <p>Mold: {disc.mold}</p>
                <p>Price: ${disc.price}</p>
                <p>Sleepy Scale: {disc.sleepy_scale}</p>
                <img src={disc.img_path} width='100' />
                <Button onClick={handleDelete} variant="outlined" startIcon={<DeleteIcon />}>
                    Delete Disc
                </Button>
                <Button onClick={() => fetchEditPage(disc.disc_id)} variant="outlined">
                    Edit
                </Button>

            </li>
        </Grid>
    );
}

export default MyDiscItem;