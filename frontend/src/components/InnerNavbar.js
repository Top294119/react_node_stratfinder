import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { makeStyles } from '@mui/styles';


const pages = ['Value', 'Momentum', 'Low beta', 'Growth', 'Asset Allocation', 'Covered Call', 'Market timing', 'Technical', 'Special Cases  ', 'Capital Sizing'];

const useStyles = makeStyles({
  flexBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
});

const InnerNavbar = () => {
    const classes = useStyles();

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    // Define a state variable to hold the currently active tab index
    const [activeTabIndex, setActiveTabIndex] = React.useState(0);

    // Helper function to handle tab changes
    const handleTabChange = (event, newValue) => {
        setActiveTabIndex(newValue);
    };

    const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    };
    return (
        <Box className={classes.flexBox} sx={{paddingLeft: '9px', display: 'flex', background: '#FFFFFF', border: '1px solid #EAECF0', borderRadius: '4px' }}>
            <Box className={classes.flexBox} sx={{overflow: 'hidden'}}>
                {pages.map((page, index) => (
                <MenuItem key={page} sx={{py: 0}} onClick={handleCloseNavMenu}>
                    <Typography
                        textAlign="center"
                        sx=
                            {{
                                m: 0,
                                py: '11px',
                                '&:first-of-type': {
                                    borderBottom: activeTabIndex === index ? '2px solid #884BD4' : 'none',
                                },
                                '&:hover': {
                                    color: '#6941C6',
                                },
                        }}
                        >{page}</Typography>
                </MenuItem>
                ))}
            </Box>
            <Box className={classes.flexBox} sx={{borderLeft: '1px solid #EAECF0', px: '15px'}}>
                <ArrowBackIosIcon sx={{marginRight: '34px', color: '#8495A4', fontSize:'20px'}} />
                <ArrowForwardIosIcon sx={{color: '#8495A4', fontSize:'20px'}}  />
            </Box>
        </Box>
    );
}

export default InnerNavbar
