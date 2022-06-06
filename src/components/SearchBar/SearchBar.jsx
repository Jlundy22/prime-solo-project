import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useSelector, useDispatch} from 'react-redux';



const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
    },
}));

function SearchBar({ searchType }) {
    const dispatch = useDispatch();
    const discs = useSelector(store => store.discs);
    const myDiscs = useSelector(store => store.myDiscs);
    const [searchClicked, setSearchClicked] = React.useState(false);

    function handleInputChange() {
        const discArray = [];
        if (searchType === "searchAll") {
            for (let i = 0; i < discs.length; i++) {
                const disc = discs[i];
                if (disc.mold.toLowerCase().includes(event.target.value.toLowerCase())) {
                    discArray.push(disc);
                }
            }
        } else {
            for (let i = 0; i < myDiscs.length; i++) {
                const disc = myDiscs[i];
                if (disc.mold.toLowerCase().includes(event.target.value.toLowerCase())) {
                    discArray.push(disc);
                }
            }
        }
        if (discArray.length === 0 ) {
            discArray.push('noResults');
         }
        dispatch({
            type: 'SEARCH_RESULTS',
            payload: discArray
        });
    }
    
    const placeholderText = (searchType === 'searchAll') ? 'Browse All Discs' : 'Browse My Discs';
    const searchWidth = (searchClicked === false) ? {width: 50} : {width: 250};
    return (
        <Search sx={searchWidth}>
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
                placeholder={placeholderText}
                inputProps={{ 'aria-label': 'search' }}
                onChange={handleInputChange}
                onClick={() => setSearchClicked(!searchClicked)}
            />
        </Search>
    )

}

export default SearchBar;