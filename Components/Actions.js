import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import AddIcon from '@material-ui/icons/Add';
// import RemoveIcon from '@material-ui/icons/Remove' ;
import React, {Component, useState} from 'react';
import Delete from './Delete';
import DataTable from './DataTable';
import Add from './Add';
import Form from './form';
import Edit from './Edit';
import SearchBar from './SearchBar'
import ViewCorrespondance from './ViewCorrespondance'
import Predict from './Predict'


export default function Actions()
{
    
    const defaultValues = {
        name_customer:"",
        cust_number:"",
        invoice_id:"",
        total_open_amount:"",
        due_in_date:new Date(),
        Notes:""
    }
    const [filterText, setfilterText] = React.useState("");
    const [addPopup,setAddPopup] = React.useState(false);
    const [selected, setSelected] = React.useState([]);
    const [datas,setData]=React.useState([]);
    const[values,setValues]=React.useState(defaultValues)

    let debounce = (func, delay) => {
      let inDebounce;
      return function () {
        const context = this;
        const args = arguments;
        clearTimeout(inDebounce);
        inDebounce = setTimeout(() => func.apply(context, args), delay);
      };
    };

  
    function handleFilterTextChange(filterText) {
      setfilterText(filterText);
    }
  
  
    let optimizedHandleChange = React.useCallback( debounce(
          (filterText) => handleFilterTextChange(filterText),
          300
        ),
          [], 
      );

    // code ends

    const useStyles = makeStyles((theme) => ({

        grid:
        {
            backgroundColor: '#2d424f',
            marginTop:"3vh",
            paddingTop:"1.3vh",
            width: "96vw",
            height: "80vh",
            borderRadius: '0.4rem',
        },

        // predict:
        // {
        //     variant: 'contained',
        //     disableRipple: 'true',
        //     height: '4.7vh',
        //     width: '5.5vw',
        //     paddingLeft: '0.5vw',
        //     verticalAlign: 'middle',
        //     fontSize: '1.056vw',
        //     fontFamily: 'Ubuntu',
        //     color: '#FFFFFF',
        //     backgroundColor:'#97A1A9',
        //     textTransform: 'none',
        //     letterSpacing: '0vw',//0px
        //     borderRadius: '0.5rem',
        // },

        // corres:
        // {
        //     variant: 'outlined',
        //     disableRipple: 'true',
        //     marginLeft: '1vw',
        //     height: '4.7vh',
        //     width: '12.4vw',
        //     paddingLeft: '0.5vw',
        //     fontSize: '1.056vw',
        //     verticalAlign: 'middle',
        //     fontFamily: 'Ubuntu',
        //     color: '#97A1A9',
        //     borderRadius: '0.5rem',
        //     border: '0.04rem solid #97A1A9',
        //     textTransform: 'none',
        // },

        add:
        {
            variant: 'outlined',
            disableRipple: 'true',
            marginLeft: '30vw',
            height: '4.7vh',
            width:'6.7vw',
            paddingLeft: '0.2rem',//2px
            fontSize: '1.056vw',
            fontFamily: 'Ubuntu',
            color: '#FFFFFF',
            borderRadius: '0.5rem',
            border: '0.04rem solid #14AFF1',
            textTransform: 'none',
        },

        

        // delete:
        // {
        //     variant: 'outlined',
        //     disableRipple: 'true',
        //     marginLeft: '1.05vw',
        //     height: '4.7vh',
        //     width: '6.4vw',
        //     paddingLeft: '0.1rem',//1px
        //     fontSize: '1.056vw',
        //     fontFamily: 'Ubuntu',
        //     color: '#97A1A9',
        //     borderRadius: '0.5rem',
        //     border: '0.04rem solid #97A1A9',
        //     letterSpacing: '0vw',//0px
        //     textTransform: 'none',
        // },

    }));
    
   

    const classes = useStyles();
    console.log(selected)
    return (
        <Paper className={classes.grid} >
            <Toolbar>
                <Predict selected={selected}/>
                <ViewCorrespondance selected={selected} setSelected={setSelected} datas={datas} setData={setData}/>
                <Button className={classes.add} variant = "outlined" startIcon={<AddIcon style={{marginBottom: '0vh', fontSize: '1rem' }}/>} onClick={()=>setAddPopup(true)}>
                    {/* marginleft 4px */}
                <span style={{marginLeft: '0.0001rem'}}>
                            Add
                            </span>
                        </Button>
                {/* <Button className={classes.add}  ><AddIcon style={{marginBottom: '0px', fontSize: '19px' }} /><span style={{marginLeft: '4px'}}>Add</span></Button>  */}
                {/* <Button className={classes.edit} >Edit</span></Button> */}
                
                <Edit selected={selected} setSelected={setSelected}/>
                <Delete selected={selected} setSelected={setSelected} />
                <Add title="Add Invoices" addPopup={addPopup} setAddPopup={setAddPopup} values={values} setValues={setValues}>
                    <Form values={values} setValues={setValues}/>
                </Add>
                <SearchBar onFilterTextChange={optimizedHandleChange}/>
            </Toolbar>
            
            <DataTable filterText = {filterText} selected = {selected} setSelected = {setSelected} datas={datas} setData={setData} />
            {/* <Table1 /> */}
        </Paper>
    )
}

