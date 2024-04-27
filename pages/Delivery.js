// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import {
// //   Container,
// //   Paper,
// //   Table,
// //   TableBody,
// //   TableCell,
// //   TableContainer,
// //   TableHead,
// //   TableRow,
// //   TextField,
// //   Pagination,
// //   Typography,
// //   TablePagination
// // } from '@mui/material';
// // import { useNavigate } from 'react-router-dom';

// // const apiUrl = 'https://dev.techstreet.in/vmsglen/public/api/delivery?page=1';
// // // const apiToken = '111|RkgcCuhjCl68Ebr0b0QTnh3OO9VarqHaUZPWEnj9';
// // const itemsPerPage = 10;
// //  const  token = sessionStorage.getItem("token") 


// // export const Delivery = () => {

// //   const navigate=useNavigate()
// //   const [products, setProducts] = useState([]);

// //   const [currentPage, setCurrentPage] = useState(1);
// //   const [totalPages, setTotalPages] = useState(1);
// //   const [searchTerm, setSearchTerm] = useState('');
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// // // console.log(token)
// //   useEffect(() => {

// //     if(!sessionStorage.getItem('token')){
// //       navigate('/login')
      
// //     }
    
// //   //       const fetchData = async () => {
// //   //         try {
// //   //           // Define the data you want to send in the request body, if any.
// //   //           const requestData = {
// //   //             page: 1, // Include any other parameters you need to send.
// //   //           };
        
// //   //           // Set the headers, including the Authorization header with your token.
// //   //           const headers = {
// //   //             'Content-Type': 'application/json', // Adjust the content type as needed.
// //   //             Authorization: `Bearer ${token}`,
// //   //           };
        
// //   //           // Make the POST request.
// //   //           const response = await axios.post(apiUrl, requestData, { headers });
// //   //       console.log(`response:${JSON.stringify(response.data)}`)
// //   //  setProducts(response.data.data)
// //   //  console.log(products)
// //   //           if (response.status === 200) {
// //   //             // Request was successful.
// //   //             console.log('Data:', response.data);
// //   //           } else {
// //   //             // Handle other status codes here.
// //   //             console.error('Error:', response.statusText);
// //   //           }
// //   //         } catch (error) {
// //   //           console.error('Error fetching data:', error);
// //   //         }
// //   //       };
        
// //   //       fetchData();
// //   //     }, [])

// //   const fetchData = async () => {
// //     try {
// //       const requestData = {
// //         page: 1,
// //       };
// //       console.log('Token:', token);
// //       const headers = {
// //         'Content-Type': 'application/json',
// //         Authorization: `Bearer ${token}`,
// //       };

// //       const response = await axios.post(apiUrl, requestData, { headers });

// //       if (response.status === 200) {
  
// //         setProducts(response.data.data);
// //         setTotalPages(response.data.last_page);
// //       } else {
// //         setError(response.data.message || 'Error fetching data');
// //       }
// //     }
// //      catch (error) {
// //       setError('Error fetching data');
// //     }
// //      finally {
// //       setLoading(false);
// //     }
// //   };

// //   fetchData();
// // }, [navigate]);
    
// //       const handlePageChange = (event, newPage) => {
// //         // console.log(newPage)
// //         setCurrentPage(newPage);
// //       };
    
// //       const handleSearchChange = (event) => {
// //         setSearchTerm(event.target.value);
// //         setCurrentPage(1); // Reset to the first page when searching
// //       };


// //   return (
// //     <Container>
// //     <Typography variant="h4" gutterBottom>
// //        DRN
// //          </Typography>
// //     <TextField
// //        label="Search"
// //        variant="outlined"
// //        value={searchTerm}
// //        onChange={handleSearchChange}
// //        halfWidth
// //        margin="normal"
// //        align="right"
// //      /> 
// //      <TableContainer component={Paper}>
// //      <Table sx={{ minWidth: 650 }} aria-label="simple table">
// //        <TableHead>
// //          <TableRow>
// //          <TableCell>S No.</TableCell>
// //            <TableCell>DRN No.</TableCell>
// //            <TableCell >PO ID</TableCell>
// //            <TableCell >Company Name </TableCell>
// //            <TableCell >Total Products</TableCell>
// //            <TableCell >Created At</TableCell>
// //            <TableCell >Created By</TableCell>
// //            {/* <TableCell ></TableCell>
// //            <TableCell > </TableCell> */}
// //          </TableRow>
// //        </TableHead>
// //        <TableBody> 
       
// //     {products.map((item,index)=>{
// //                return ( 
// //              <>
// //              <TableRow>
// //              <TableCell component="th" scope="row">        
// // {index+1}  
// // </TableCell>
        
// //              <TableCell component="th" scope="row">        
// //              {/* {item.} */}
// //              q
// // </TableCell>
// // <TableCell component="th" scope="row">
// //              x
// //                     </TableCell>
// //                     <TableCell component="th" scope="row">
// //           d          {/* {item.} */}
// //                     </TableCell>
// //                     <TableCell component="th" scope="row">
// //                     {/* {item.} */}r
// //                     </TableCell>
// //                     <TableCell component="th" scope="row">
// //                  {/* {item.} */}f
// //                     </TableCell>
// //                     <TableCell component="th" scope="row">
// //                  {/* {item.} */}v
// //                     </TableCell>
// //                     <TableCell component="th" scope="row">
// //                  {/* {item.} */}g
// //                     </TableCell>
// //                     <TableCell component="th" scope="row">
// //                  {/* {item.} */}b
// //                     </TableCell>
            
    
      
