import React from "react";
import { withStyles,makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import InputBase from '@material-ui/core/InputBase';
import classNames from 'classnames';



// import ButtonGroup from "@material-ui/core/ButtonGroup";
import Grid from "@material-ui/core/Grid";
import { Toolbar } from "@material-ui/core";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    backgroundColor:"#2A3F4D",
    color:'white'
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    backgroundColor: '#2A3F4D',
    color: "white"
  }
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({

  root: {
    margin: 0,
    // padding: theme.spacing(1),
    backgroundColor: '#2A3F4D'
  },

}))(MuiDialogActions);

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const useStyles= makeStyles((theme)=>({
    //   resetAndSaveButtonAlignRight:
    //   {
    //     margin: '2px'
    //   },
      buttonResetColor:{
            color:"white",
            backgroundColor:"transparent",
            border: "1px solid #14AFF1",
            marginRight: '0.9rem'
            // justify: 'flex-end'
      },
      buttonSaveColor:{
            color:"white",
            backgroundColor:"#14AFF1"
            // justify: 'flex-end'
      },
      buttonCancelColor:{
        color:"#14AFF1",
        // justify: 'flex-start'
      },
      changeDialog: {
        maxWidth : '600vw', 
        maxHeight : '600vh',
        display:'flex',
        justifyContent:"center",
        margin: 'auto'
      },
      spanEdit:{
          color:"#FF5E5E"
      },
      toolbarSpace:{
          marginLeft: '1.5rem'
      },
      textField:
      {
          backgroundColor: '#283A46',
          borderRadius: "0.5rem",
          outline:"none",
          outlineColor: "#14AFF1",
          border: '1px solid #356680',
          "&:hover": {
            //you want this to be the same as the backgroundColor above
            border: "1px solid #14AFF1"
        },
        color:"white",
        padding: "0.5rem",
        width: '25vw',
        maxWidth:'600vw'
      },
      noteBox:
      {
                backgroundColor: '#283A46',
                borderRadius: "0.5rem",
                outline:"none",
                outlineColor: "#14AFF1",
                border: '1px solid #356680',
                "&:hover": {
                //you want this to be the same as the backgroundColor above
                border: "1px solid #14AFF1"
            },
            color:"white",
            padding: "0.5rem",
            margin: '2rem 0 0 4.2rem',
            width: '25vw',
            maxWidth:'600vw'
      },
      notes:
      {
        margin: '2rem 0 0 0'
      },
      textColor:
      {
          color:'#97A1A9'
      }
      
  }))
  const classes = useStyles();
  return (
    <div>
        {/* outer button */}
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Edit Invoice
      </Button>

      {/* dialog box body starts here */}

      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        className={classes.changeDialog}
      >

        {/* Dialog box title starts here   */}
        <DialogTitle id="customized-dialog-title" onClose={handleClose} >
        Edit Invoice
        </DialogTitle>

        {/* Dialog box content starts here */}
<DialogContent dividers>

            {/* add form body here */}

            <form >

                <Grid container
                    alignItems='center'
                >
                    
                    <Grid item>

                        <Typography className={classes.textColor}>
                            Invoice Amount
                        </Typography>

                    </Grid>

                    <Grid item>
                        <div className={classes.toolbarSpace}>
                             <InputBase
                                className={classes.textField}
                                type="number"
                                inputProps={{ 'aria-label': 'naked' }}
                            />
                        </div>
                    </Grid>
                </Grid>

                <Grid container>
                    <Grid item className={classes.notes}>
                        <Typography className={classes.textColor}>
                            Notes
                        </Typography>

                    </Grid>

                    <Grid item>
                        <div className={classes.toolbarSpace}>
                        <InputBase
                                className={classes.noteBox}
                                type="number"
                                multiline
                                rows={5}
                                inputProps={{ 'aria-label': 'naked' }}
                            />
                        </div>
                    </Grid>
                </Grid>

            </form>

</DialogContent>

        {/* Dialog box action buttons starts here */}

        <DialogActions>
          
        <Grid container  
            direction="row"
            justify="flex-start"
            alignItems="center"
        >

            <Grid item >
                <Button autoFocus onClick={handleClose} className={classes.buttonCancelColor} >
                  Cancel
                </Button>
            </Grid>
              
        </Grid>
        
        <Grid container  
            direction="row"
            justify="flex-end"
            alignItems="center"
        >
            
            <Grid item>
                <ButtonGroup>
                <div>
                <Button autoFocus onClick={handleClose} className={classes.buttonResetColor}>
                  Reset
                </Button>
                </div>
                <div>
                <Button variant="outlined" className={classes.buttonSaveColor}>
                  Save
                </Button>
                </div>
                </ButtonGroup>
            </Grid>
        </Grid>

        {/* <Grid container 
            direction="row"
            justify="flex-end"
            alignItems="center"
        >

            <Grid item>
                <Button variant="outlined" className={classes.buttonSaveColor}>
                  Save
                </Button>
            </Grid>

        </Grid> */}

            {/* main grid ending */}

        </DialogActions>

                

      </Dialog>

    </div>
  );
}