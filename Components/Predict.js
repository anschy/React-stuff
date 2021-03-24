import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

export default function Predict(props)
{
    const useStyles = makeStyles((theme) => ({

        predict:
            {
                variant: 'contained',
                disableRipple: 'true',
                height: '4.7vh',
                width: '5.5vw',
                paddingLeft: '0.5vw',
                verticalAlign: 'middle',
                fontSize: '1.056vw',
                fontFamily: 'Ubuntu',
                color: '#FFFFFF',
                background: props.selected.length===0 ? '#97A1A9' : '#14AFF1' ,
                textTransform: 'none',
                letterSpacing: '0vw',//0px
                borderRadius: '0.5rem',
            }
    }))
    const classes = useStyles();
    
    return(
        <Button className={classes.predict}>Predict</Button>
    )
}
