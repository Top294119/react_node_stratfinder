import React from 'react';
import Button from '@mui/material/Button';

const CustomBtn = (props) => {
    const [clicked, setClicked] = React.useState(false);

    const handleClick = (props) => {
        setClicked(true);
    };
    return (
        <Button
            variant="contained"
            onClick={handleClick}
            sx={{
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
        >
            {props.text}
        </Button>
    )
}

export default CustomBtn;
