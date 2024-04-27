import React, { useState } from 'react';
import { ListItem, ListItemIcon, ListItemText, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from '@mui/material';
import AssignmentLateIcon from '@mui/icons-material/AssignmentLate';
import FaceIcon from '@mui/icons-material/Face';
import { NavLink as RouterLink, useNavigate } from 'react-router-dom';

const AdminNavItem = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const navigate=useNavigate()
  const [formData, setFormData] = useState({
    secreteKey: '',
   
  });
  const [errors, setErrors] = useState({
    secreteKey: '',
   
  });

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      email: '',
      password: '',
    };

    if (!formData.email) {
      valid = false;
      newErrors.email = 'Email is required';
    }

    if (!formData.password) {
      valid = false;
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ( formData.secreteKey==="Item") {
      // Redirect to admin page after successful form submission
  
      navigate("/dashboard/admin")
    } 
  else  if ( formData.secreteKey==="Student") {
      // Redirect to admin page after successful form submission
  
      navigate("/dashboard/studentlist")
    }
    else {
      console.log('Admin login failed');
      alert('Admin login failed')
    }
  };

  return (
   
    <>
     <h2>Admin login</h2>
      <ListItem button onClick={handleOpenDialog} component={RouterLink} to="#" className='mb-5'>
        <ListItemIcon>
          <FaceIcon />
        </ListItemIcon>
        <ListItemText primary='Admin' />
      </ListItem>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Admin Login</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <div className='mb-3'>
              <TextField
                autoFocus
                margin="dense"
                label="Secrete Key"
                type="password"
                fullWidth
                name="secreteKey"
                value={formData.secreteKey}
                onChange={handleChange}
                error={!!errors.secreteKey}
                helperText={errors.secreteKey}
                placeholder='Enter Secrete Key'
              />
            </div>
           
            <div>
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </div>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AdminNavItem;
