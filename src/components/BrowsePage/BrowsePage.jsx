import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function BrowsePage() {
    useEffect(() => {
      dispatch({
        type: 'FETCH_DISCS'
      })
    }, [])
  
    const dispatch = useDispatch();
  
    const discs = useSelector(store => store.discs);
  
    return (
      <ul>
        {discs.map((disc) => {
          return <li key={disc.id}>{disc.mold}</li>
        })}
      </ul>
    );
  }

export default BrowsePage;
