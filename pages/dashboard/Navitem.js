import React, { useEffect, useState } from 'react'
import { Grid, Container, Typography, Card, Tabs, Tab } from '@mui/material';
import {GrLocation} from 'react-icons/gr'
import  { useRef} from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import './style.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import '..'

// import required modules
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Navitem = ({addToWhishlist}) => {
    const [swiperRef, setSwiperRef] = useState(null);
    const [wishlistCount, setWishlistCount] = useState(0);
    const [toastQueue, setToastQueue] = useState([]);
    const [formcardarray,setformcardarray]=useState([])

    const token=localStorage.getItem('token')
    console.log(token)

    // const cardarray=[
    //     {
    //         id:'1',
    //         img:'https://plus.unsplash.com/premium_photo-1661670262286-d6a32dbb3c78?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8b25saW5lJTIwY291cnNlJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D',
    //         heading:'Wonderful Kerala Family Holiday Package for 6 Nights Price on Request 6 Nights / 7 Days',
    //   iconwhistlist:'FavoriteBorderIcon'
    //     },
    //     {
    //         id:'2',
    //         img:'https://plus.unsplash.com/premium_photo-1661771564227-1d8484e32c8f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8b25saW5lJTIwY291cnNlJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D',
    //         heading:'Wonderful Kerala Family Holiday Package for 6 Nights Price on Request 6 Nights / 7 Days',
    //   iconwhistlist:'FavoriteBorderIcon'
    //     },
    //     {
    //         id:'3',
    //         img:'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG9ubGluZSUyMGNvdXJzZSUyMGltYWdlfGVufDB8fDB8fHww',
    //         heading:'Wonderful Kerala Family Holiday Package for 6 Nights Price on Request 6 Nights / 7 Days',
    //   iconwhistlist:'FavoriteBorderIcon'
    //     },
    //     {
    //         id:'4',
    //         img:'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8b25saW5lJTIwY291cnNlJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D',
    //         heading:'Wonderful Kerala Family Holiday Package for 6 Nights Price on Request 6 Nights / 7 Days',
    //   iconwhistlist:'FavoriteBorderIcon'
    //     },
    //     {
    //         id:'5',
    //         img:'https://plus.unsplash.com/premium_photo-1661780249818-89d56c3072b1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG9ubGluZSUyMGNvdXJzZSUyMGltYWdlfGVufDB8fDB8fHww',
    //         heading:'Wonderful Kerala Family Holiday Package for 6 Nights Price on Request 6 Nights / 7 Days',
    //   iconwhistlist:'FavoriteBorderIcon'
    //     },
    //     {
    //         id:'6',
    //         img:'https://plus.unsplash.com/premium_photo-1661686592779-ac44c4170d9e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG9ubGluZSUyMGNvdXJzZSUyMGltYWdlfGVufDB8fDB8fHww',
    //         heading:'Wonderful Kerala Family Holiday Package for 6 Nights Price on Request 6 Nights / 7 Days',
    //   iconwhistlist:'FavoriteBorderIcon'
    //     }
    // ]
    useEffect(() => {
      const token = sessionStorage.getItem("token"); // Assuming you have the token stored in sessionStorage
    
      // Make sure to prepend 'http://' or 'https://' to your URL
      const apiUrl = 'http://localhost:4040/item';
    
      axios.get(apiUrl,
      //    {
      //   headers: { Authorization: token }
      // }
      )
      .then(response => {
        // Handle the response data here
        console.log(response);
        setformcardarray(response.data)
      })
      .catch(error => {
        // Handle any errors
        console.error('Error fetching data:', error);
      });
    }, []); 
  //   useEffect(() => {
  //     displayToast(); // Initial display of toast
  // }, [toastQueue]); // Re-render whenever toastQueue changes
  let alreadyExistsToastDisplayed = false; 
    const addtocart=(_id)=>{
      const addtocard = formcardarray.find(item => item._id === _id);
      if (addtocard ) {
          // Retrieve existing wishlist items from local storage
          const existingCartItem = JSON.parse(localStorage.getItem('addtocart')) || [];
  
          // Check if the card with the given id already exists in the wishlist
          const isAlreadyInWishlist = existingCartItem.some(item => item._id === _id);
  
          if (!isAlreadyInWishlist) {
              // Add the new card to the existing wishlist items
              const updatedCartItem = [...existingCartItem, addtocard ];
              // Save the updated wishlist items to local storage
              localStorage.setItem('addtocart', JSON.stringify(updatedCartItem));
         
            // Show toast notification with the wishlist count
            // toast.success('Item added to Cart Item');
            alert('Item added to Cart Item')
       
            }
            else {
              if (!alreadyExistsToastDisplayed) {
                  alreadyExistsToastDisplayed = true; // Update the flag
                  // setTimeout(() => {
                      // toast.error('Item already exists in Cart Item');
                      alert('Item already exists into Cart Item')
                      alreadyExistsToastDisplayed = false; // Reset the flag after displaying the toast
                  // }, 2000);
              }
          }
      }
    }

    
    const addToWishlist = (_id) => {
      // Find the card with the given id
      const card = formcardarray.find(item => item._id === _id);
      if (card) {
          // Retrieve existing wishlist items from local storage
          const existingWishlistItems = JSON.parse(localStorage.getItem('wishlistItem')) || [];
  
          // Check if the card with the given id already exists in the wishlist
          const isAlreadyInWishlist = existingWishlistItems.some(item => item._id === _id);
  
          if (!isAlreadyInWishlist) {
              // Add the new card to the existing wishlist items
              const updatedWishlistItems = [...existingWishlistItems, card];
              // Save the updated wishlist items to local storage
              localStorage.setItem('wishlistItem', JSON.stringify(updatedWishlistItems));
              setWishlistCount(updatedWishlistItems.length);

              // Show toast notification with the wishlist count
              toast.success('Item added to wishlist');
       
            }
            else {
              if (!alreadyExistsToastDisplayed) {
                  alreadyExistsToastDisplayed = true; // Update the flag
                  setTimeout(() => {
                      toast.error('Item already exists in wishlist');
                      alreadyExistsToastDisplayed = false; // Reset the flag after displaying the toast
                  }, 1000);
              }
          }
      }
  };
  


  return (
    <div>
        <div className="container">
       <div className="row p-5"  >
          <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={4}
        centeredSlides={false}
        spaceBetween={20}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[ Navigation]}
        className="mySwiper"
      >

    
              {/* 1st swiper */}

{formcardarray.map((item)=>{
    return(
        <>
          <SwiperSlide id='navswiperslide' className="swiper-slide">
      <img id='navitemimg' src={item.img} alt="img" />
      <div className="card-body mt-3 mb-3 text-center">
        <h6 className="card-text">{item.heading}</h6>
        <hr className="dropdown-divider"/>
    
        <div className="row ">
            <div className="col-md-7 mt-3  ">
      
            <button type="button" className="btn " id='navcardbtn' 
             onClick={() => addtocart(item._id)}
            >Add to Cart</button>
     
            </div>
            <div className="col-md-4 mt-3  hoverblue ">
    <FavoriteBorderIcon 
        id="FavoriteBorderIcon"
        onClick={() => addToWishlist(item._id)}
        style={{ backgroundColor: 'transparent' }} 
        className='hoverblue'
    />
</div>

        </div>
       
      </div>
    </SwiperSlide>
        </>
    )
})}
  </Swiper></div>
    </div>
   
            <ToastContainer /> 
    </div>
  )
}

export default Navitem
