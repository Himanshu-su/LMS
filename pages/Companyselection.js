import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, Select, MenuItem, Button, InputLabel } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const CompanySelection = () => {
  const [open, setOpen] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState('');
  const navigate = useNavigate(); 

  const companyname = [
    {
      name: 'Vender1',
    },
    {
      name: 'Vender2',
    },
    {
      name: 'Vender3',
    },
  ];

  useEffect(() => {
    // Open the dialog when the component mounts
    setOpen(true);
  }, []); // Empty dependency array ensures the effect runs only once

  const handleCompanyChange = (event) => {
    setSelectedCompany(event.target.value);
  };

  const handleProcessClick = () => {
    // Implement your logic for handling the "Process" button click here
   
    setOpen(false); // Close the dialog after processing
    navigate('/dashboard/app');
  };

  return (
    <div>
        <div
        style={{ maxWidth: '400px', height: '600px' }}
        >
      <Dialog open={open} >
        <DialogTitle>Select Company</DialogTitle>
        <DialogContent>
        <InputLabel htmlFor="company-name"
        style={{color:'black'}}
        >Company Name</InputLabel>
          <Select
          style={{
            width:'300px'
          }}
            value={selectedCompany}
            onChange={handleCompanyChange}
            label="Select Company"
          >
            {companyname.map((company) => (
              <MenuItem key={company.name} value={company.name}>
                {company.name}
              </MenuItem>
            ))}
          </Select>
          <div style={{ marginTop: '16px' }}>
            <Button variant="contained" color="primary" onClick={handleProcessClick}
            style={{
                width:'100px',
            
                marginLeft:'90px'}}
            >
              Click
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      </div>

    </div>
  );
};
