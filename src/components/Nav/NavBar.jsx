import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import { useHistory } from 'react-router-dom';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Brightness1Icon from '@mui/icons-material/Brightness1';
import SearchBar from '../SearchBar/SearchBar';

const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color:
            theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            '&:active': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity,
                ),
            },
        },
    },
}));

function NavBar() {
    const history = useHistory();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleProfileClick = () => {
        // Tell React Router where to take us:
        history.push('/');
        setAnchorEl(null);
    };
    const handleSellDiscClick = () => {
        // Tell React Router where to take us:
        history.push('/sellDisc');
        setAnchorEl(null);
    };
    const handleBrowseClick = () => {
        // Tell React Router where to take us:
        history.push('/browse');
        setAnchorEl(null);
    };

    const handleMyDiscsClick = () => {
        // Tell React Router where to take us:
        history.push('/myDiscs');
        setAnchorEl(null);
    };
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    let isVisible = false;
    let searchType;
    if (window.location.hash === '#/myDiscs') {
        isVisible = true;
        searchType = 'myDiscs'
    } else if (window.location.hash === '#/browse') {
        isVisible = true;
        searchType = 'searchAll'
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                        <div >
                            <Button
                                id="demo-customized-button"
                                aria-controls={open ? 'demo-customized-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                variant="contained"
                                disableElevation
                                onClick={handleClick}
                            >
                                <MenuIcon />
                            </Button>
                            <StyledMenu
                                id="demo-customized-menu"
                                MenuListProps={{
                                    'aria-labelledby': 'demo-customized-button',
                                }}
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleSellDiscClick} disableRipple>
                                    <AttachMoneyIcon />
                                    Sell Disc
                                </MenuItem>
                                <MenuItem onClick={handleBrowseClick} disableRipple>
                                    <ShoppingBagIcon />
                                    Browse
                                </MenuItem>
                                <Divider sx={{ my: 0.5 }} />
                                <MenuItem onClick={handleClose} disableRipple>
                                    <ReportProblemIcon />
                                    Report Issue
                                </MenuItem>
                                <MenuItem onClick={handleProfileClick} disableRipple>
                                    <AccountBoxIcon />
                                    Profile
                                </MenuItem>
                                <MenuItem onClick={handleMyDiscsClick} disableRipple>
                                    <Brightness1Icon />
                                    My Discs
                                </MenuItem>
                            </StyledMenu>
                        </div>
                    <Typography
                        className='Typography'
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        Drop Zone
                    </Typography>
                    {isVisible &&
                     <SearchBar searchType={searchType}/>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default NavBar;