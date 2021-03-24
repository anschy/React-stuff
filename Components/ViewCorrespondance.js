// done responsive if not check...
import React from "react";
import { withStyles,makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import RemoveIcon from '@material-ui/icons/Remove' ;
import Grid from "@material-ui/core/Grid";
import { Toolbar } from "@material-ui/core";
import jsPDF from "jspdf";

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
    padding: theme.spacing(1),
    backgroundColor: '#2A3F4D'
  },

}))(MuiDialogActions);


export default function CustomizedDialogs(props) 
{


  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleDownload = () => {
    var doc = new jsPDF();
    let name  = props.datas.name_cust ; 
    doc.setFontSize(15);
    const string = "Subject: Invoice Details " +  "\n\nDear Sir/Madam,\nGreetings!\nThis is to remind you that there are one or more open invoices\n on your account. Please provide at your earliest convenience\n an update on the payment details or clarify the reason for the delay. If you have\n any specific issue with the invoice(s), please\n let us know so that we can address it to the correct Department.\n\nPlease find the details of the invoices below:\nIn case you have already made a payment for the above items,\n please send us the details to ensure the payment is posted.\n Let us know if we can be of any further assistance.\n Looking forward to hearing from you.\n\nKind Regards,\nAnshul Chaudhary \nPhone : 6397880383 Fax: +461224 \nEmail : 1828053@kiit.ac.in \nCompany Name:HighRadius Receivables,Payments.";
    doc.text(string, 10, 10);
    doc.save("pdf");
};

  const useStyles= makeStyles((theme)=>({
      buttonCancelColor:{
            color:"white",
            backgroundColor:"transparent",
            border: "1px solid #14AFF1"
      },
      buttonSaveColor:{
            color:"white",
            backgroundColor:"#14AFF1"
      },
      changeDialog: {
         maxWidth : '100%', 
        maxHeight : '80%',
        display:'flex',
        justifyContent:"center",
        margin: 'auto'
      },
      spanEdit:{
          color:"#FF5E5E"
      }
      ,
      ViewCorrespondance:
        {
            variant: props.selected.length===0 ? 'outlined': 'none',
            disableRipple: 'true',
            marginLeft: '1.05vw',
            height: '4.7vh',
            width: '12.4vw',
            paddingLeft: '1px',
            fontSize: '1.056vw',
            fontFamily: 'Ubuntu',
            color: props.selected.length===0 ? '#97A1A9': "white",
            borderRadius: '0.5rem',
            border: props.selected.length===0 ? '0.04rem solid #97A1A9': '0.04rem solid #14AFF1',
            letterSpacing: '0px',
            textTransform: 'none',
        },
        
        
    
  }))

  const classes = useStyles();
  return (
    <div>
        {/* outer button */}
      <Button className={classes.ViewCorrespondance} style={{color:props.selected.length===0 ? '#97A1A9': "white"}} onClick={handleClickOpen}
      disabled={props.selected.length=== 0}
      >
      View Correspondence
      </Button>

      {/* dialog box body starts here */}

      <Dialog
      maxWidth="md"
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        className={classes.changeDialog}
      >

        {/* Dialog box title starts here   */}
        <DialogTitle id="customized-dialog-title" onClose={handleClose} >
        <span style={{paddingLeft: '4px'}}>
        View Correspondence ({`${props.selected.length}`})
        </span>
        </DialogTitle>

        {/* Dialog box content starts here */}

        <DialogContent dividers>
          <Typography gutterBottom>
            Subject: Invoice Details <br/><br/>
            Dear Sir/Madam,<br/> 
            Greetings!<br/><br/>
            This is to remind you that there are one or more open invoices on your account. Please provide at your earliest convenience an update on the payment details or clarify the reason for the delay. If you have any specific issue with the invoice(s), please let us know so that we can address it to the correct Department.<br/><br/>
            Please find the details of the invoices below:<br/><br/>
            In case you have already made a payment for the above items, please send us the details to ensure the payment is posted. Let us know if we can be of any further assistance. Looking forward to hearing from you.<br/><br/> 
            Kind Regards,<br/> 
            Anshul Chaudhary <br/>
            Phone : 6397880383 Fax: +424134 <br/> 
            Email : 1828053@kiit.ac.in <br/>
            Company Name: <i>HighRadius Receivables,Payments.</i>
          </Typography>
        </DialogContent>

        {/* Dialog box action buttons starts here */}

        <DialogActions>
          <div>
            <Grid container spacing={2}>
              <Grid item>
                <Button autoFocus onClick={handleClose} color="primary" className={classes.buttonCancelColor}>
                  Cancel
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" color="primary" className={classes.buttonSaveColor} onClick = {handleDownload}> 
                  Download
                </Button>
              </Grid>
            </Grid>

            {/* main grid ending */}

          </div>
        </DialogActions>


      </Dialog>

    </div>
  );
}