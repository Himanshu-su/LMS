import React from 'react'
// import Card from '../../theme/overrides/Card'
import { Card, CardActionArea } from '@mui/material'
import './style.css'

export const Gridcard = () => {

const imgarray=[
    {
        id:1,
img:'https://s.udemycdn.com/home/top-categories/lohp-category-design-2x-v2.jpg',
name:'Design'
},
{
    id:2,
img:'https://s.udemycdn.com/home/top-categories/lohp-category-development-2x-v2.jpg',
name:'Development'
},
{
    id:3,
img:'https://s.udemycdn.com/home/top-categories/lohp-category-marketing-2x-v2.jpg',
name:'Marketig'
},
{
    id:4,
img:'https://s.udemycdn.com/home/top-categories/lohp-category-it-and-software-2x-v2.jpg',
name:'It and Software'
},
{
    id:5,
img:'https://s.udemycdn.com/home/top-categories/lohp-category-personal-development-2x-v2.jpg',
name:'Personal Development'
},
{
    id:6,
img:'https://s.udemycdn.com/home/top-categories/lohp-category-business-2x-v2.jpg',
name:'Business'
},
{
    id:7,
img:'https://s.udemycdn.com/home/top-categories/lohp-category-photography-2x-v2.jpg',
name:'Photography'
},
{
    id:8,
img:'https://s.udemycdn.com/home/top-categories/lohp-category-music-2x-v2.jpg',
name:'Music'
},]

  return (
    <div>
             <h4>Top Categories</h4>
   <div className="row mt-5 mb-5">
    {imgarray.map((item)=>{
        return (
            <>
             <div className="col-md-3 mb-5" key={item.id}>
              <Card >
            <div className="card-img-container">
                <img src={item.img} className="card-img-top" alt={item.name} />
                </div>
                <div className="card-body text-center m-3">
                  <h5 className="card-title">{item.name}</h5>
                
                </div>
              </Card>
            </div>
            </>
        )
    })}
   </div>
    
    </div>
  )
}


