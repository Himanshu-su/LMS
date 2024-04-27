import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
// @mui
import { alpha } from '@mui/material/styles';
import { Box, Divider, Typography, Stack, MenuItem, Avatar, IconButton, Popover } from '@mui/material';
// mocks_
import account from '../../../_mock/account';



// ----------------------------------------------------------------------

const MENU_OPTIONS = [
  {
    label: 'Home',
    icon: 'eva:home-fill',
  },
  {
    label: 'Profile',
    icon: 'eva:person-fill',
  },
  {
    label: 'Settings',
    icon: 'eva:settings-2-fill',
  },
];

// ----------------------------------------------------------------------

export default function AccountPopover() {
  const [open, setOpen] = useState(null);
  const navigate=useNavigate()

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

const handlenavigation=()=>{
return  navigate('/profile')
}

  const handleClose = () => {
   setOpen(null)
//     sessionStorage.removeItem("token")
// navigate("/login")
// setOpen(null);
  };

//   const handleProfile=async()=>{

// axios.get("https://dev.techstreet.in/vmsglen/public/api/profile",{
// headers:{
//     Authorization:`Bearer ${'147|770QaHeB3OMMoRMScdjc88lk8WLtJiAhxunPbWjT'}`
// }
// })

// .then((res)=>{
//     console.log(res.data.data)
//     navigate("/profile")
// })
//  }

  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{
          p: 0,
          ...(open && {
            '&:before': {
              zIndex: 1,
              content: "''",
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              position: 'absolute',
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.8),
            },
          }),
        }}
      >
        <Avatar src={account.photoURL} alt="photoURL" />
      </IconButton>

      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            p: 0,
            mt: 1.5,
            ml: 0.75,
            width: 180,
            '& .MuiMenuItem-root': {
              typography: 'body2',
              borderRadius: 0.75,
            },
          },
        }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle2" noWrap>
            {account.displayName}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
            {account.email}
          </Typography>
        </Box>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Stack sx={{ p: 1 }}>
          {/* {MENU_OPTIONS.map((option) => (
            <MenuItem key={option.label} >
              {option.label}
            </MenuItem>
          ))} */}

{/* 1 */}
         <MenuItem >
         <p>Home</p>
         </MenuItem>
       
         {/* 2 */}
         <MenuItem 
        //  onClick={handleProfile}
         >
       <Link to='/dashboard/profile'><p>Profile</p></Link>   
            {/* <
            //  onClick={handlenavigation}
             ></> */}
          

</MenuItem>

{/* 3 */}
<Link to='/dashboard/wishlist'>
<MenuItem>
         <p>Whishlist</p>
         </MenuItem>
</Link>

         {/* 4 */}
<MenuItem>
         <p>Setting</p>
         </MenuItem>
       


        </Stack>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <MenuItem  sx={{ m: 1 }}>
     <div>
     <button onClick={()=>{
      sessionStorage.removeItem("token")
      navigate("/signup")
     }} style={{
          borderRadius:'1px solid white '
        }}>
        Logout
          </button> 
     </div>   
        </MenuItem>
        <Divider sx={{ borderStyle: 'dashed' }} />
        <MenuItem sx={{ m: 1 }}>
        <div>
     <button onClick={()=>{
        sessionStorage.removeItem("token")
       navigate("/signup")
    
     
     }} style={{
          borderRadius:'1px solid white '
        }}>
   Signout
          </button> 
     </div>
        </MenuItem>
      </Popover>
    </>
  );
}
