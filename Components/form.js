import { Grid, makeStyles, TextField,InputBase } from '@material-ui/core'
import React from 'react'
import {pxToVw} from '../utils/theme'
import { InputLabel } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: "50vw",
            margin: theme.spacing(2),
        }
    },
    inputs: {
        display: "flex",
        alignItems:'center',
        justifyContent:"space-between",
    },
    label:{
        textAlign: "left",
        font: "normal normal normal 1.25rem/1.5rem Ubuntu",
        letterSpacing: "0.009vw",
        opacity: '1',
        color:"#97A1A9",
        width:"48vw",
    },
    textFields:
    {
        
        width:"20vw",
        "&:hover":
        {
            border:"1px solid #14AFF1"
        }
        
    }

}))


function Form(props) {


    const classes = useStyles()
    
    const handleInputChange= e=>{
        const{name,value} = e.target
        props.setValues({
            ...props.values,
            [name]:value
        })
    }


    return (
        <form className = {classes.root}
        >
            <Grid container spacing = {6}>
                    <Grid item xs = {6}>
                        <div className={classes.inputs}>
                        <InputLabel className = {classes.label} required>Customer Name:</InputLabel>
                        <TextField
                            variant="outlined"
                            name="name_customer"
                            value={props.values.name_customer}
                            onChange = {handleInputChange}
                            style={{border:"1px solid transparent"}}
                        />
                        </div> 

                        <div className={classes.inputs}>
                        <InputLabel required className = {classes.label} required>Customer No:</InputLabel>
                        <TextField
                            variant="outlined"
                            name="cust_number"
                            autoComplete="off"
                            value={props.values.cust_number}
                            onChange = {handleInputChange}
                        />  
                        </div>

                        <div className={classes.inputs}>
                        <InputLabel required className = {classes.label}>Invoice No:</InputLabel>
                        <TextField
                            variant="outlined"
                            name="invoice_id"
                            autoComplete="off"
                            value={props.values.invoice_id}
                            onChange = {handleInputChange}
                        />
                        </div>

                        <div className={classes.inputs}>
                        <InputLabel required className = {classes.label}>Invoice Amount:</InputLabel>
                        <TextField
                            variant="outlined"
                            name="total_open_amount"
                            autoComplete="off"
                            value={props.values.total_open_amount}
                            onChange = {handleInputChange}
                        />
                        </div>
                    </Grid>
                    <Grid item xs = {6}>
                        <div className={classes.inputs}>
                        <InputLabel required className = {classes.label}>Due Date:</InputLabel>   

                        <InputBase
                            type="date"
                            name="due_in_date"
                            onChange = {handleInputChange}
                            value={props.values.due_in_date}
                            style={{width:'20vw', marginBottom:"2vw",marginTop:"2vw"}}
                        />
                        </div>

                        <div className={classes.inputs}>
                        <InputLabel  className = {classes.label}>Notes:</InputLabel>

                        <InputBase
                                name="Notes"
                                type="string"
                                multiline
                                value={props.values.Notes}
                                autoComplete="off"
                                onChange = {handleInputChange}
                                rows={13}
                                inputProps={{ 'aria-label': 'naked' }}
                                style={{width:"20vw", borderRadius: pxToVw(10)}}  
                            />
                        </div>
                    </Grid>                      
            </Grid>
        </form>
    )
}

export default Form