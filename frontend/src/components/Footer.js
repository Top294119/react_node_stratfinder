import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';

const useStyles = makeStyles({
    footerTitle: {
    },
    footerContent: {
        fontWeight: '400',
        fontSize: '16px',
        color: 'white',
        lineHeight: '37px'
    },
    linkIconStyle: {
        color: 'white',
        backgroundColor: '#1A173E',
        marginRight: '5px',
        width: '30px',
        borderRadius: '7px',
        textAlign: 'center',
        padding: '6px 0px'
    },
    linkItem: {
        padding: 2
    }
  });

const Footer = () => {
    const classes = useStyles();
    return (
        <Box sx={{pt: '48px', px: '115px', backgroundColor: '#120F35'}}>
            <Box sx={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between'}}>
                <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                    <Box sx={{width: '75%', mb: '90px'}}>
                        <h3 style={{color: 'white'}}>stratfinder</h3>
                        <p className={classes.footerContent}>Investment made simple and effortless</p>
                    </Box>
                    <Box sx={{display: 'flex', justifyContent: 'flex-start', 'alignItems': 'center'}}>
                        <Box className={classes.linkIconStyle}>
                            <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7 4.61538H4.66667V2.76923C4.66667 2.25969 5.0848 2.30769 5.6 2.30769H6.53333V0H4.66667C3.92406 0 3.21187 0.291757 2.68677 0.811089C2.16167 1.33042 1.86667 2.03479 1.86667 2.76923V4.61538H0V6.92308H1.86667V12H4.66667V6.92308H6.06667L7 4.61538Z" fill="white"/>
                            </svg>
                        </Box>
                        <Box className={classes.linkIconStyle}>
                            <svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.8769 1.00421C10.4793 1.18942 9.97583 1.36326 9.52462 1.42105C9.9835 1.13495 10.7115 0.539053 10.8769 0C10.4482 0.264789 9.67292 0.547579 9.16718 0.649895C8.7633 0.199895 8.18723 0 7.54895 0C6.32289 0 5.46781 1.09184 5.46781 2.36842V3.31579C3.66478 3.31579 1.90682 1.87247 0.812833 0.473684C0.615022 0.82624 0.51117 1.22825 0.512178 1.63753C0.512178 2.49916 1.26539 3.37358 1.86175 3.78947C1.49798 3.77763 0.809227 3.48584 0.509473 3.31579V3.34279C0.509473 4.464 1.25818 5.22521 2.27284 5.43742C2.08758 5.49095 1.86175 5.68421 0.992685 5.68421C1.27486 6.60079 2.69339 7.08537 3.66478 7.10526C2.9048 7.72437 1.54982 8.05263 0.509473 8.05263C0.329621 8.05263 0.232257 8.06305 0.0587158 8.04174C1.04047 8.69542 2.41167 9 3.66478 9C7.74729 9 9.97538 5.72305 9.97538 2.66684C9.97538 2.56642 9.97223 2.23011 9.96727 2.13158C10.4036 1.80853 10.5803 1.47032 10.8769 1.00421Z" fill="white"/>
                            </svg>
                        </Box>
                        <Box className={classes.linkIconStyle}>
                            <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.43957 3.31507H0.161444V9.98655H2.43957V3.31507Z" fill="white"/>
                                <path d="M2.05657 0.201635C1.83945 0.0701661 1.58429 3.99915e-06 1.32329 1.70346e-10C1.14913 -2.66581e-06 0.976688 0.0312427 0.815883 0.0919395C0.655077 0.152636 0.509078 0.241586 0.386284 0.353675C0.263488 0.465763 0.16632 0.598778 0.100366 0.74507C0.0344122 0.891361 0.000974022 1.04804 0.00197495 1.2061C0.00347524 1.44299 0.0822419 1.67416 0.228339 1.87046C0.374435 2.06677 0.581316 2.2194 0.822882 2.30911C1.06445 2.39882 1.32988 2.42158 1.58569 2.37454C1.84149 2.32749 2.07622 2.21274 2.26025 2.04475C2.44428 1.87677 2.56937 1.66308 2.61974 1.43064C2.67011 1.19821 2.6435 0.957443 2.54328 0.738716C2.44305 0.51999 2.27369 0.333104 2.05657 0.201635Z" fill="white"/>
                                <path d="M6.09639 3.31473H3.9018L3.8942 10H6.17233V6.69872C6.17233 5.83032 6.35458 4.98949 7.5392 4.98949C8.72383 4.98949 8.72383 5.98884 8.72383 6.76074V9.98622H11.002V6.32655C11.002 4.52773 10.5387 3.14932 8.26061 3.14932C7.82641 3.1339 7.39575 3.22577 7.01459 3.41512C6.63343 3.60448 6.31607 3.88422 6.09639 4.22448V3.31473Z" fill="white"/>
                            </svg>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                    <Box>
                        <h3 style={{color: 'white'}}>Company</h3>
                        <p className={classes.footerContent}>Dashboard</p>
                        <p className={classes.footerContent}>Strategies</p>
                        <p className={classes.footerContent}>Analyzer</p>
                        <p className={classes.footerContent}>Community</p>
                        <p className={classes.footerContent}>Terms of Service</p>
                    </Box>
                </Box>
                <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                    <Box>
                        <h3 style={{color: 'white'}}>Submit Your Feedback</h3>
                        <Box sx={{display: 'flex', alignItems: 'center'}}>
                            <TextField
                                label={'Your Name'}
                                id="margin-none"
                                sx={{borderRadius: '16px', marginRight: '14px'}}
                                InputProps={{
                                    style: { border: '1px solid #667085', borderRadius: '7px'},
                                    className: 'my-input-class',
                                }}
                                InputLabelProps={{
                                    style: { color: '#667085', fontSize: '16px', fontWeight: 400 },
                                    className: 'my-label-class',
                                }}
                            />
                            <TextField
                                label={'Your Email'}
                                id="margin-none"
                                InputProps={{
                                    style: { border: '1px solid #667085', borderRadius: '7px' },
                                    className: 'my-input-class',
                                }}
                                InputLabelProps={{
                                    style: { color: '#667085', fontSize: '16px', fontWeight: 400 },
                                    className: 'my-label-class',
                                }}
                            />
                        </Box>
                        <TextField
                            label={'Enter your message'}
                            id="margin-none"
                            sx={{marginRight: '14px', width: '100%', height: '9em'}}
                            InputProps={{
                                style: { border: '1px solid #667085', borderRadius: '7px', height: '100%', marginTop: '15px' },
                                className: 'my-input-class',
                            }}
                            InputLabelProps={{
                                style: { color: '#667085', fontSize: '16px', fontWeight: 400 },
                                className: 'my-label-class',
                            }}
                        />
                        <Button
                            sx={{
                                width: '100%',
                                marginTop: '15px',
                                borderRadius: '7px',
                                padding: '12px 32px',
                                height: '48px',
                                fontWeight: 600,
                                fontSize: '16px',
                                lineHeight: '150%',
                                color: '#FFFFFF',
                                bgcolor: '#884BD5',
                                '&:active': { bgcolor: '#884BD5' },
                                '&:hover': { bgcolor: '#884BD5' }
                            }}
                        > Submit </Button>
                    </Box>
                </Box>
            </Box>
            <Box sx={{backgroundColor: '#1A173E', padding: '40px', mt: '91px'}}>
                <p style={{fontWeight: '700', lineHeight: '15px', m: 0, p: 0, color: '#FFFFFF', opacity: '0.5'}}>Disclaimer</p>
                <p style={{fontWeight: '400', lineHeight: '18px', m: 0, p: 0, color: '#FFFFFF', opacity: '0.5'}}>You understand and acknowledge that there is a very high degree of risk involved in trading securities and, in particular, in trading futures and options, and in trading penny stocks. The service is provided “as is.” We and our affiliates and licensors make no representations or warranties of any kind, whether express, implied, statutory or otherwise regarding the service or the third-party content, including any warranty that the service or third-party content will be uninterrupted, error free or free of harmful components, or that any content, including your content or the third party content, will be secure or not otherwise lost or damaged. Except to the extent prohibited by law, we and our affiliates and licensors disclaim all warranties, including any implied warranties of merchantability, satisfactory quality, fitness for a particular purpose, non- infringement, or quiet enjoyment, and any warranties arising out of any course of dealing or usage of trade.</p>
            </Box>
            <Box sx={{fontSize: '14px', lineHeight: '48px', textAlign: 'center', color: 'white'}}>
                Copyright 2023 stratfinder.com, All rights reserved.
            </Box>
        </Box>
    )
}

export default Footer
