import  React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from '@material-ui/icons/Search';
import { InputBase,Paper } from '@material-ui/core';

const useStyles=makeStyles((theme)=>
({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 250,
    backgroundColor:"#2A3F4D",
    height:'4vh',
    borderRadius: '0.5rem',
    border: '0.04rem solid #97A1A9',
    marginLeft: '10px',
  },
  
  input: {
    variant: 'outlined',
    disableRipple: 'true',
    marginLeft: '1.05vw',
    height: '4.7vh',
    width: '10vw',
    paddingLeft: '5px',
    fontSize: '1.056vw',
    fontFamily: 'Ubuntu',
    color: 'white',
    // borderRadius: '0.5rem',
    // border: '0.04rem solid #97A1A9',
    letterSpacing: '0px',
    textTransform: 'none',
    marginLeft: theme.spacing(1),
    flex: 1,
    "&:onClick":
    {
        border: "1px solid #14AFF1"
    }
  },
  iconButton: {
      color:'white',
    padding: 10,
  },
}))
export default function SearchBar(props) {

    const classes=useStyles();

    function handleFilterTextChange(e) {
      props.onFilterTextChange(e.target.value);
    }
  
    return (
      <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Search by Invoice Number"
        inputProps={{ 'aria-label': 'Search by Invoice Number' }}
        onChange={handleFilterTextChange}        
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
      
    </Paper>
    );
  }
