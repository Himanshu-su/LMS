
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Pagination,
  Typography,
  TablePagination
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
// import { useAuthContext } from './AuthProvider';
// import { useTokenContext } from 'src/pages/TokenProvider';
// import Typography from 'src/theme/overrides/Typography';

const apiUrl = 'https://b1.techstreet.in/api/vendor/products';
// const apiUrl = 'https://dev.techstreet.in/vmsglen/public/api/vendor/products';
// const apiToken = '111|RkgcCuhjCl68Ebr0b0QTnh3OO9VarqHaUZPWEnj9';
const itemsPerPage = 10;
 const  token = sessionStorage.getItem("token") 



export default function ProductList() {

  const navigate=useNavigate()
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
// const {token}=useTokenContext()
// const {token}=useAuthContext()

// console.log(`token:${token}`)

  
  


  useEffect(() => {

if(!sessionStorage.getItem('token')){
  navigate('/login')
  
}

    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            page: currentPage,
            search: searchTerm,
          },
        });

        if (!response.data) {
          throw new Error('No data received');
        }
        console.log(response)
        setProducts(response.data.data);
      //  const serialNo=response.data.meta.total
     
        setTotalPages(response.data.last_page);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [currentPage, searchTerm])

  // useEffect(()=>{
  //   if(!sessionStorage.getItem("token")){
  //     navigate("/login")
  //     // setAuth(true)
  //   }

  const handlePageChange = (event, newPage) => {
    // console.log(newPage)
    setCurrentPage(newPage);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reset to the first page when searching
  };

  // const handleSearchChange = (event) => {
  //   const newSearchTerm = event.target.value;
  
  //   if (newSearchTerm.length >= 3) {
  //     setSearchTerm(newSearchTerm);
  //     setCurrentPage(1); // Reset to the first page when searching
  //   } else {
  //     // Optionally, you can show a message or provide feedback to the user here
  //   }
  // };
  
 

  return (

    <Container>
     <Typography variant="h4" gutterBottom>
            Product
          </Typography>
      <TextField
        label="Search"
        variant="outlined"
        value={searchTerm}
        onChange={handleSearchChange}
        halfWidth
        margin="normal"
        align="right"
      />
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell>S No.</TableCell>
            <TableCell>Effective Date</TableCell>
            <TableCell >Location</TableCell>
            <TableCell >Pid</TableCell>
            <TableCell >Product Code</TableCell>
            <TableCell > Product</TableCell>
            <TableCell >Subsidiary</TableCell>
            <TableCell >Unit Price</TableCell>
            <TableCell > Unit Type</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        
        {products.map((item,index)=>{
                return ( 
              <>
              <TableRow>
              <TableCell component="th" scope="row">        
{index+1}  
 </TableCell>
         
              <TableCell component="th" scope="row">        
{item.effective_date}  
 </TableCell>
 <TableCell component="th" scope="row">
                  {item.location}
                     </TableCell>
                     <TableCell component="th" scope="row">
                  {item.pid}
                     </TableCell>
                     <TableCell component="th" scope="row">
                  {item.product_code}
                     </TableCell>
                     <TableCell component="th" scope="row">
                  {item.product_name}
                     </TableCell>
                     <TableCell component="th" scope="row">
                  {item.subsidiary}
                     </TableCell>
                     <TableCell component="th" scope="row">
                  {item.unit_price
}
                     </TableCell>
                     <TableCell component="th" scope="row">
                  {item.unit_type}
                     </TableCell>
             
     
       
                </TableRow>
               </> 
                
              )
                  })}
         
        </TableBody>
        </Table>
        </TableContainer>
        {/* pagination */}
        <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          marginTop: '20px',
        }}
      > 
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          color="secondary"
        />
     </div> 

        {/* <TablePagination
  component="div"
  count={totalPages}
  page={currentPage}
  onPageChange={handlePageChange}
  // rowsPerPage={rowsPerPage}
  // onRowsPerPageChange={handleChangeRowsPerPage}
/> */}
    </Container>
   
  )
}


