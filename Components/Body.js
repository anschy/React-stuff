import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Actions from './Actions'


function Body() {

    const useStyles = makeStyles((theme) => ({
        invoicelist:
        {
            padding : "1.5vh 1.6vw 1.0vh",
            textAlign : 'left',
            letterSpacing : '0vw',//0px
            fontSize : '3vh',
            fontFamily : 'Ubuntu',
            color : '#FFFFFF',
            opacity : '1',
        },
    }));
    
    const classes = useStyles();

    return (
        <div className = {classes.invoicelist} >
            Invoice List
            <Actions />
        </div>
    )
}

export default Body
