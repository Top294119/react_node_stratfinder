import React from 'react';
import Box from '@mui/material/Box';
import StrategyIMG from '../assets/images/strategeCard.png';
import { makeStyles } from '@mui/styles';
import FlipCameraAndroidIcon from '@mui/icons-material/FlipCameraAndroid';
import AddIcon from '@mui/icons-material/Add';

const useStyles = makeStyles({
  flexBox: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  descriptionTitle: {
    margin: 0,
    color: '#667085',
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '23px'
  },
  descriptionContent: {
    margin: 0,
    color: '#101828',
    fontWeight: 400,
    fontSize: '12px',
  },
  iconText: {
    margin: 0,
    color: '#475467',
    fontSize: '11px',
    fontWeight: 600,
    marginLeft: '2px'
  }
});


const StrategyCard = (props) => {
    const classes = useStyles();
    return (
        <Box sx=
            {{
                width: '174px',
                border: '1px solid #D0D5DD',
                borderRadius: '8px',
            }}
        >
            <Box
                sx={{
                    p: '16px',
                }}
            >
                <p
                    style={{
                        fontWeight: 600,
                        fontSize: '14px',
                        marignBottom: '36px'
                    }}
                >
                    {props.title}
                </p>
                <img src={StrategyIMG} alt="strategy_chart"></img>
                <Box className={classes.flexBox}>
                    <p className={classes.descriptionTitle}>Return</p>
                    <p className={classes.descriptionContent}>31.53%</p>
                </Box>
                <Box className={classes.flexBox}>
                    <p className={classes.descriptionTitle}>Sharp</p>
                    <p className={classes.descriptionContent}>0.04%</p>
                </Box>
                <Box className={classes.flexBox}>
                    <p className={classes.descriptionTitle}>Max DD</p>
                    <p className={classes.descriptionContent}>8.55%</p>
                </Box>
            </Box>
            <Box
                sx={{
                    borderTop: '1px solid #D0D5DD',
                    p: '5px'
                }}
            >
                <Box className={classes.flexBox}>
                    <Box className={classes.flexBox} >
                        <FlipCameraAndroidIcon sx={{fontSize: 'small', color: '#7F56D9'}} />
                        <p className={classes.iconText}>Analyse</p>
                    </Box>
                    <Box className={classes.flexBox} >
                        <AddIcon sx={{fontSize: 'small', color: '#7F56D9'}} />
                        <p className={classes.iconText}>Add to Portfolio</p>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}


export default StrategyCard
