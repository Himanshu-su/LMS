// // import { Helmet } from 'react-helmet-async';

import { useEffect, useState } from "react";
// import './po/index.css'
import { Card, Typography } from "@mui/material";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import VerifiedIcon from '@mui/icons-material/Verified';
import PersonIcon from '@mui/icons-material/Person';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import { Footer } from "./Footer";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthContext } from "./AuthProvider";

// // // @mui
// // import { styled } from '@mui/material/styles';
// // import { Link, Container, Typography, Divider, Stack, Button } from '@mui/material';

// // // hooks
// // import useResponsive from '../hooks/useResponsive';
// // // components
// // import Logo from '../components/logo';
// // import Iconify from '../components/iconify';
// // // sections
// // // import { LoginForm } from '../sections/auth/login';



// // // ----------------------------------------------------------------------

// // const StyledRoot = styled('div')(({ theme }) => ({
// //   [theme.breakpoints.up('md')]: {
// //     display: 'flex',
// //   },
// // }));

// // const StyledSection = styled('div')(({ theme }) => ({
// //   width: '100%',
// //   maxWidth: 480,
// //   display: 'flex',
// //   flexDirection: 'column',
// //   justifyContent: 'center',
// //   boxShadow: theme.customShadows.card,
// //   backgroundColor: theme.palette.background.default,
// // }));

// // const StyledContent = styled('div')(({ theme }) => ({
// //   maxWidth: 480,
// //   margin: 'auto',
// //   minHeight: '100vh',
// //   display: 'flex',
// //   justifyContent: 'center',
// //   flexDirection: 'column',
// //   padding: theme.spacing(12, 0),
// // }));

// // // ----------------------------------------------------------------------

// // export default function ProfilePage() {
// //   const mdUp = useResponsive('up', 'md');

// //   return (
// //     <>
// //       <Helmet>
// //         <title> Login | Minimal UI </title>
// //       </Helmet>

// //       <StyledRoot>
// //         <Logo
// //           sx={{
// //             position: 'fixed',
// //             top: { xs: 16, sm: 24, md: 40 },
// //             left: { xs: 16, sm: 24, md: 40 },
// //           }}
// //         />

// //         {mdUp && (
// //           <StyledSection>
// //             <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
// //               Hi, Welcome Back
// //             </Typography>
// //             <img src="/assets/illustrations/illustration_login.png" alt="login" />
// //           </StyledSection>
// //         )}

// //         <Container maxWidth="sm">
// //           <StyledContent>
// //             <Typography variant="h4" gutterBottom>
// //               Sign in to Minimal
// //             </Typography>

// //             <Typography variant="body2" sx={{ mb: 5 }}>
// //               Don’t have an account? {''}
// //               <Link variant="subtitle2">Get started</Link>
// //             </Typography>

// //             <Stack direction="row" spacing={2}>
// //               <Button fullWidth size="large" color="inherit" variant="outlined">
// //                 <Iconify icon="eva:google-fill" color="#DF3E30" width={22} height={22} />
// //               </Button>

// //               <Button fullWidth size="large" color="inherit" variant="outlined">
// //                 <Iconify icon="eva:facebook-fill" color="#1877F2" width={22} height={22} />
// //               </Button>

// //               <Button fullWidth size="large" color="inherit" variant="outlined">
// //                 <Iconify icon="eva:twitter-fill" color="#1C9CEA" width={22} height={22} />
// //               </Button>
// //             </Stack>

// //             <Divider sx={{ my: 3 }}>
// //               <Typography variant="body2" sx={{ color: 'text.secondary' }}>
// //                 OR
// //               </Typography>
// //             </Divider>
         
// //           </StyledContent>
       
// //         </Container>
// //       </StyledRoot>
// //     </>
// //   );
// // }

// // import { Container, Stack } from '@chakra-ui/react'
// import React, { useEffect, useState } from 'react'
// import axios from 'axios';
// // import { Helmet } from 'react-helmet-async'
// // import  { Button,Card,Container, Stack,Typography } from "@mui/material"
// // import Iconify from '../components/iconify';

