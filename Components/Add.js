import { Button, Dialog, DialogActions, DialogContent, DialogTitle, makeStyles, Grid } from '@material-ui/core'
import React from 'react'
import CloseIcon from '@material-ui/icons/Close';
import axios from 'axios';

const useStyles = makeStyles({
    dialogBox:{
        // minWidth:"69.125rem",
        // minHeight:"31.813rem",
        maxHeight:"100%",
        maxWidth:'100%',
        width:"70vw",
        backgroundColor:"#2A3E4C",
        borderRadius:"0.375rem",
        
    },
    dialogTitle:{
        margin:"1.875rem",
        padding:"0px",
        color: "#FFFFFF"
    },
    divForFieldOutlineEdit:
    {
        "& .MuiInputBase-input":
        {
            backgroundColor: '#283A46',
            border: '1px solid #356680',
            borderRadius:'10px',
            outline:"none",
            outlineColor: "#14AFF1",
            width:"30vw",
            color:"white"
        }
        
    },
    clearButtonEdit:
    {
        "& .MuiButton-outlined":
        {
            border: '1px solid #14AFF1',
            color:"white"
        }
    },
    addButtonEdit:
    {
        "& .MuiButton-root":
        {
            backgroundColor:'#97A1A9',
            color:'#FFFFFF'
        }
    },
    crossWhite:
    {
        "& .MuiSvgIcon-root":
        {
            color:"red"
        }
    }

})


function Add(props) {

    const classes = useStyles()
    const defaultValues = {
        name_customer:"",
        cust_number:"",
        invoice_id:"",
        total_open_amount:"",
        due_in_date:new Date(),
        Notes:""
    }

    const{title,children, addPopup,setAddPopup} = props

    const handleAddButton = async ()=>
    {   
        console.log("checking")
        console.log(props.values)
      const data = await axios.post("http://localhost:8080/Summer_Internship_Backend/addInvoice",props.values)
        
        props.setValues(defaultValues)
        setAddPopup(false)
    }

    return (
        <div>
            <Dialog open={addPopup} classes = {{paper: classes.dialogBox }}
            maxWidth="sm">
                <DialogTitle className = {classes.dialogTitle}>
                    <div style={{display:"flex"}}>
                        <div style={{flexGrow:1}}>
                            {title}
                        </div>
                        <Button onClick={()=>{setAddPopup(false)}}>
                            <CloseIcon/>
                        </Button>
                    </div>
                </DialogTitle>
                
                <DialogContent dividers>
                    <div className={classes.divForFieldOutlineEdit}>{children}</div>
                </DialogContent>
                
                <DialogActions style={{padding:"1.875rem"}}>
                    <Grid justify="space-between" container spacing={0}>
                        <Grid item>
                            <Button onClick={()=>{setAddPopup(false)}} style={{color:"#14AFF1"}} >
                                Cancel
                            </Button>
                        </Grid>

                        <Grid item justify="space-between">
                            <div>
                            <span className={classes.clearButtonEdit}>
                                <Button variant="outlined" >
                                    Clear
                                </Button>
                            </span>
                            <span className={classes.addButtonEdit}>
                                <Button variant="contained" style={{marginLeft:"1.25rem"}} onClick={handleAddButton}>
                                    Add
                                </Button>
                            </span>    
                            </div>
                        </Grid>
                    </Grid>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default Add