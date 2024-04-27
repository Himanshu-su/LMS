// import React from 'react'
// import { Typography, Card, Button,Container,
//   Paper,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   StyledInput,
//   HelperText,
//   FormControl, FormHelperText,  

//   TextField,
//   Pagination,
// Input,
//   TablePagination, 
//   makeStyles,
// } from '@mui/material';
// //   import { HelperText } from '@mui/material';

//  import { Label } from '@mui/icons-material';
// import { useAuthContext } from './AuthProvider';
// import { Footer } from './Footer';
// // import { HelperText } from '@mui/icons-material';

//   // const useStyles = makeStyles((theme) => ({
//   //   form: {
//   //     backgroundColor: 'lightgray',
//   //     padding: theme.spacing(2),
//   //     display: 'flex',
//   //     flexDirection: 'column',
//   //   },
//   // }));

// export const Newdrn = () => {

//   // const classes=useStyles()
//   const {orderUrl,setOrderUrl}=useAuthContext()
//   console.log(orderUrl)
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your form submission logic here
//   };
//   return (
//     <div>
//       <Typography variant="h4" gutterBottom
//         style={{
//           marginLeft:'30px',
//           marginBottom:'30px'
//         }}
//         >
//        Drn List
//           </Typography>
//     <Card
//     style={{
//       width:'95%',
//       height:"auto",
//       marginLeft:'25px',
//      // border:"1px solid lightblue",
//     }}
//     >
//       <Typography variant="h4" gutterBottom>
     

//       <div>

//             <div  style={{ display: 'flex', justifyContent: 'space-between', 
//             width: "15%" ,marginTop:'30px',marginLeft:"20px"
//           }}>
//               <h4
//               style={{
//                 // margin:'auto'
//               }}
//               >item.company_name</h4>
//               <h6 style={{ color: '#18dcff',marginTop:'5px' }}>hy</h6>
//             </div>
        
//         <h4
//         style={{
//           marginTop:'8px',marginLeft:"20px"
//         }}
//         >
// {/* {item.title} */}
// Test
//         </h4>
//         <div
//   style={{
//     display: 'grid',
//     gridTemplateColumns: 'repeat(4, 1fr)',
//     gap: '20px',
//     justifyContent: 'space-evenly',
//     marginTop: '30px',
//     marginBottom: '30px',
//   }}
// >
//   {/* all 8 div */}
//   {/* 1 */}
//   <div
//     style={{
//     //   border: "3px solid #9b59b6",
//       borderRadius: '5%',
//       fontSize: '17px',
//       textAlign: 'center',
//       margin: '0 20px 0 20px',
//       paddingTop: '25px',
//       display: 'flex',
//       flexDirection: 'column',
//       boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
//       backgroundColor:'#e2e8f0',
//       color:'#061B64'
//     }}
//   >
//     <p style={{color:'#061B64'}}>item.oid</p>
//     <p style={{ color:'#061B64', fontSize: '12px', margin: '-10px 0px 0px 0px' }}>Purchase Order Id</p>
//   </div>
//   {/* 2 */}
//   <div
//     style={{
//     //   border: "1px solid lightblue",
//       borderRadius: '5%',
//       fontSize: '17px',
//       display: 'flex',
//       flexDirection: 'column',
//       paddingTop: '25px',
//       margin: '0 20px 0 20px',
//       boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
//       backgroundColor:'#D0F2FF',
//       color:'#061B64'
//     }}
//   >
//     <p style={{ textAlign: 'center' }}>item.subsidiary_name</p>
//     <p style={{ color:'#061B64', fontSize: '12px', textAlign: 'center', marginTop: '-15px' }}>Subsidiary</p>
//   </div>
//   {/* 3 */}
//   <div
//     style={{
//         // width:"80%",
//         // height:"100px",
//         marginLeft:'20px',
//     //   border: "1px solid lightblue",
//       borderRadius: '5%',
//       fontSize: '17px',
//       display: 'flex',
//       flexDirection: 'column',
//       textAlign: 'center',
//       paddingTop: '30px',
//       boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
//       backgroundColor:'#FFF7CD',
//       color:'#7A4F01'
//     }}
//   >
//     <p> item.location_name</p>
//     <p style={{color:'#7A4F01', fontSize: '12px', marginTop: '-15px' }}>Location</p>
//   </div>
//   {/* 4 */}
//   <div
//     style={{
//         // width:"60%",
//         // height:"100px",
//         marginLeft:'20px',
//     //   border: "1px solid lightblue",
//       borderRadius: '5%',
//       fontSize: '17px',
//       display: 'flex',
//       flexDirection: 'column',
//       textAlign: 'center',
//       paddingTop: '25px',
//       boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
//       marginRight:'25px',
//       color:'#7A0C2E',
//      backgroundColor:'#FFE7D9'
     