// import { Box, Container, Stack, Typography, Unstable_Grid2 as Grid ,Button,Divider,CardActions,Card,Avatar,CardContent, Input} from '@mui/material';
// // import { ProfileDetail } from 'src/layouts/dashboard/header/ProfileDetail';
// // import { Profile } from 'src/layouts/dashboard/header/Profile';
// import { Helmet } from 'react-helmet-async';
// import './po/index.css';
// import { useNavigate } from 'react-router-dom';




// export const ProfilePage = () => {

//   const navigate=useNavigate()
//     const [data,setData]=useState({})

//     useEffect(()=>{

//       if(!localStorage.getItem("token")){
//         navigate('/login')
//       }

      

//         axios.get("https://dev.techstreet.in/vmsglen/public/api/profile",{
//         headers:{
//             Authorization:`Bearer ${'147|770QaHeB3OMMoRMScdjc88lk8WLtJiAhxunPbWjT'}`
//         }
//         })
        
//         .then((res)=>{
//             console.log(res.data.data)
//             setData(res.data.data)
//         })
        
//         },[])

//   return (
//     <div>
//       {/* <Helmet>
//         <title> User | Minimal UI </title>
//       </Helmet>

//       <Container>
//         <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
//           <Typography variant="h4" gutterBottom>
//            Profile
//           </Typography>
//                </Stack>

//                <Card>
//               <h1>data</h1>
//                </Card>
//         </Container> */}


// <Helmet>
//       <title>
//         Account | Devias Kit
//       </title>
//     </Helmet>
//     <Typography variant="h4" gutterBottom className='profile'>
//             Profile
//           </Typography>
    
//     <Card 
//   className='card'
//     >
//     <CardContent>
//       <Box
//         sx={{
//           alignItems: 'center',
//           display: 'flex',
//           flexDirection: 'column'
          
//         }}
//       >
//         <Avatar
//           src='data:image/png;base64,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'
//                    sx={{
//             height: 80,
//             mb: 2,
//             width: 80
//           }}
//         />
//         {/* name */}
//         <Typography
//           gutterBottom
//           variant="h5"
//         >
//      {data.name}
//              </Typography>

//              {/* role */}
//         <Typography
//           color="text.secondary"
//           variant="body2"
//         >
//       Role : {data.role}
//                 </Typography>

//                 {/* company name */}
//                 {/* <Typography
//           color="text.secondary"
//           variant="body2"
//         >
//       Company Name : {data.info.company_name}
//       </Typography> */}

//       {/* comapny email */}
//       {/* <Typography
//           color="text.secondary"
//           variant="body2"
//         >
//       Company Owner Email : {data.info.company_owner_email}
//       </Typography> */}

//       {/* gst no */}
//       {/* <Typography
//           color="text.secondary"
//           variant="body2"
//         >
//       Company GST No : {data.info.gst_no}
//       </Typography> */}

//       {/* pan no */}
//       {/* <Typography
//           color="text.secondary"
//           variant="body2"
//         >
//       Pan No : {data.info.pan_no}
//       </Typography> */}

// {/* vender uuid */}
// {/* <Typography
//           color="text.secondary"
//           variant="body2"
//         >
//       Id : {data.info.vendor_uid}
//       </Typography> */}

//                 {/* address */}
//                 {/* <Typography
//           color="text.secondary"
//           variant="body2"
//         >
//       Address : {data.info.address1} {data.info.address2}
//                 </Typography>  */}


//                 {/* email */}
//         <Typography
//           color="text.secondary"
//           variant="body2"
//         >
//             Email : {data.email}
//   </Typography>

//   <Typography
//           color="text.secondary"
//           variant="body2"
//         >
//            Phone No : {data.mobile}
//   </Typography>
//       </Box>
//     </CardContent>
//     <Divider />
//     <CardActions>
//       <Button
//         fullWidth
//         variant="text"
//         type="file" id="imageUpload" name="image" accept="image/*"
//       >
//         Upload picture
//       </Button>
//     </CardActions>
//   </Card>

//     </div>
//   )
// }

