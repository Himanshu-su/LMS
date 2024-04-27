import React from 'react';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

export const Allfooter = () => {
  return (
    <footer className="footer" style={{ backgroundColor: '#D1E8FC', color: '#051C64', padding: '20px 0' }}>
      <div className="container">
       <div className="row">
        <div className="col-md-6 text-center" >
            
            <p  className=''>Follow us:</p>
       
      
        <div className=" display-flex flex-column align-items-end mb-2">
            <div className="" ><Facebook/></div>
            <div className=""><Twitter/></div>
            <div className=""><Instagram/></div>
        </div>
        </div>
        <div className="col-md-6 text-center" >
      <p>Contact us:8858311752</p>  
       <p>Email: example@example.com</p>     
            <p>Phone: 123-456-7890</p>
            <p>Whatsapp No :123-456-7890 </p>
        </div>
       </div>
      </div>
    </footer>
  );
};