// //                </TableRow>
// //               </> 
               
// //              )
// //                  })} 
        
// //         </TableBody> 
// //        </Table>
// //        </TableContainer>
// //        {/* pagination */}
// //        <div
// //        style={{
// //          display: 'flex',
// //          justifyContent: 'flex-end',
// //          marginTop: '20px',
// //        }}
// //      > 
// //        <Pagination
// //          count={totalPages}
// //          page={currentPage}
// //          onChange={handlePageChange}
// //          color="secondary"
// //        />
// //     </div> 

// //        {/* <TablePagination
// //  component="div"
// //  count={totalPages}
// //  page={currentPage}
// //  onPageChange={handlePageChange}
// //  // rowsPerPage={rowsPerPage}
// //  // onRowsPerPageChange={handleChangeRowsPerPage}
// // /> */}
// //    </Container>
// //   )
// // }


// // new 
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import {
//   Container,
//   Paper,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   TextField,
//   Pagination,
//   Typography
// } from '@mui/material';
// import { useNavigate } from 'react-router-dom';

// const apiUrl = 'https://dev.techstreet.in/vmsglen/public/api/delivery?page=1';
// const itemsPerPage = 10;
// const token = sessionStorage.getItem("token");

// export const Delivery = () => {
//   const navigate = useNavigate();
//   const [products, setProducts] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (!token) {
//       navigate('/login');
//     } else {
//       const fetchData = async () => {
//         try {
//           const requestData = {
//             page: currentPage, // Use the currentPage state to request different pages.
//           };

//           const headers = {
//             'Content-Type': 'application/json',
//             Authorization: `Bearer ${token}`,
//           };

//           const response = await axios.get(apiUrl, {
   
//              headers:{ 'Content-Type': 'application/json',
//               Authorization: `Bearer ${token}`,
//           },
//             // params: requestData,
           
//           });
// console.log(response.status)
//           if (response.status === 200) {
//           console.log(`response:${JSON.stringify(response.data).data}`)  
//             // setProducts(response.data.data);
//             // setTotalPages(response.data.last_page);
//           } else {
//             setError(response.data.message || 'Error fetching data');
//           }
//         } catch (error) {
//           setError('Error fetching data');
//         } finally {
//           setLoading(false);
//         }
//       };

//       fetchData();
//     }
//   }, [token, currentPage, navigate]);

//   const handlePageChange = (event, newPage) => {
//     setCurrentPage(newPage);
//   };

//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//     setCurrentPage(1); // Reset to the first page when searching
//   };

//   return (
//     <Container>
//       <Typography variant="h4" gutterBottom>
//         DRN
//       </Typography>
//       <TextField
//         label="Search"
//         variant="outlined"
//         value={searchTerm}
//         onChange={handleSearchChange}
//         halfWidth
//         margin="normal"
//         align="right"
//       />
//       <TableContainer component={Paper}>
//         <Table sx={{ minWidth: 650 }} aria-label="simple table">
//           <TableHead>
//             <TableRow>
//               <TableCell>S No.</TableCell>
//               <TableCell>DRN No.</TableCell>
//               <TableCell>PO ID</TableCell>
//               <TableCell>Company Name</TableCell>
//               <TableCell>Total Products</TableCell>
//               <TableCell>Created At</TableCell>
//               <TableCell>Created By</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {products.map((item, index) => (
//               <TableRow key={item.id}>
//                 <TableCell component="th" scope="row">
//                   {index + 1}
//                 </TableCell>
//                 <TableCell>{item.drn_id}</TableCell>
//                 <TableCell>{item.purchase_order_id}</TableCell>
//                 <TableCell>{item.vendor}</TableCell>
//                 <TableCell>{item.total_products}</TableCell>
//                 <TableCell>{item.created_at}</TableCell>
//                 <TableCell>{item.added_by}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <div
//         style={{
//           display: 'flex',
//           justifyContent: 'flex-end',
//           marginTop: '20px',
//         }}
//       >
//         <Pagination
//           count={totalPages}
//           page={currentPage}
//           onChange={handlePageChange}
//           color="secondary"
//         />
//       </div>
//     </Container>
//   );
// };

// 2nd new 
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
  Typography
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const apiUrl = 'https://dev.techstreet.in/vmsglen/public/api/delivery?page=1';
const itemsPerPage = 10;
const token = sessionStorage.getItem('token');

export const Delivery = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);



  useEffect(() => {
    if (!token) {
      navigate('/login');
    } else {
      const fetchData = async () => {
        try {
          const requestData = {
            page: currentPage,
          };

          const headers = {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          };

          const response = await axios.post(apiUrl, requestData, { headers });
console.log(response)
            // Assuming your API response has a 'data' property containing the array of products
            setProducts(response.data.data);
            // console.log(products)
            setTotalPages(response.data.last_page);
  
        
        } catch (error) {
          setError('Error fetching data');
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }
  }, [token, currentPage, navigate]);

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        DRN
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
              <TableCell>DRN No.</TableCell>
              <TableCell>PO ID</TableCell>
              <TableCell>Company Name</TableCell>
              <TableCell>Total Products</TableCell>
              <TableCell>Created At</TableCell>
              <TableCell>Created By</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((item, index) => (
              <TableRow key={item.id}>
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell>{item.drn_id}</TableCell>
                <TableCell>{item.purchase_order_id}</TableCell>
                <TableCell>{item.vendor}</TableCell>
                <TableCell>{item.total_products}</TableCell>
                <TableCell>{item.created_at}</TableCell>
                <TableCell>{item.added_by}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
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
    </Container>
  );
};
