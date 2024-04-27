import { Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import './style.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { toast } from 'react-toastify';

export const Wislist = () => {

const [wishlistItem,setWishlistItem]=useState([])

useEffect(()=>{
const itemcard=JSON.parse(localStorage.getItem('wishlistItem'))||[]
setWishlistItem(itemcard)

},[])

const updateDeleteCard=(e,_id)=>{
  e.preventDefault()
const deletecard=wishlistItem.filter((item)=>item._id!==_id)
setWishlistItem(deletecard)
localStorage.setItem('wishlistItem',JSON.stringify(deletecard))
}

const addToCart = (_id) => {
  const cartItems = JSON.parse(localStorage.getItem('addtocart')) || [];
  const existingItem = cartItems.find((item) => item._id === _id);

  if (existingItem) {
    alert('Item already exists into Cart Item')
  } else {
    const newItem = wishlistItem.find((item) => item._id === _id);
    if (newItem) {
      const updatedCartItems = [...cartItems, newItem];
      localStorage.setItem('addtocart', JSON.stringify(updatedCartItems));
      // toast.success('Item added to cart');
      alert('Item added to Cart Item')

    }
  }
};
  return (
    <div className='container'>
   
      <div className="display-flex" style={{
                // border: '1px solid red',
                display: 'flex',
                alignItems: 'center' // Align items vertically

            }}>
                <FavoriteBorderIcon  className='mb-2'/>
                <Typography variant="h4" gutterBottom 
                className='ms-2'
                style={{ color: 'black' }}>
                Wishlist
                </Typography>
            </div>
   


      <div className="row">
                {/* Render wishlist items with four columns per row */}
                {wishlistItem.map((item, index) => (
                    <div key={index} className="col-md-3 mb-5">
                        <SwiperSlide id='navswiperslide' className="swiper-slide">
                            <img id='navitemimg' src={item.img} alt="img" />
                            <div className="card-body mt-3 mb-3 text-center">
                                <h6 className="card-text">{item.heading}</h6>
                                <hr className="dropdown-divider"/>
                                <div class="row gx-2 mt-3 ">
    <div class="col-md-6 mb-2">
     <button id='wishlistbtn' class="p-2 " onClick={() => addToCart(item._id)}>Add to Cart</button>
    </div>
    <div class="col-md-6">
      <button id='wishlistbtn'  class="p-2" onClick={(e)=>updateDeleteCard(e,item._id)}>Delete</button>
    </div>
  </div>
                            </div>
                        </SwiperSlide>
                    </div>
                ))}
            </div>
    </div>
  )
}


