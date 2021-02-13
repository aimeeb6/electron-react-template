import {React, setState} from 'react';
import AppButton from './AppButton';

let ButtonTray = () =>{
    return(
        <div style={styles}>
            <AppButton btnText={'New File'}/>
            <AppButton btnText={'Open File'}/>
            <AppButton btnText={'Save File'}/>
            <AppButton btnText={'Revert'}/>
            <AppButton btnText={'Save HTML'}/>
            <AppButton btnText={'Show File'}/>
            <AppButton btnText={'Open in Default App'}/>
        </div>
    )
}

export default ButtonTray;


const styles = {
    display: 'flex', 
    flexWrap: 'wrap', 
    justifyContent: 'space-evenly',
    margin: '1rem',
    alignItems: 'center',

}