//     }}
//   >
//     <p> item.total_products</p>
//     <p style={{ color: 'gray', fontSize: '12px', marginTop: '-15px' }}>Products</p>
//   </div>
//   {/* 5 */}
//   <div
//     style={{
//     //   border: "1px solid lightblue",
//       borderRadius: '5%',
//       fontSize: '17px',
//       textAlign: 'center',
//       paddingTop: '10px',
//       boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
//       marginLeft:'25px',
//       backgroundColor:'#2ecc71',
//       color:'white'
//     }}
//   >
//     <p> item.total_amount</p>
//     <p style={{   color:'white', fontSize: '12px', marginTop: '-15px' }}>Total Amount</p>
//   </div>
//   {/* 6 */}
//   <div
//     style={{
//     //   border: "1px solid lightblue",
//       borderRadius: '5%',
//       fontSize: '17px',
//       textAlign: 'center',
//       paddingTop: '10px',
//       boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
//       color:'#7A0C2E',
//       backgroundColor:'#FFE7D9'
//     }}
//   >
//     <p> item.issue_date</p>
//     <p style={{   color:'#7A0C2E', fontSize: '12px', marginTop: '-15px' }}>Issued</p>
//   </div>
//   {/* 7 */}
//   <div
//     style={{
//     //   border: "1px solid lightblue",
//       borderRadius: '5%',
//       fontSize: '17px',
//       textAlign: 'center',
//       paddingTop: '10px',
//       marginLeft: '20px',
//       boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
//       backgroundColor:'#95a5a6',
//       color:'white'
//     }}
//   >
//     <p> item.validity</p>
//     <p style={{color:'white', fontSize: '12px', marginTop: '-15px' }}>Validity</p>
//   </div>
//   {/* 8 */}
//   <div
//     style={{
//     //   border: "1px solid lightblue",
//       borderRadius: '5%',
//       marginLeft: '20px',
//       fontSize: '17px',
//       textAlign: 'center',
//       paddingTop: '10px',
//       boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
//       marginRight:'25px',
//       backgroundColor:'#e2e8f0',
//       color:'#061B64'
//     }}
//   >
//     <p>item.status</p>
//     <p style={{ color:'#061B64', fontSize: '12px', marginTop: '-15px' }}>Status</p>
//   </div>
// </div>

// </div>
//       </Typography>
//     </Card>

//     {/* create DRN */}
//     <Card
//       style={{
//         width:'95%',
//         height:"auto",
//         margin:'25px',
//       }}
//     >
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//           <TableCell>S No.</TableCell>
//             <TableCell>Effective Date</TableCell>
//             <TableCell >Location</TableCell>
//             <TableCell >Pid</TableCell>
//             <TableCell >Product Code</TableCell>
//             <TableCell > Product</TableCell>
//             <TableCell >Subsidiary</TableCell>
//             <TableCell >Unit Price</TableCell>
//             <TableCell > Unit Type</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
        
        
           
//               <>
//               <TableRow>
//               <TableCell component="th" scope="row">        
// index+1
//  </TableCell>
         
