
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { DatePicker } from 'antd';
import "./Ledger.css";
import { saveAs } from 'file-saver'; 
import SearchIcon from '@mui/icons-material/Search';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
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
  Button,
  Input,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Label } from '@mui/icons-material';
import { useAuthContext } from './AuthProvider';

// const apiUrl = 'https://dev.techstreet.in/vmsglen/public/api/ledger';
// const apiUrl='https://vendor.bizprocure.com/api/ledger'
// const apiUrl='https://b1.techstreet.in/api/ledger'
// const apiToken = '84|YfnNVUukdmkzwP8XzkGld0zn0FKG2R0AeY2ARQm3';
 const  token = sessionStorage.getItem("token"); 


const itemsPerPage = 15;

export const Ledger = () => {
  const navigate = useNavigate();
  const {apiUrl}=useAuthContext()
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  // const [error, setError] = useState('');
  const [datesSelected, setDatesSelected] = useState(false);
  const [searching, setSearching] = useState(false);


  const [totalItem,setTotalItem]=useState(0)

//   console.log(fromDate)
//   console.log(toDate)
// console.log(totalItem)

  // const fetchData = async () => {
  //   try {

  //     // if (fromDate > toDate) {
  //     //   alert('From Date cannot be greater than To Date');
  //     //   return; // Don't proceed with the API request
  //     // }
    

  //     const response = await axios.get(apiUrl, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //       params: {
  //         page: currentPage,
  //         per_page: itemsPerPage,
  //         // from:fromDate,
  //         // to:toDate
 
  //       },
  //     });
  //     // console.log(response)
  //     setTotalItem(response.data.meta.total)
  //     // console.log(totalItem)
  //     // console.log(setTotalItem)
  //     // console.log('API Request Parameters:', {
  //     //   page: currentPage,
  //     //   per_page: itemsPerPage,
  //     //   from_date: fromDate,
  //     //   to_date: toDate,
  //     // });

  //     if (!response.data) {
  //       throw new Error('No data received');
  //     }

  //     setProducts(response.data.data);
  //     setTotalPages(response.data.meta.last_page);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };
// 2

  const fetchData = async () => {
    try {
      const response = await axios.get(`${apiUrl}/ledger`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          page: currentPage,
          per_page: itemsPerPage,
          from: fromDate,
          to: toDate,
        },
      });

      setTotalItem(response.data.meta.total);
      setProducts(response.data.data);
      setTotalPages(response.data.meta.last_page);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  useEffect(() => {
    // if (!sessionStorage.getItem('token')) {
    //   navigate('/login');
    // }

    fetchData();
  }, [currentPage]);

  

// download
const downloadDataFetch = async () => {
  // ... (your existing code)
  try {
    // ... (your existing code)

    // If data is fetched successfully, set datesSelected to true
    setDatesSelected(true);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};


// 2
const handleDownload = async () => {
  // Make an API request to fetch data for download
  const downloadApi = `${apiUrl}/ledger/export?from=${fromDate}&to=${toDate}`;
  
  // try {
    const response = await axios.post(downloadApi, null, {
      // type:"POSt",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      // "Content-type":'application/json',
      // body:''
      
      responseType: 'blob', // Set the response type to 'blob'
    });

    // Log the content type
    // console.log('Content Type:', response.headers['content-type']);
    console.log(`response:${response.data}`)
    const alertMessage=JSON.stringify(response.data.message)

    const fromDateObj = new Date(fromDate);
    const toDateObj = new Date(toDate);
     const dateDiff = toDateObj - fromDateObj;
    // Check if the response contains data
    // if (response.data)
    if (dateDiff > 3 * 30 * 24 * 60 * 60 * 1000) {
      alert(JSON.parse(alertMessage));
    } else if (response.data)
     {
      // Create a Blob from the response data
      const blob = new Blob([response.data], {
        type: 'application/pdf',
        endings: 'transparent', // Specify PDF version
      });

      // Check the size of the Blob (in bytes)
      const blobSize = blob.size;
      console.log(blobSize )
      // Set a threshold for the maximum allowed file size (adjust as needed)
      const maxAllowedSize = 10 * 1024 * 1024; // 10 MB

      // Check if the Blob size exceeds the maximum allowed size
      if (blobSize <= maxAllowedSize) {
        // Trigger the download using FileSaver
        saveAs(blob, 'ledger-data.pdf'); // Provide a suitable file name
      } else {
        // Display an alert if the data is too large
        alert('Data is too large to download. Please refine your search.');
      }
    } else {
      // Handle the case where the response is empty or doesn't contain data
      alert('No data to download.');
    }
  
  // catch (error) {
  //   console.error('Error fetching data for download:', error);
  //   alert('Error downloading data. Please try again.');
  // }
};


// const handleDownload = async () => {
//   // Make an API request to fetch data for download
//   try {
//     const response = await axios.post(`https://dev.techstreet.in/vmsglen/public/api/ledger?from=${fromDate}&to=${toDate}`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//       params: {
//         from: fromDate,
//         to: toDate,
//       },
//       responseType: 'blob', // Set the response type to 'blob'
//     });

//     // Log the content type
//     console.log('Content Type:', response.headers['content-type']);

//     // Check if the response contains data
//     if (response.data) {
//       // Create a Blob from the response data
//       const blob = new Blob([response.data], {
//         type: 'application/pdf',
//         endings: 'transparent', // Specify PDF version
//       });

//       // Log the Blob size
//       console.log('Blob Size (bytes):', blob.size);

//       // Trigger the download using FileSaver
//       saveAs(blob, 'ledger-data.pdf'); // Provide a suitable file name
//     } else {
//       // Handle the case where the response is empty or doesn't contain data
//       alert('No data to download.');
//     }
//   } catch (error) {
//     console.error('Error fetching data for download:', error);
//     alert('Error downloading data. Please try again.');
//   }
// };

const handleSearch = () => {
  if (!fromDate || !toDate) {
    alert('Please select both From Date and To Date');
  } else if (fromDate > toDate) {
    alert('From Date cannot be greater than To Date');
  } else {
    setCurrentPage(1);
    fetchData();
    downloadDataFetch();
  }
};




  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  
    // dataFetch(newPage)
  };


  return (
    <Container>
      <div 
      style={{
        display:'flex',
        justifyContent:'space-between'
      }}
      >
      <Typography variant="h4" gutterBottom>
        Ledger
      </Typography>
      <Typography variant="h4" gutterBottom>
      Total Data: {totalItem}
      </Typography>
      </div>

<div 
style={{
  display:'flex',
  width:'85%',
  justifyContent:'space-around'
  
}}
id='datediv'
>
<Typography variant="h6" gutterBottom 
 id="datelabel"
 style={{
  marginTop:'2.0rem'
 }}
>
From Date :
      </Typography>
<TextField
  type="date"
  value={fromDate}
  onChange={(e) => setFromDate(e.target.value)}
  margin="normal"
  id="datetext1"
  // style={{
  //   width: '300%',
  // }}
/>

{/* <label htmlFor="datetext2">To Date</label> */}
<Typography variant="h6" gutterBottom 
 id="datelabel"
 style={{
  marginTop:'2.0rem'
 }}
 
>
To Date :
      </Typography>

<TextField
  type="date"
  value={toDate}
  onChange={(e) => setToDate(e.target.value)}
  margin="normal"
  id="datetext2"
/>
<Button 
// onClick={() => {
//   if (!fromDate || !toDate) {
//     alert('Please select both From Date and To Date');
//   } else if (fromDate > toDate) {
//     alert('From Date cannot be greater than To Date');
//   } else {
//     dataFetch(currentPage)

//     downloadDataFetch()
//   }
// }}
onClick={handleSearch}
style={{
  width: '50px',
  height: '50px',
  marginLeft: '20px',
  marginTop: '20px',
}}
>
  Search
</Button>
{/* download */}
{datesSelected && (
  <button
  type='button'
    onClick={() => {
      // Handle the download functionality here
     handleDownload(`/ledger?from=${fromDate}&to=${toDate}`)
    }}
    style={{
      width: '60px',
      height: '50px',
      marginLeft: '20px',
      marginTop: '20px',
    }}
  >
    {/* Download */}
    <CloudDownloadIcon/>
  </button>
)}
{/* clear */}
<Button onClick={()=>{
   fetchData()
  setFromDate('')
  setToDate('')
  setDatesSelected(false)
 
}}
style={{
  width:'50px',
  height:'50px',
  marginLeft:'20px',
  marginTop:'20px'
}}
>Clear</Button>

  </div>
  {/* <Button variant="contained" color="primary" onClick={fetchData}>
    Search
  </Button> */}


      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>S No.</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Items</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>₹ Amount(Cores)</TableCell>
              <TableCell> ₹ Amount(Dr.)</TableCell>
              <TableCell>₹ Balance</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      {(currentPage - 1) * itemsPerPage + index + 1}
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      style={{
                        width: '150px',
                      }}
                    >
                      {item.date}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {item.particulars}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {item.type}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {item.cr}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {item.dr}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {item.balance.toFixed(2)}
                    </TableCell>
                  </TableRow>
                </React.Fragment>
              );
            })}
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



