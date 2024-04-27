

// github updated code 
   

import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Typography, Card, Button,Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  StyledInput,
  HelperText,
  FormControl, FormHelperText,  

  TextField,
  Pagination,
Input,
  TablePagination, 
  makeStyles,
} from '@mui/material';
import Dialog from '@mui/material/Dialog';

import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
// import './po/index.css'
import VerifiedIcon from '@mui/icons-material/Verified';
import DataTable from 'react-data-table-component';
//   import { HelperText } from '@mui/material';

 import { Label } from '@mui/icons-material';
import { useAuthContext } from './AuthProvider';
import { Footer } from './Footer';
// import { object } from 'prop-types';
// import { HelperText } from '@mui/icons-material';

  // const useStyles = makeStyles((theme) => ({
  //   form: {
  //     backgroundColor: 'lightgray',
  //     padding: theme.spacing(2),
  //     
  //     flexDirection: 'column',
  //   },
  // }));


  const token = localStorage.getItem("token")
export const Drnlist = () => {


  const [lineItem,setLineItem]=useState([])
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [product,setProduct]=useState([])
  const [inputValue, setInputValue]=useState('')
  const [inputValue2,setInputValue2]=useState('')
  const [inputValue3,setInputValue3]=useState('')
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalAmount2, setTotalAmount2] = useState(0);
  const [totalAmount3, setTotalAmount3] = useState(0);
  const [isInvoiceValid, setIsInvoiceValid] = useState(true);
  const [isInvoiceNoValid, setIsInvoiceNoValid] = useState(true);
  const [isInvoiceDateValid, setIsInvoiceDateValid] = useState(true);
  const [showGRNErrorMessage, setShowGRNErrorMessage] = useState(false);
  // const {orders,setOrders,purchaseId,setPurchaseId}=useAuthContext()
  const [isDRNValid, setIsDRNValid] = useState(true);
  const [grandTotal, setGrandTotal] = useState(0);
  const [idlineItemArray,setIdlineItemArray]=useState(0)
  const [subsidiaryId,setSubsidiaryId]=useState('')
  const [locationId,setLocationId]=useState('')
  const [poId,setPoId]=useState('')


   const  token = sessionStorage.getItem("token"); 
  // const token='107|UcKUUoV1lBraUd87wpOFaYRh3VIyCqK0rvoQHXxN'

 
  
  const [conditionInput,setConditionInput]=useState('')
  // const [grandTotalArray, setGrandTotalArray] = useState([]); 
  const [formValues, setFormValues] = useState({
    invoice: '',
    eway_bill: '',
    drn: '',
    invoice_no: null,
    invoice_date: null,
  });
    
  const { orderUrl, setOrderUrl, purchaseData, setPurchaseData,apiUrl,setPurchaseId,purchaseId } = useAuthContext();