const  token = sessionStorage.getItem("token") 
export const ProfilePage = () =>{

  const navigate=useNavigate()
    const [data,setData]=useState([])
    const {apiUrl}=useAuthContext()
    console.log(data)
    useEffect(()=>{

      if(!localStorage.getItem("token")){
        navigate('/login')
      }

      console.log(apiUrl)

        axios.get(`${apiUrl}/profile`,{
        headers:{
            Authorization:`Bearer ${token}`
        }
        })
        
        .then((res)=>{
            console.log(res.data.data)
            setData([res.data.data])
        })
        
        },[])
  const loopFunction = (duration, outputId,additionalInfo) => {
    for (let i = 0; i <= duration; i++) {
      setTimeout(() => {
        updateOutput(outputId, ` ${i} ${additionalInfo}`);
      }, i);
    }
  };

  const updateOutput = (outputId, value) => {
    document.getElementById(outputId).innerText = value;
  };


  useEffect(() => {
    // Loop for the first div (4500 milliseconds)
    loopFunction(4500, 'output1','Earning');

    // Loop for the second div (750 milliseconds)
    loopFunction(750,'output2', 'Projects');

    // Loop for the third div (600 milliseconds)
    loopFunction(600,'output3', 'Success Rate');
  }, []);
  const cardStyle = {
    height: '75px',
    paddingTop: '10px',
    marginTop: '40px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '150px',
    // Adjust this value based on your preference
  };
  return(
    <>
     <Typography variant="h4" gutterBottom
        style={{
          marginLeft:'20px',
          marginBottom:'30px'
        }}
        >
       Profile
          </Typography>
    <Card>
     {/* img  */}
    <div >
      {/* <div className="container" > */}
      {/* {data.map((item, index) => ( */}
      <div>
      <div className="row ms-5 mt-3" >
      
        <div className="col-md-3"  >
          <div className="card-left" >
            <div className="left-inner" id="cardprofile">
              <img className="profile-img" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp2eqteBDZ--wOFIEYVLZAnYYbgrFdSAAaXw&usqp=CAU' alt="Profile Image" />
            </div>
          </div>
        </div>
        <div className="col-9 flex">
      
<div className="row" style={{marginTop:'30px'}}>
  <div className="col-5" >
    <div className="row"id="Nameicon" >
      <div className="col-6" ><h4 >
        Himanshu Shukla
        {/* {item.name} */}
        </h4></div>
      <div className="col-6" style={{color:'#18dcff',marginLeft:'-20px'}}><VerifiedIcon /></div>
    </div>
  </div>
</div>
{/* detail */}
<div className="row mt-3" id="detailmediarow">
  <div className="col-sm-9">
    <div className="row">
      <div className="col-sm-3" id="detailmediacol">
        <a className="d-flex"><PersonIcon/>
        <h6>Developer</h6></a>
      </div>
      <div className="col-sm-3" id="detailmedia">
        <a className="d-flex">
          < LocationOnIcon/>
          <h6>
            8858311752
            {/* {item.mobile} */}
            </h6>
        </a>
      </div>
      <div className="col-sm-3" id="detailmedia">
        <a className="d-flex">< EmailIcon/>
        <h6>
          himanshudiv1711@gmail.com
          {/* {item.email} */}
          </h6>
        </a>
      </div>
    </div>
  </div>
</div>
        {/* all div */}
       <div className="row" style={{
        // border:'1px solid red',
        width:'600px',
        marginBottom:'50px',
        marginLeft:'-20px'

       }} id="alldivrow">
      {/* 1 */}
      <div className="col-sm-4 d-flex justify-content-around align-items-center" id="alldivcol">
        <Card style={cardStyle}>
          <ArrowUpwardIcon style={{ color: 'lightgreen', marginTop: '-10px' }} />
          <div className="right-item text-center" id="output1"></div>
        </Card>
      </div>
      {/* 2 */}
      <div className="col-sm-4 d-flex justify-content-around align-items-center" id="alldivcol">
        <Card style={cardStyle}>
          <ArrowDownwardIcon style={{ color: 'red', marginTop: '-10px' }} />
          <div className="right-item text-center" id="output2"></div>
        </Card>
      </div>
      {/* 3 */}
      <div className="col-sm-4 d-flex justify-content-around align-items-center" id="alldivcol">
        <Card style={cardStyle}>
          <ArrowUpwardIcon style={{ color: 'lightgreen', marginTop: '-10px' }} />
          <div className="right-item text-center" id="output3"></div>
        </Card>
      </div>
    </div>
{/* 
        <Card> <div className="right-item" id="output2"></div></Card>
        <Card> <div className="right-item" id="output3"></div></Card> */}
         
           
           
          {/* </div> */}
          
          </div>
          
        </div>
      </div>
            {/*  ))} */}
    </div>
      {/* </div> */}
    </Card>

    {/* 2 card */}
    <Card className="mt-4">
    <div className="container">
      <div className="row">
        <div className="col-sm-12 mt-3">
          <h5>Profile Details</h5>
        </div>
      </div>
      <hr />

{/* phone details */}
{/* {data.map((item, index) => ( */}
<div className="row">
      <div className="col-sm-10">
        <div className="row">
          {/* <div className="col-sm-5">
            <h5 className="mb-3">Full Name</h5>
            <h5 className="mb-3">Contact Phone</h5>

            <h5 className="mb-3">Contact Name</h5>
        
            <h5 className="mb-3">Company Address</h5>
           
          </div> */}
          <div className="col-sm-12">
            {/* 1 */}
            <div className="d-flex" >
            <h5 className="mb-3" style={{color:'gray'}}>Full Name:</h5>
            <h5 className="withMargin mb-3 ms-5">
              {/* {item.info.company_name} */}
              Himanshu Shukla
              </h5>
            </div>
            {/* 2 */}
            <div className="d-flex" >
            <h5 className="mb-3" style={{color:'gray'}}>Contact Phone:</h5>
            <h5 className="withMargin mb-3 ms-5">
              8858311752
              {/* {item.info.contact_person_mobile} */}
              </h5>
            </div>
            {/* 3 */}
            <div className="d-flex" >
            <h5 className="mb-3" style={{color:'gray'}}>Contact Email:</h5>
            <h5 className="withMargin mb-3 ms-5">
              himanshudiv1711@gmail.com
              {/* {item.info.contact_person_email} */}
              </h5>
            </div>
            {/* 4*/}
            <div className="d-flex" >
            <h5 className="mb-3" style={{color:'gray'}}>Contact Name:</h5>
            <h5 className="withMargin mb-3 ms-5">
              Divyanshu Shukla
              {/* {item.info.contact_person_name} */}
              </h5>
            </div>
          {/* 5 */}
          <div className="d-flex" >
            <h5 className="mb-3" style={{color:'gray'}}>Nature of Business:</h5>
            <h5 className="withMargin mb-3 ms-5">
              Web Developer
              {/* {item.info.business_nature} */}
              </h5>
            </div>
            {/* 6 */}
            <div className="d-flex" >
            <h5 className="mb-3" style={{color:'gray'}}>Establishment Year:</h5>
            <h5 className="withMargin mb-3 ms-5">
              2001
              {/* {item.info.establishment_year} */}
              </h5>
            </div>
            {/* 7 */}
            <div className="d-flex" >
            <h5 className="mb-3" style={{color:'gray'}}>Company Address:</h5>
            <h5 className="withMargin mb-3 ms-5" >
              414/15 208005 Shyam nagar
              {/* {item.info.address1} */}
              </h5>
            </div>
            <div className="d-flex" >
            <h5 className="mb-3 " style={{color:'gray'}}>District:</h5>
            <h5 className="withMargin mb-3 " >
Kanpur
              {/* {item.info.district} */}
              </h5>
            </div>
            <div className="d-flex" >
            <h5 className="mb-3" style={{color:'gray'}}>State:</h5>
            <h5 className="withMargin mb-3 ms-5">
              Uttar Pradesh
              {/* {item.info.state} */}
              </h5>
            </div>
            <div className="d-flex" >
            <h5 className="mb-3" style={{color:'gray'}}>Pin Code:</h5>
            <h5 className="withMargin mb-3 ms-5">
              {/* {item.info.pin_code} */}
              </h5>
            </div>
          </div>

        </div>
      </div>
    </div>
     {/* ))} */}
    </div>
    </Card>
    {/* <Footer/> */}
    </>
  )
}