//               <TableCell component="th" scope="row">        
// item.effective_date 
//  </TableCell>
//  <TableCell component="th" scope="row">
//                   item.location
//                      </TableCell>
//                      <TableCell component="th" scope="row">
//                   item.pid
//                      </TableCell>
//                      <TableCell component="th" scope="row">
//                   item.product_code
//                      </TableCell>
//                      <TableCell component="th" scope="row">
//                   item.product_name
//                      </TableCell>
//                      <TableCell component="th" scope="row">
//                   item.subsidiary
//                      </TableCell>
//                      <TableCell component="th" scope="row">
//                   item.unit_price

//                      </TableCell>
//                      <TableCell component="th" scope="row">
//                   item.unit_type
//                      </TableCell>
             
     
       
//                 </TableRow>
//                </>        
//         </TableBody>
//         </Table>
// {/* 
//         <FormControl defaultValue="" required>
//   <Label>Name</Label>
//   <StyledInput placeholder="Write your name here" />

// </FormControl> */}
// {/* <FormControl required>

//   <TextField placeholder="Write your name here" type='file'/>
//   <FormHelperText>Enter your nam
// </FormControl> */}
// <form onSubmit={handleSubmit} style={{ marginTop: '25px', marginBottom: '25px',display:'flex',
// flexDirection:"column" ,width:'40%,',marginLeft:'15%'}}>
//       {/* Input box 1 */}
//       <FormControl required>
// <div style={{
//   display:'flex',
//   flexDirection:'row',
//   marginBottom:'20px'
// }}>
//   <p
//   style={{
//     marginTop:'15px',
// marginRight:'20px',

//   }}
//   >invoice:</p>
//         <TextField placeholder="Input 1" type='file'/>
//         </div>
//       </FormControl>

//       {/* Input box 2 */}
//       <FormControl required>
//       <div style={{
//   display:'flex',
//   flexDirection:'row',
//   marginBottom:'20px'
// }}>
//    <p
//   style={{
//     marginTop:'15px',
// marginRight:'20px'
//   }}
//   >invoice:</p>
//         <TextField placeholder="Input 2" type='file'/>
//         </div>
//       </FormControl>

//       {/* Input box 3 */}
//       <FormControl required>
//       <div style={{
//   display:'flex',
//   flexDirection:'row',
//   marginBottom:'20px'
// }}>
//    <p
//   style={{
//     marginTop:'15px',
// marginRight:'20px'
//   }}
//   >invoice:</p>
//         <TextField placeholder="Input 3" type='file'/>
//         </div>
//       </FormControl>

//       {/* Input box 4 */}
//       <FormControl required>
//       <div style={{
//   display:'flex',
//   flexDirection:'row',
//   marginBottom:'20px'
// }}>
//    <p
//   style={{
//     marginTop:'15px',
// marginRight:'20px'
//   }}
//   >invoice:</p>
//         <TextField placeholder="Input 4" />
//         </div>
//       </FormControl>


//       {/* Input box 5 */}
//       <FormControl required>
//       <div style={{
//   display:'flex',
//   flexDirection:'row',
//   marginBottom:'20px'
// }}>
//    <p
//   style={{

//     marginTop:'15px',
// marginRight:'20px'
//   }}
//   >invoice:</p>
//         <TextField placeholder="Input 5" type='date'/>
//         </div>
//       </FormControl>


//       <Button type="submit" variant="contained" color="primary">
//         Submit
//       </Button>
//     </form>

//         {/* <form
//         style={{
//           margin:"auto",
//           width:'40%',
//           height:'auto', 
//           border:'1px solid lightblue',
//           gap:'20px'
//         }}
//          >
//         <Input
//           type="file"
//           name="file"
//           id="file"
//           // label="Choose File"
//           fullWidth
//         />
//         <br />  <Input
//           type="file"
//           name="file"
//           id="file"
//           // label="Choose File"
//           fullWidth
//         /> <br />
//           <Input
//           type="file"
//           name="file"
//           id="file"
//           // label="Choose File"
//           fullWidth
//         />
//         <Button type="submit" variant="contained" color="primary">
//           Submit
//         </Button>
//       </form> */}
//         </TableContainer>
        
//         </Card>
//    {/* footer */}
//    <Footer/>
//     </div>
  
//   )
// }
