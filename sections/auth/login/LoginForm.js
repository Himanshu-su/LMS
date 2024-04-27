import { useEffect, useState,
  // createContext, useContext 
} from 'react';
import { useNavigate } from 'react-router-dom';
// import  {useTokenContext} from 'src/pages/Tokenprovider';
import axios from 'axios';
// import TokenProvider from '../pages/TokenProvider';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { useTokenContext } from '../../../pages/TokenProvider';










// ----------------------------------------------------------------------


export default function LoginForm () {
  const navigate = useNavigate();
// const {setToken}=useTokenContext()
// console.log(setToken)
// console.log(setToken)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });


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

  // useEffect(()=>{
  //   sessionStorage.removeItem("token")
  // },[])

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        // Make the API POST request here
        // const response = await axios.post('https://dev.techstreet.in/vmsglen/public/api/login', {
          // const response = await axios.post('https://dev.bizprocure.com/api/login', {
            const response = await axios.post('http://localhost:4040/user/login', {
        email: formData.email,
          password: formData.password,
        });

        // Handle the API response as needed
        console.log('API login Response:', response.data);
        navigate(('/dashboard/app'))
        // console.log('Login successful. Storing token in sessionStorage:', response.data.access_token);
       sessionStorage.setItem("token", response.data.token);
      // localStorage.setItem("token", response.data.access_token);
      // sessionStorage.setItem("token", '52|jXkHYURMG2gKPzgNXsA5SUoHBocBceZUPQYFttVW');
      // localStorage.setItem("token", '52|jXkHYURMG2gKPzgNXsA5SUoHBocBceZUPQYFttVW');
        // console.log(`token:${response.data.access_token}`)
        //  setToken(response.data.access_token)
        
        // navigate('/companyselection')
        // navigate("/dashboard/app")
        // sessionStorage.removeItem("token")
// toast.success("success login")
        // Redirect to a new page or perform other actions after successful login
      } catch (error) {
        console.error('API Error:', error);
        toast.error(error.response.data.message)

        // Handle API error, e.g., display an error message to the user
      }
    } else {
      // Form validation failed, do nothing or show error messages
      navigate('/signup')
    }
  };


  return (
    <div>
      
      <div>
        {/* <h2>Login</h2> */}

        <form onSubmit={handleSubmit}>
          <div>
            {/* <label htmlFor="html">HTML</label><br></br> */}
            <div><p>Email:</p></div>
            <div className='inputbox'>
  <input
    type="text"
    id="email" // Add the 'id' attribute here
    name="email"
    value={formData.email}
    onChange={handleChange}
    className='input inputbox'
    placeholder='Enter Email'
    style={{
      width: '350px',
      height: '50px',
      border: '1px solid gray',
      borderRadius: "5px",
      marginTop: '5px',
      paddingLeft: "15px"
    }}
  />
</div>

            <div className="error" style={{color:'red'}}>{errors.email}</div>
          </div><br />
          <div>
            <div><p>Password:</p></div>
            <input 
              type="password"
              id="password" // Add an 'id' attribute here
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder='Enter Password'
              style={{
                width: '350px',
                height: '50px',
                border: '1px solid gray',
                borderRadius: "5px",
                marginTop: '5px',
                paddingLeft:'15px'
              }} 
              className='input'
              />
            <div className="error" style={{color:'red'}}>{errors.password}</div>
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
            >Login</button>
            <ToastContainer/>
          </div>
        </form>
      </div>
    </div>
  );
}
//  export default LoginForm;
