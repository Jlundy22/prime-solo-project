import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
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

    const displayResults = (searchResults.length > 0) ? searchResults : myDiscs;
    const displayNoResults = (searchResults[0] === 'noResults') ? true : false ;

    return (
        <ul>
            <h1 className='pageHeader'>My Discs</h1>
            <Grid container spacing={1}>
                {(displayResults.length > 0) && (displayResults[0] !== 'noResults') &&
                 displayResults.map((disc) => {
                    return (
                           <MyDiscItem key={disc.disc_id} disc={disc}/>  
                    )
                })}
                {displayNoResults && 
                    <div className='no-results'>No Results</div>
                }
            </Grid>
        </ul>
    );
}

export default MyDiscs;