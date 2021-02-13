import React from 'react';
import { Button } from '@material-ui/core';
import theme from './Theme';

function AppButton(btnText){

    return (
        <div style={{marginBottom: "5px"}} >
            
            <Button variant="contained" style={{background: theme.palette.secondary.mainGradient}}>
                {btnText['btnText']}
            </Button>
        </div>
    
    )
}

export default AppButton;