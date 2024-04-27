import { useEffect, useState,
  // createContext, useContext 
} from 'react';
import { useNavigate } from 'react-router-dom';
// import  {useTokenContext} from 'src/pages/Tokenprovider';
import axios from 'axios';
// import TokenProvider from '../pages/TokenProvider';
import AddIcon from '@mui/icons-material/Add';



import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.css';
import { Avatar, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControlLabel, Input, ListItemText, Radio, RadioGroup, TextField } from '@mui/material';
// import { useTokenContext } from '../../../pages/TokenProvider';










// ----------------------------------------------------------------------


export default function Registration () {
  const navigate = useNavigate();
// const {setToken}=useTokenContext()
// console.log(setToken)
// console.log(setToken)
  const [formData, setFormData] = useState({
    studentname: '',
    address: '',
    phone:null,
    dob:'',
    category:'',
    secretekey:""
  });

  const [errors, setErrors] = useState({
    studentname: '',
    address: '',
    phone:null,
    dob:'',
    category:'',
    secretekey:"",
   
  });

  const [categoryData, setCategoryData] = useState({
    category: '',
  });
  const [openDialog, setOpenDialog] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedValue, setSelectedValue] = useState('user');

  const handleCategoryChange = (e) => {
    const { name, value } = e.target;
    setCategoryData({
      ...categoryData,
      [name]: value,
    });
  };
  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleCategorySubmit = async () => {
    console.log(categoryData.category)
    try {
      // Make a POST request to add the new category
      await axios.post('http://localhost:4040/category/addcategory', { category: categoryData.category });
      
      // Fetch all categories after adding the new one
      const response = await axios.get('http://localhost:4040/category');
      setCategories(response.data);
      setOpenDialog(false);
    } catch (error) {
      // Handle error
      console.error('Error adding category:', error);
    }
  };

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
    
    }
    else {
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
  const validateForm = () => {
    let valid = true;
    const newErrors = {
      studentname: '',
      address: '',
      phone:null,
      dob:'',
      category:''
    };

    if (!formData.studentname) {
      valid = false;
      newErrors.studentname = 'Studentname is required';
    }

    if (!formData.address) {
      valid = false;
      newErrors.address = 'address is required';
    }
    if (!formData.phone) {
      valid = false;
      newErrors.phone = 'phone is required';
    }

    if (!formData.dob) {
      valid = false;
      newErrors.dob = 'dob is required';
    }
    if (!formData.category) {
      valid = false;
      newErrors.category = 'category is requires';
    }

    setErrors(newErrors);
    return valid;
  };

  // useEffect(()=>{
  //   sessionStordob.removeItem("token")
  // },[])

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.values(errors).some(error => error)) {
      return; // Exit early if errors are present
    }else if(selectedValue==='admin' && formData.secretekey!=="Himanshu"){
alert("Invalid or empty secrete key")
    }else{

    const payload = {
      studentname: formData.studentname,
      address: formData.address,
      phone: formData.phone,
      dob: formData.dob,
      category: formData.category,
      selectedValue:selectedValue
    };
  
    if (validateForm()) {
      try {
        const response = await axios.post(
          'http://localhost:4040/users/addstudent',
          payload // Send the payload directly
        );
  
        console.log('API Response:', response);
        // toast.success('Logged in  successfully');
        // navigate('/dashboard/studentlist');
        navigate('/dashboard/app');
      } catch (error) {
        console.error('API Error:', error);
        if (error.response && error.response.status === 400 && error.response.data.msg === 'User already registered') {
          // If user is already registered, show alert
          alert('User already exists');
          navigate('/dashboard/imgauto')
        } else {
          // If other error, show toast error message
          toast.error(error.response.data.message);
        }
      }
    }
  }}
  

  return (
    <div>
      
      <div>
        {/* <h2>Login</h2> */}

        {/* radio button */}
        <div className='mb-2 '>
<RadioGroup value={selectedValue} onChange={handleRadioChange} style={{ flexDirection: 'row' }}>
  <FormControlLabel
    value="user"
    control={<Radio />}
    label="User"
    labelPlacement="top"
  />
  <FormControlLabel
    value="admin"
    control={<Radio />}
    label="Admin"
    labelPlacement="top"
  />
</RadioGroup>

    </div>
        <form onSubmit={handleSubmit}>
          <div>
  
  {/* secret key */}
  {selectedValue === 'admin' && (
  <div className='mb-4'>
    <h5>Secrete Key:</h5>
    <div >
      <Input
        style={{ width: '350px' }}
        type="text"
        id="secretekey"
        name="secretekey"
        label="Secrete Key"
        value={formData.secretekey}
        onChange={handleChange}
        placeholder="Enter Secrete Key"
        fullWidth
        className='mt-3'
      />
    </div>
  </div>
)}
  

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
  {/* <select
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
 
    
  </select> */}
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
   
    {categories.map(category => (
      <option key={category._id} value={category.category}>{category.category}</option>
    ))}
  
 
  </select>
  <Button   style={{
      width: '200px',
      height: '50px',
      // border: '1px solid gray',
      // borderRadius: "5px",
      marginTop: '20px',
      padding: '10px'
    }} className='' onClick={() => setOpenDialog(true)}>
  
  <Avatar>
    <AddIcon/>
  </Avatar>
  <ListItemText primary="Add Category" />
</Button>
  {/* <button className='ms-2' onClick={() => setOpenDialog(true)}>Add Category</button> */}

  {/* Dialog for adding category */}
  <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
  <DialogTitle>Add New Category</DialogTitle>
  <DialogContent>
    <TextField
      autoFocus
      margin="dense"
      id="newCategory"
      name="category"
      label="New Category"
      type="text"
      fullWidth
      value={categoryData.category} // Ensure value is bound to categoryData.category
      onChange={handleCategoryChange} // Make sure handleCategoryChange updates categoryData.category
    />
  </DialogContent>
  <DialogActions>
    <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
    <Button onClick={handleCategorySubmit}>Submit</Button>
  </DialogActions>
</Dialog>
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
            >Sign Up</button>
            <ToastContainer/>
          </div>
        </form>
      </div>
    </div>
  );
}
//  export default LoginForm;
