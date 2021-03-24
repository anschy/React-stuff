import  React from 'react';
// import { DataGrid } from '@material-ui/data-grid';
import axios from 'axios' ;
import { makeStyles,withStyles ,Theme, createStyles } from '@material-ui/core/styles';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
// import Paper from "@material-ui/core/Paper";
import InfiniteScroll from "react-infinite-scroll-component";
import { CircularProgress,Checkbox } from "@material-ui/core";
import {formatter} from '../utils/formatter'
import { BorderColor } from '@material-ui/icons';

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: "#273D49CC",
      color: "#97A1A9"
    },
    body: {
      fontSize: '0.8rem',//14px
      color: theme.palette.common.white
    },
    colorText:
    {
        color:"white"
    }
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      "&:nth-of-type(odd)": {
        background: "#283A46"
      },
    }
  }))(TableRow);

  const useStyles = makeStyles({
    table: {
      minWidth:"45vw",// 700
      "& .MuiTableCell-root":
      {
        borderBottom: "none"
      },
      background:" #2d424f"
    },
    checkBoxColor:{},
    "& .MuiCheckbox-colorPrimary":
    {
        color:"#14AFF1"
    }
    // overFlow:"scroll"
  });


export default function DataTable(props) {
    const classes = useStyles();
    
    const [retvdatas,setRetvdata] = React.useState([])
    const [render, setrender ] = React.useState(true)
    // const [isLoading, setLoading] = React.useState(true);
    // const [selected, setSelected] = React.useState([]);
    let [isNext, setIsNext] = React.useState(false);
    let [pageNumber, setPageNumber] = React.useState(1);
    let length = 10
  

    const handleSelectAllClick = (event) => {
      if (event.target.checked) {
        const newSelecteds = props.datas.map((n) => n.doc_id);
        
        props.setSelected(newSelecteds);
        return;
      }
      props.setSelected([]);
    };
  
    const handleClick = (event, name) => {
      const selectedIndex = props.selected.indexOf(name);
      let newSelected = [];
  
      if (selectedIndex === -1) {
        newSelected = newSelected.concat(props.selected, name);
      } else if (selectedIndex === 0) {
        newSelected = newSelected.concat(props.selected.slice(1));
      } else if (selectedIndex === props.selected.length - 1) {
        newSelected = newSelected.concat(props.selected.slice(0, -1));
      } else if (selectedIndex > 0) {
        newSelected = newSelected.concat(
          props.selected.slice(0, selectedIndex),
          props.selected.slice(selectedIndex + 1),
        );
      }
  
      props.setSelected(newSelected);
      // console.log(newSelected)
    };

    const isSelected = (doc_id) => {
      // console.log(selected)

      return(
      props.selected.indexOf(doc_id) !== -1
      )
    }
    
    const getLatestJSPost = () => 
    {
        // try {
        const API_URL =
        `http://localhost:8080/Summer_Internship_Backend/ServletFromJson?length=${length}&start=${pageNumber}`;
        axios.get(API_URL)
        .then((response) => {
          
          setRetvdata([...retvdatas, ...response.data]);
          search(props.filterText);
                console.log(props.datas);
        })
        .catch((error) => {
          console.log(error);
        });
        
    }

    function fetchMoreData() {
      setPageNumber(pageNumber + 1);
      getLatestJSPost();
      // console.log(pageNumber +1)
      
    }

    React.useEffect(() => {
      setIsNext(true);
      fetchMoreData();
    },[]);

    let search = (filterText) => {
      let row = [];
      // console.log(retvdatas);
      if (filterText === "") {
        retvdatas.forEach((product) => {
          row.push(
            product
          );
        });
        console.log("NO filter");
        // console.log(row);
        props.setData(row);
        return;
      }
      retvdatas.forEach((product) => {
        // console.log(typeof(product.name_customer));
        if (product.invoice_id.toString().indexOf(filterText) === -1) {
          return;
        }
        // console.log(product.name_customer.indexOf(filterText));
        row.push(
          product
        );
      });
      props.setData(row);
    };

    React.useEffect(() => {
      search(props.filterText);
      // console.log(props.filterText);
    }, [props.filterText , retvdatas]);
      
return (
  <div id="scrollableDiv" style={{overflowY: `scroll`, display:`flex`, height: `70vh`, width:`96vw`, }}>
  <InfiniteScroll
        dataLength={props.datas.length}
        next={fetchMoreData}
        hasMore={isNext}
        scrollableTarget='scrollableDiv'
        loader={
            <>
            <div style={{margin:"auto",display:"flex",justifyContent:"center"}}>
            <CircularProgress color="white" />
          </div>
          <div
          // height80% paddingleft35%
          style={{ height: "50vh", overflow: "hidden" ,color:'white',margin:"auto",display:"flex",justifyContent:"center"}}
        >
          Loading
          </div>
          </>
        }
      >
        {/* {console.log(datas)} */}
<TableContainer 
          overflow-y="scroll"
         className={classes.table}> 
          
      <Table
      stickyHeader
        // aria-label="customized table"
      >
        
        <TableHead 
        onSelectAllClick={handleSelectAllClick}>
          <TableRow>

          <StyledTableCell style={{width: 0}} align="left"><Checkbox
            style={{color: "#14AFF1" , borderColor: "white"}}
          onClick={handleSelectAllClick}
           /> </StyledTableCell>  
            
            <StyledTableCell style={{width: 150}} align="center">Customer Name</StyledTableCell>
            <StyledTableCell style={{width: 100}} align="center">Customer #</StyledTableCell>
            <StyledTableCell style={{width: 100}} align="center">order_id</StyledTableCell>
            <StyledTableCell style={{width: 150}} align="center">Invoice Amount</StyledTableCell>
            <StyledTableCell style={{width: 90}} align="center">Due Date</StyledTableCell>
            <StyledTableCell style={{width: 250}} align="center">Predicted Payment Date</StyledTableCell>
            <StyledTableCell style={{width: 240}} align="center">Predicted Aging Bucket</StyledTableCell>
            <StyledTableCell style={{width: 140}} align="center">Notes</StyledTableCell>
          </TableRow>
        </TableHead>
         
        <TableBody>
          { props.datas.map((item,index)=>{
            const formatted = formatter(item.total_open_amount)
            const isItemSelected = isSelected(item.doc_id);
            const labelId = `enhanced-table-checkbox-${index}`;
            return(
         <StyledTableRow key={item.doc_id} className={classes.colorText} 
         onClick={(event) => handleClick(event, item.doc_id)}
         selected={isItemSelected}
         >

          <StyledTableCell align="left">
            <Checkbox checked={isItemSelected}
            inputProps={{ 'aria-labelledby': labelId }}
            style={{color:"#14AFF1", borderColor:"white"}}
                      
             />
          </StyledTableCell>
           
          <StyledTableCell align="center">
            {item.name_customer}
          </StyledTableCell>

          <StyledTableCell align="center">
           { item.cust_number != null ? item.cust_number : "NULL"}
          </StyledTableCell>

          <StyledTableCell id={labelId} align="center">
            {item.invoice_id}
          </StyledTableCell>
          
          <StyledTableCell align="center">
            {/* <formatter num={item.total_open_amount} /> */}
            {formatted}
          </StyledTableCell>

          <StyledTableCell align="center">
            {item.due_in_date}
          </StyledTableCell>

          <StyledTableCell align="center">
            <p>---</p>
          </StyledTableCell>

          <StyledTableCell align="center">
          <p>---</p>
          </StyledTableCell>

          <StyledTableCell align="center">
          <p>Lorem Ipsum dolor...</p>
          </StyledTableCell>
          
        </StyledTableRow> 
            )
})}
      
        </TableBody>
      </Table>
  
</TableContainer>
</InfiniteScroll>
</div>
    )
    
}

