import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import DiscItem from '../DiscItem/DiscItem';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function BrowsePage() {
    useEffect(() => {
        dispatch({
            type: 'FETCH_DISCS'
        })
    }, [])

    const dispatch = useDispatch();

    const discs = useSelector(store => store.discs);
    const searchResults = useSelector(store => store.searchResults);

    const displayResults = (searchResults.length > 0) ? searchResults : discs;
    const displayNoResults = (searchResults[0] === 'noResults') ? true : false ;

    return (
        <ul>
            <Grid  container spacing={1}>
                {(displayResults.length > 0) && (displayResults[0] !== 'noResults') &&
                    displayResults.map((disc) => {
                        return (
                                <DiscItem key={disc.disc_id} disc={disc}/>  
                        )
                    })}
                    {displayNoResults && 
                        <div className='no-results'>No Results</div>
                    }
            </Grid>
        </ul>
    );
}

export default BrowsePage;
