import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
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
        <Grid className='my-disc' item xs={12}>
            <li >
                <p>Manufactuer: {disc.manufacturer}</p>
                <p>Mold: {disc.mold}</p>
                <p>Price: ${disc.price}</p>
                <p>Sleepy Scale: {disc.sleepy_scale}</p>
                <img src={disc.img_path} width='100' />
                <Button className='myDiscButton' onClick={handleDelete}  startIcon={<DeleteIcon />}>
                
                </Button>
                <Button className='myDiscButton' onClick={() => fetchEditPage(disc.disc_id)}  startIcon={<EditIcon />}>
                    
                </Button>

            </li>
        </Grid>
    );
}

export default MyDiscItem;