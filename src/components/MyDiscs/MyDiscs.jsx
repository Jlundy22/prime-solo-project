import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import MyDiscItem from '../MyDiscItem/MyDiscItem';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function MyDiscs() {
    useEffect(() => {
        dispatch({
            type: 'FETCH_MY_DISCS'
        })
    }, [])

    const dispatch = useDispatch();

    const myDiscs = useSelector(store => store.myDiscs);
    const searchResults = useSelector(store => store.searchResults);

    const displayResults = (searchResults.length > 0) ? searchResults : discs;

    return (
        <ul>
            <Grid container spacing={2}>
                {displayResults.map((disc) => {
                    return (
                           <MyDiscItem key={disc.disc_id} disc={disc}/>  
                    )
                })}
            </Grid>
        </ul>
    );
}

export default MyDiscs;