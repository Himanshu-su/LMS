import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Card, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, Input } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const StudentList = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [studentId, setStudentId] = useState('');
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    studentname: '',
    address: '',
    phone:null,
    dob:'',
    category:''
  });

  const [errors, setErrors] = useState({
    studentname: '',
    address: '',
    phone:null,
    dob:'',
    category:''
  });


  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'phone' && value.length !== 10) {
      setErrors({
        ...errors,
        [name]: 'Phone number must be exactly 10 digits',
      });
    } else if (name === 'studentname' && /\d/.test(value)){
      setErrors({
        ...errors,
        [name]: 'Only alphabets are allowed in the student name',
      });
    }else {
      setErrors({
        ...errors,
        [name]: '', // Clear the error when the phone number format is correct
      });
    }
  
    // Always update the formData state
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  

  // useEffect(()=>{
  //   sessionStordob.removeItem("token")
  // },[])


  

  useEffect(() => {
    const apiUrl = 'http://localhost:4040/users';

    axios.get(apiUrl)
      .then(response => {
        setData(response.data);
        setFilteredData(response.data);
        // toast.success('Data fetched successfully');
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        // toast.error(error.message);
      });
  }, []);

  const columns = [
    { name: 'S.No', selector: (row, index) => index + 1 ,
    // style: { textAlign: 'center', display: 'flex', alignItems: 'center' } 
     },
    { name: 'StudentId', selector: row => row.studentId },
    { 
      name: 'Student Name', 
      selector: row => row.studentname.charAt(0).toUpperCase() + row.studentname.slice(1), 
      sortable: true 
    },
    { name: 'Address', selector: row => row.address },
    { name: 'Phone Number', selector: row => row.phone },
    { name: 'Date of Birth', selector: row => row.dob },
    { name: 'Category', selector: row => row.category.toUpperCase() },
    {
      name: 'Actions',
      cell: (row) => (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <EditIcon  onClick={(e) => handleUpdate(e,row._id)}/>
          <DeleteIcon  onClick={() => handleDelete(row._id)}/>
        </div>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];

  useEffect(() => {
    if (data && data.length > 0) {
      const filteredResult = data.filter(item =>
        item.category.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredData(filteredResult);
    }
  }, [search, data]);

  // update and delete
  const handleUpdate = async (e, id) => {
    console.log(id)
   setStudentId(id)
    setOpenDialog(true);
   
  };
  const handleSubmit = async (e, id) => {
    e.preventDefault(); // Prevent the default form submission
  
    console.log('handleSubmit called'); // Log to check if the function is being called
  
    if (Object.values(errors).some(error => error)) {
      console.log('Form validation failed:', errors); // Log the validation errors
      return; // Exit early if errors are present
    }
  
    const payload = {
      studentname: formData.studentname,
      address: formData.address,
      phone: formData.phone,
      dob: formData.dob,
      category: formData.category,
    };
  
    try {
      // Make an update request to the API
      console.log('Sending update request:', payload); // Log the payload being sent to the API
      const response = await axios.patch(
        `http://localhost:4040/users/update/${id}`,
        payload
      );
      // Show success message
      // toast.success('Student detail updated successfully');
  
      // Refresh the data after update
      const updatedData = await axios.get('http://localhost:4040/users');
      setData(updatedData.data);
      setFilteredData(updatedData.data);
      setOpenDialog(false);
    } catch (error) {
      console.error('API Error:', error);
      // Show error message
      // toast.error('Failed to update student detail');
    }
  };
  
  // category
  useEffect(() => {
    // Fetch all categories on component mount
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:4040/category');
        setCategories(response.data);
      } catch (error) {
        // Handle error
        console.error('Error fetching categories:', error);
      }
    };
    fetchCategories();
  }, []);


  const handleCloseDialog = () => {
    setFormData({
      studentname: '',
      address: '',
      phone:null,
      dob:'',
      category:''})
    // Close the dialog
    setOpenDialog(false);
  };

  const handleDialogSubmit = () => {
    // Handle submission logic here
    // Close the dialog after submission
    setOpenDialog(false);
  };

  // search clear
  const handleClear = () => {
    setSearch('');
    setFilteredData(data);
  };


  const handleDelete = (id) => {
    // Send a DELETE request to the API endpoint with the student's id
    axios.delete(`http://localhost:4040/users/delete/${id}`)
      .then(response => {
        // toast.success('Student deleted successfully');
        // Refresh the data after deletion
        axios.get('http://localhost:4040/users')
          .then(response => {
            setData(response.data);
            setFilteredData(response.data);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
            // toast.error(error.message);
          });
      })
      .catch(error => {
        console.error('Error deleting student:', error);
        // toast.error('Failed to delete student');
      });
  };

 
  return (
    <div>
      <h2 className='mb-5'>Student List</h2>
      <Card>
        <DataTable
          columns={columns}
          data={filteredData}
          fixedHeader
          fixedHeaderScrollHeight='500px'
          pagination
          highlightOnHover
          subHeader
          subHeaderComponent={
            <div className="d-flex align-items-center">
            <select
    className='w-100 form-control me-4'
    value={search}
    onChange={e => setSearch(e.target.value)}
  >
    {/* <option value="">Search By Category</option>
    <option value="General">General</option>
    <option value="OBC">OBC</option>
    <option value="SC">SC</option>
    <option value="ST">ST</option>
    <option value="Others">Others</option> */}
    <option value="">Select category</option>
   
   {categories.map(category => (
     <option key={category._id} value={category.category}>{category.category}</option>
   ))}

  </select>
  <button onClick={handleClear} className="btn btn-secondary ml-3">Clear</button>
  </div>
          }
          
        />
        
      </Card>

       {/* Dialog for update */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Edit Student</DialogTitle>
        <DialogContent className='pt-5 p-3'>
        
          <div>
            {/* <label htmlFor="html">HTML</label><br></br> */}
            <div><h5>Student Name:</h5></div>
            <div className='inputbox '>
            <Input
            style={{   width: '350px',}}
  type="text"
  id="studentname"
  name="studentname"
  label="Student Name"
  value={formData.studentname}
  onChange={handleChange}
  placeholder="Enter Student Name"
  fullWidth
  InputProps={{
    inputProps: {
      pattern: "[A-Za-z ]+", // Accepts only alphabets and spaces
    },
  }}
  className='mt-3'
/>

</div>

            <div className="error" style={{color:'red'}}>{errors.studentname}</div>
          </div><br />
          <div>
            <div><h5>Address:</h5></div>
            <Input
            style={{   width: '350px',}}
type='text'
  id="address"
  name="address"
  label="Student Address"
  value={formData.address}
  onChange={handleChange}
  placeholder="Enter Address"
  fullWidth
  InputProps={{
    inputProps: {
      pattern: "[A-Za-z ]+", // Accepts only alphabets and spaces
    },
  }}
  className='mt-3'
/>
            <div className="error" style={{color:'red'}}>{errors.address}</div>
          </div><br />
          {/* loction */}
          <div>
            <div><h5>Phone No:</h5></div>
            <Input
            style={{   width: '350px',}}
  type="number"
  id="phone"
  name="phone"
  label="Student Phone No."
  value={formData.phone}
  onChange={handleChange}
  placeholder="Enter Phone Number"
  fullWidth
  InputProps={{
    inputProps: {
      pattern: "[A-Za-z ]+", // Accepts only alphabets and spaces
    },
  }}
  className='mt-3'
/>
            <div className="error" style={{color:'red'}}>{errors.phone}</div>
          </div><br />
          {/* age */}
          <div>
            <div><h5>Date of Birth:</h5></div>
            <Input
            style={{   width: '350px',}}
  type="date"
  id="dob"
  name="dob"
  // label="Student Name"
  value={formData.dob}
  onChange={handleChange}
  // placeholder="Enter dob"
  fullWidth
  InputProps={{
    inputProps: {
      pattern: "[A-Za-z ]+", // Accepts only alphabets and spaces
    },
  }}
  className='mt-3'
/>
            <div className="error" style={{color:'red'}}>{errors.dob}</div>
          </div><br />
          {/* category */}
          <div>
  <div><h5>Category:</h5></div>
  <select
    id="category"
    name="category"
    value={formData.category}
    onChange={handleChange}
    style={{
      width: '350px',
      height: '50px',
      border: '1px solid gray',
      borderRadius: "5px",
      marginTop: '5px',
      paddingLeft: '15px'
    }}
    className='mt-3'
  >
    <option value="">Select category</option>
    <option value="General">General</option>
    <option value="OBC">OBC</option>
    <option value="SC">SC</option>
    <option value="ST">ST</option>
    <option value="Others">Others</option>

  </select>
  <div className="error" style={{ color: 'red' }}>{errors.category}</div>
</div><br />
          <div>
         
              <button type="submit"
              style={{
                width: '350px',
                height: '50px',
                border: '2px solid blue',
                borderRadius: "5px",
                marginTop: '5px',
                color: 'white',
                backgroundColor: 'blue'
                ,fontSize:'18px'
               
                
              }}
              className='btn'
              onClick={(e)=>handleSubmit(e,studentId)}
            >Submit</button>
          
      
          </div>
  
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleCloseDialog}>Cancel</Button> */}
          {/* <Button onClick={handleDialogSubmit}>Submit</Button> */}
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default StudentList;
