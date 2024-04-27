import { Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { SwiperSlide } from 'swiper/react';
import './style.css'

export const Addtocart = () => {

    const [addtocart,setaddtocart]=useState([])

    useEffect(()=>{
    const itemcard=JSON.parse(localStorage.getItem('addtocart'))||[]
    setaddtocart(itemcard)
    
    },[])

    const updateDeleteCard=(e,_id)=>{
        e.preventDefault()
      const deletecart=addtocart.filter((item)=>item._id!==_id)
      setaddtocart(deletecart)
      localStorage.setItem('addtocart',JSON.stringify(deletecart))
      }
      

  return (
    <div>
      <div className="container">
      <div className="display-flex" style={{
                // border: '1px solid red',
                display: 'flex',
                alignItems: 'center' // Align items vertically

            }}>
                <ShoppingCartIcon className='mb-2'/>
                <Typography variant="h4" gutterBottom 
                className='ms-2'
                style={{ color: 'black' }}>
                    Cart Items
                </Typography>
            </div>



      <div className="row">
                {/* Render wishlist items with four columns per row */}
                {addtocart.map((item, index) => (
                    <div key={index} className="col-md-3 mb-5">
                        <SwiperSlide id='navswiperslide' className="swiper-slide">
                            <img id='navitemimg' src={item.img} alt="img" />
                            <div className="card-body mt-3 mb-3 text-center">
                                <h6 className="card-text">{item.heading}</h6>
                                <hr className="dropdown-divider"/>
                                <div class="row gx-2 mt-3 ">
    <div class="col mb-2">
     <button id='addtocartbtn' class="p-2 ">Checkout</button>
    </div>
    <div class="col">
      <button id='addtocartbtn'  class="p-2" onClick={(e)=>updateDeleteCard(e,item._id)}>Delete</button>
    </div>
  </div>
                            </div>
                        </SwiperSlide>
                    </div>
                ))}
            </div>
   
      </div>
    </div>
  )
}


