import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';

function DiscItem({ disc }) {
    //   const dispatch = useDispatch();

    //   function handleDelete() {
    //     dispatch({
    //       type: 'DELETE_ITEM',
    //       payload: item.id,
    //     });
    //   }

    return (
        <Grid  item xs={4}>
        <li >
            {disc.disc_id}
            <p>Manufactuer: {disc.manufacturer}</p>
            <p>Mold: {disc.mold}</p>
            <p>Price: {disc.price}</p>
            <p>Sleepy Scale: {disc.sleepy_scale}</p>
            <img src={disc.img_path} width='100' />
            <p> Username: {disc.username}</p>
        </li>
        </Grid>
    );
}

export default DiscItem;