// console.log(`line_item${lineItem}`)
console.log(`subsidiary_id:${subsidiaryId}`)
console.log(`location_id:${locationId}`)
console.log(`poid:${poId}`)
console.log(conditionInput)





  // useEffect(() => {
  //   const storedPurchaseData = localStorage.getItem('purchaseData');
  //   if (storedPurchaseData) {
  //     try {
  //       const parsedData = JSON.parse(storedPurchaseData);
  //       setPurchaseData(parsedData);
  //       //  setLineItem(purchaseData[0].line_items)
  //       if (parsedData.length > 0) {
  //         // Retrieve the line_items from the first item in purchaseData
  //         setLineItem(parsedData[0].line_items);
  //         setSubsidiaryId(parsedData[0].subsidiary_id)
  //         setLocationId(parsedData[0].location_id)
  //         setPoId(parsedData[0].id)
  //         setConditionInput(parsedData[0].line_items[0].outstandingQuantity)
  //         setIdlineItemArray(parsedData[0].line_items[0].id)
  //       }
  //     } catch (error) {
  //       console.error('Error parsing data from local storage:', error);
  //     }
  //   }
  // }, [setPurchaseData,setLineItem]);
  console.log(lineItem)
  console.log(`product:${product}`)

  useEffect(() => {
    try {
      // Retrieve the purchaseId from localStorage
      const storedId = localStorage.getItem('purchaseId');
      setPurchaseId(storedId);
  
      // Make an HTTP GET request to your API endpoint
      axios.get(`${apiUrl}/orders/${storedId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })
        .then(response => {
          // Handle the response data here
          console.log([response.data.data]);
          setProduct([response.data.data])
          setLineItem(response.data.data.line_items)
         
                    setSubsidiaryId(response.data.data.subsidiary_id)
                    setLocationId(response.data.data.location_id)
                    setPoId(response.data.data.id)
        })
        .catch(error => {
          // Handle errors from the API request
          console.error('Error fetching data from the API:', error);
        });
    } catch (error) {
      // Handle errors related to localStorage or other synchronous code
      console.error('Error parsing data from local storage:', error);
    }
  }, [apiUrl, setPurchaseId]

  


//       try {
//         // const parsedData = JSON.parse(storedPurchaseData);
//         setPurchaseData(parsedData);
//         //  setLineItem(purchaseData[0].line_items)
//         if (parsedData.length > 0) {
//           // Retrieve the line_items from the first item in purchaseData
//           setLineItem(parsedData[0].line_items);
//           setSubsidiaryId(parsedData[0].subsidiary_id)
//           setLocationId(parsedData[0].location_id)
//           setPoId(parsedData[0].id)
//           setConditionInput(parsedData[0].line_items[0].outstandingQuantity)
//           setIdlineItemArray(parsedData[0].line_items[0].id)
//         }
  //     } catch (error) {
  //       console.error('Error parsing data from local storage:', error);
  //     }
    
  // }, [setPurchaseData,setLineItem]);

  
  )

  // formDate
  function formatDateWithAMPM(dateString) {
    const date = new Date(Date.parse(dateString));
    const options = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: '2-digit',
      // minute: '2-digit',
      // second: '2-digit',
      hour12: true, // Add AM/PM
    };
    return date.toLocaleString(undefined, options);
  }
  
  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };


const handleSubmit = async (e) => {
  e.preventDefault();

  // Validate required fields
  if (!formValues.invoice) {
    setIsInvoiceValid(false);
    return;
  }

  if (!formValues.invoice_no) {
    setIsInvoiceNoValid(false);
    return;
  }

  if (!formValues.invoice_date) {
    setIsInvoiceDateValid(false);
    return;
  }
  if (grandTotal > 50000 && !formValues.drn) {
    // Grand total is greater than 50000, but "Upload GRN" is not filled
    setIsDRNValid(false);
    setShowGRNErrorMessage(true);
    return;
  }

  // Reset validation states
  setIsInvoiceValid(true);
  setIsInvoiceNoValid(true);
  setIsInvoiceDateValid(true);
  setIsDRNValid(true);
  setShowGRNErrorMessage(false);



  const formData = new FormData();
  formData.append('subsidiary_id', subsidiaryId);
  formData.append('location_id', locationId);
  formData.append('po_id', poId);
//   formData.append('invoice', formValues.input); // Use your file input variable for 'file1'
// formData.append('eway_bill', formValues.eway_bill);
// formData.append('drn',formValues.drn)
formData.append('invoice', formValues.invoice); // Use your file input variable for 'invoice'
formData.append('eway_bill', formValues.eway_bill);
formData.append('drn', formValues.drn);

  formData.append('invoice_no', formValues.invoice_no);
  formData.append('invoice_date', formValues.invoice_date);

  const items = lineItem.map((item) => ({
    item_id: item.id,
    qty: item.inputValue || 0, // Use the appropriate field for quantity
    amount: calculateTotalAmount(item.inputValue || 0, item.product_price || 0),
  }));

  formData.append('items', JSON.stringify(items));

  try {
    const response = await axios.post(
      `${apiUrl}/delivery`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data', 
        },
      }
    );
    console.log(response.data);
  } catch (error) {
    console.error('Error sending the request:', error);
  }
};
const handleInputChange = (e, fieldName) => {
  const { value } = e.target;
  setFormValues({ ...formValues, [fieldName]: value });
};
const handleFileInputChange = (e, fieldName) => {
const file = e.target.files[0]; // Get the selected file
setFormValues({ ...formValues, [fieldName]: file });
};

  
      
// 1
// console.log(purchaseData)


// ... (previous code)

const handleChange = (e, fieldIndex) => {
  const newValue = e.target.value;

  // Ensure that the entered value is less than or equal to item.outstandingQuantity
  if (newValue <= lineItem[fieldIndex].outstandingQuantity) {
    // Update the state based on the fieldIndex
    const updatedLineItem = lineItem.map((item, index) => {
      if (index === fieldIndex) {
        return {
          ...item,
          inputValue: newValue,
          // Add other fields as needed
        };
      }
      return item;
    });

    setLineItem(updatedLineItem);
  } else {
    // Show alert if newValue is greater than item.outstandingQuantity
    alert('Qty in This Delivery cannot be greater than Pending Qty');
  }
};

// ... (rest of the code)

const calculateTotalAmount = (value, productPrice) => {
  const gstRate = 18;
  const total = productPrice * value;
  const gst = (total * gstRate) / 100;
  return (total + gst).toFixed(2);}

const calculateFinalTotal = () => {
  return lineItem.reduce((total, item) => {
    const productPrice = item.product_price;
    const totalAmount = calculateTotalAmount(item.inputValue || 0, productPrice || 0);
    return total + parseFloat(totalAmount);
  }, 0).toFixed(2);
};

// const handleChange = (e, fieldIndex) => {
//   const newValue = e.target.value;

//   // Update the state based on the fieldIndex
//   const updatedLineItem = lineItem.map((item, index) => {
//     if (index === fieldIndex) {
//       return {
//         ...item,
//         inputValue: newValue,
//         // Add other fields as needed
//       };
//     }
//     return item;
//   });

//   setLineItem(updatedLineItem);
// };


// const updateConditionInput=(item)=>{
// setConditionInput(item)
// }


const columns=[
  {
    name:'Product Code',
    selector:(row)=>row.product_code,
    
  },
  {
name:'Product Name',
selector:(row)=>row.product_name, 

  },
  {
    name:'Price',
    selector:(row)=>row.product_price,
    
  },
  {
    name:'GST',
    selector:(row)=>row.gst,
    
  },
  {
    name:'Ordered Qty',
    selector:(row)=>row.drn_quantity,
    
  },
 
  {
    name:'Delivered Qty',
    selector:(row)=>row.drn_quantity,
    
  },
  {
    name:'Pending Qty',
    selector:(row)=>row.drn_quantity,
    
  },
  
  {
    name:'Qty in This Delivery',
    selector:(row)=><input type="text" />,
    
  },
  {
    name:'Product Price',
    selector:(row)=>row.price,
    
  }
]

 

  const handleClose = () => {
    setIsFormVisible(false);
  };
  


  return (
    <div>
     <>
        <Typography variant="h4" gutterBottom
        style={{
          marginLeft:'30px',
          marginBottom:'30px'
        }}
       
        >
        DRN Overview
          </Typography>
    <Card
    style={{
      width:'95%',
      height:"auto",
      marginLeft:'25px',
     // border:"1px solid lightblue",
    }}
    className='me-3'
    >
      <Typography variant="h4" gutterBottom>
        {product.length > 0 && (
          product.map((item, index) => (

      <div >


            <div key={index} style={{ display: 'flex', justifyContent: 'space-between', 
            width: "15%" ,marginTop:'30px',marginLeft:"20px"
          }}>
              <h4
              style={{
                // margin:'auto'
              }}
              >{item.company_name}</h4>
              <h6 style={{ color: '#18dcff',marginTop:'5px' }}><VerifiedIcon /></h6>
            </div>
        
        <h4
        style={{
          marginTop:'8px',marginLeft:"20px"
        }}
        >
{/* {item.title} */}
Test
        </h4>
        {/* media query */}
        
        
{/* boostrap */}

<div className='row  ms-3 me-3' style={{display:'flex'}}  >
  {/* 1st */}
  <div className="col-sm-3  mb-3 pb-3 me-2 " 
  style={{
    //   border: "3px solid #9b59b6",
      borderRadius: '5%',
      fontSize: '17px',
      textAlign: 'center',
      // margin: '0 20px 0 20px',
      paddingTop: '25px',
      // display: 'flex',
      // flexDirection: 'column',
      boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
      backgroundColor:'#e2e8f0',
      color:'#061B64'
    }}
  >
  <p style={{color:'#061B64'}}>{item.oid}</p>
    <p style={{ color:'#061B64', fontSize: '12px', margin: '-10px 0px 0px 0px' }}>Purchase Order Id</p>
  </div>
  {/* 2nd */}
  <div className="col-sm-3 mb-3 me-2"
  style={{
    //   border: "3px solid #9b59b6",
      borderRadius: '5%',
      fontSize: '17px',
      textAlign: 'center',
      // margin: '0 20px 0 20px',
      paddingTop: '25px',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
      backgroundColor:'#D0F2FF',
      color:'#061B64'
    }}
  >
   <p style={{ textAlign: 'center' }}>{item.subsidiary_name}</p>
    <p style={{ color:'#061B64', fontSize: '12px', textAlign: 'center', marginTop: '-15px' }}>Subsidiary</p>
  </div>
  {/* 3rd */}
  <div className="col-sm-3 mb-3 me-2"
  style={{
    //   border: "3px solid #9b59b6",
      borderRadius: '5%',
      fontSize: '17px',
      textAlign: 'center',
      // margin: '0 20px 0 20px',
      paddingTop: '25px',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
      backgroundColor:'#FFF7CD',
      color:'#7A4F01'
    }}
  >
    <p> {item.location_name}</p>
    <p style={{color:'#7A4F01', fontSize: '12px', marginTop: '-15px' }}>Location</p>
  </div>
  {/* 4th */}
  <div className="col-sm-2 ms-2 "
  style={{
    //   border: "3px solid #9b59b6",
      borderRadius: '5%',
      fontSize: '17px',
      textAlign: 'center',
      // margin: '0 20px 0 20px',
      height:'112px',
      paddingTop: '25px',
      // display: 'flex',
      // flexDirection: 'column',
      boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
      backgroundColor:'#FFE7D9',
      color:'#7A0C2E',
    }}
  >
    <p> {item.total_products}</p>
    <p style={{ color: 'gray', fontSize: '12px', marginTop: '-15px' }}>Products</p>
  </div>
</div>

{/* 2nd row */}
<div className='row mt-3 mb-3 ms-3 me-3' style={{display:'flex'}}>
  {/* 1st */}
  <div className="col-sm-3  mb-3 ms-2"
  style={{
    //   border: "3px solid #9b59b6",
      borderRadius: '5%',
      fontSize: '17px',
      textAlign: 'center',
      // margin: '0 20px 0 20px',
      paddingTop: '25px',
      // display: 'flex',
      // flexDirection: 'column',
      boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
      backgroundColor:'#2ecc71',
      color:'white'
    }}
  >
  
     <p>
{item.issue_date}
</p>


    <p style={{   color:'white', fontSize: '12px', marginTop: '-15px' }}>Created at</p>
  </div>
  {/* 2nd */}
  <div className="col-sm-3 mb-3 ms-2"
  style={{
    //   border: "3px solid #9b59b6",
      borderRadius: '5%',
      fontSize: '17px',
      textAlign: 'center',
      // margin: '0 20px 0 20px',
      paddingTop: '25px',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
      color:'#7A0C2E',
      backgroundColor:'#FFE7D9'
    }}
  >
    <p> 
    {/* {formatDateWithAMPM(item.deliveries[0].updated_at)} */}
    {item.issue_date}
    </p>
    <p style={{   color:'#7A0C2E', fontSize: '12px', marginTop: '-15px' }}>Updated At</p>
  </div>
  </div>

</div>
    
          ))
        )}
        
      </Typography>
    </Card>

    {/* create DRN */}
    <Card
      style={{
        width:'95%',
        height:"auto",
        margin:'25px',
      }}
    >

    <TableContainer component={Paper}>
    <TableHead>
    
    <TableRow>
      <TableCell>S No.</TableCell>
      <TableCell>Product Code</TableCell>
      <TableCell>Product Name</TableCell>
      <TableCell>Price</TableCell>
      <TableCell>GST</TableCell>
      <TableCell>Ordered Qty</TableCell>
      <TableCell>Delivered Qty</TableCell>
      <TableCell>Pending Qty</TableCell>
      <TableCell>Qty in This Delivery</TableCell>
      <TableCell>Total Amount</TableCell>
    </TableRow>

   
  </TableHead>
    <TableBody>
  {lineItem.length > 0 && lineItem.map((item, index) => {

    return (
      <TableRow key={index}>
        <TableCell component="th" scope="row">{index + 1}</TableCell>
        <TableCell>{item.product_code}</TableCell>
        <TableCell>{item.product_name}</TableCell>
        <TableCell>{item.product_price}</TableCell>
        <TableCell>{item.gst}</TableCell>
        <TableCell>{item.quantity}</TableCell>
        <TableCell>{item.quantityReceived}</TableCell>
        <TableCell>{item.outstandingQuantity}</TableCell>
        <TableCell>
       
        <TextField
            type="number"  // Specify the input type as 'number' for numeric input
            value={item.inputValue || ''}
            onChange={(e) => handleChange(e, index)}
          />
        </TableCell>
        <TableCell>
  {calculateTotalAmount(item.inputValue || 0, item.product_price || 0)}
</TableCell>
      </TableRow>
      
    );
  })}
     <TableRow>
      <TableCell colSpan={10} style={{ textAlign: 'right', fontWeight: 'bold' }}>
     <h5>  Final Total: {calculateFinalTotal()}</h5> 
      </TableCell>
    </TableRow>
  {/* Repeat the same structure for inputValue2 and inputValue3 */}
</TableBody>
     
 
{/* form  */}
<Button
          // variant="contained"
          // color="primary"
          style={{
            marginBottom:'25px',marginLeft:'40%',marginTop:'25px'
          }}
        
          onClick={() => {
            const finalTotal = calculateFinalTotal();
            if (finalTotal !== '0.00') {
              toggleFormVisibility(); // Open the form
            } else {
              alert("Final amount must not be 0");
            }
          }}
        >
          {isFormVisible ? 'Hide Form' : 'Show Form'}
        </Button>

      
        {isFormVisible && (
            <Dialog open={isFormVisible} onClose={handleClose}>
            <DialogTitle
            style={{
              color:'#2065D1',     
 }}
            >Form</DialogTitle>
            <DialogContent>
        <form onSubmit={handleSubmit} style={{ marginTop: '25px', marginBottom: '25px',display:'flex',
        flexDirection:"column" ,width:'40%,'}}>
              {/* Input box 1 */}
              {/* <FormControl required>
        <div style={{
          display:'flex',
          flexDirection:'row',
          marginBottom:'20px'
        }}>
          <h5
          style={{
            marginTop:'15px',
        marginRight:'20px',
        
          }}
          >Invoice:</h5>
                <TextField 
                    name="invoice"
                    // value={formValues.invoice}
                     onChange={(e) => handleFileInputChange(e, 'invoice')}
                   
                placeholder="Input 1" type='file' style={{marginLeft:'40px'}}/>
                </div>
              </FormControl> */}

<FormControl required>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        marginBottom: '20px'
      }}>
        <h5
          style={{
            marginTop: '15px',
            marginRight: '20px'
          }}
        >Invoice:</h5>
        <TextField
          name="invoice"
          onChange={(e) => {
            handleFileInputChange(e, 'invoice');
            setIsInvoiceValid(!!e.target.files[0]);
          }}
          placeholder="Input 1"
          type='file'
          style={{ marginLeft: '40px' }}
        />
      </div>
      {/* Error message */}
      {!isInvoiceValid && (
        <p style={{ color: 'red',marginLeft:'26%',marginBottom:'20px',marginTop:'-20px' }}>* required</p>
      )}
    </FormControl>
        
              {/* Input box 2 */}
              <FormControl required>
              <div style={{
          display:'flex',
          flexDirection:'row',
          marginBottom:'20px'
        }}>
           <h5
          style={{
            marginTop:'15px',
        marginRight:'20px'
          }}
          >E-Way Bill :</h5>
                <TextField placeholder="Input 2" type='file'
  name="eway_bill"
                    // value={formValues.eway_bill}
                     onChange={(e) => handleFileInputChange(e, 'eway_bill')}
              
                style={{marginLeft:'8px'}}/>
                </div>
              </FormControl>
        
              {/* Input box 3 */}
              {/* <FormControl required>
              <div style={{
          display:'flex',
          flexDirection:'row',
          marginBottom:'20px' }}>
           <h5
          style={{
            marginTop:'15px',
        marginRight:'20px'
          }}
          >Upload GRN :</h5>
                <TextField placeholder="Input 3" type='file'
                   name="drn"
                  //  value={formValues.drn}
                    onChange={(e) => handleFileInputChange(e, 'drn')}
                style={{marginLeft:'-5px'}}/>
                </div>
              </FormControl> */}
              {
    <FormControl required>
    {/* ... (other form controls) */}
    
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      marginBottom: '20px',
    }}>
      <h5
        style={{
          marginTop: '15px',
          marginRight: '20px'
        }}
      >Upload GRN :</h5>
      <TextField
        placeholder="Input 3"
        type='file'
        name="drn"
        onChange={(e) => {
          handleFileInputChange(e, 'drn');
          setIsDRNValid(true); // Reset DRN validation state
          setShowGRNErrorMessage(false); // Hide the error message
        }}
        style={{ marginLeft: '-5px' }}
      />
    </div>
    {/* message */}
    {showGRNErrorMessage && (
      <p style={{ color: 'red',marginLeft:'140px' }}>*GRN is required if grand total 
       amount is greater <br /> than 50000</p>
    )}

  </FormControl>
}

        
              {/* Input box 4 */}
              <FormControl required>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        marginBottom: '20px',
      }}>
        <h5
          style={{
            marginTop: '15px',
            marginRight: '20px'
          }}
        >Invoice No:</h5>
        <TextField
          placeholder="Invoice No"
          name="invoice_no"
          value={formValues.invoice_no}
          onChange={(e) => {
            handleInputChange(e, 'invoice_no');
            setIsInvoiceNoValid(!!e.target.value);
          }}
          style={{ marginLeft: '10px', width: '365px' }}
        />
      </div>
      {/* Error message */}
      {!isInvoiceNoValid && (
        <p style={{ color: 'red',marginLeft:'26%',marginBottom:'20px',marginTop:'-20px'}}>* required</p>
      )}
    </FormControl>
        
        
              {/* Input box 5 */}
              <FormControl required>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        marginBottom: '20px'
      }}>
        <h5
          style={{
            marginTop: '15px',
            marginRight: '20px'
          }}
        >Invoice Date:</h5>
        <TextField
          placeholder="Input 5"
          type='date'
          name="invoice_date"
          value={formValues.invoice_date}
          onChange={(e) => {
            handleInputChange(e, 'invoice_date');
            setIsInvoiceDateValid(!!e.target.value);
          }}
          style={{ marginLeft: '-5px', width: '365px' }}
        />
      </div>
      {/* Error message */}
      {!isInvoiceDateValid && (
        <p style={{ color: 'red',marginLeft:'26%',marginBottom:'20px',marginTop:'-20px' }}>* required</p>
      )}
    </FormControl>

              <Button type="submit" variant="contained" color="primary" style={{marginLeft:'40%',width:'150px'}}>
                Submit
              </Button>
            </form>
            </DialogContent>
      </Dialog>
        )}  
        </TableContainer>
       
        </Card>
        </>
        {/* footer */}
        <Footer/>
    </div>
  
  )
}