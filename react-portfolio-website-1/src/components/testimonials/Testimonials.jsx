import React from 'react'
import './testimonials.css';
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
// import Swiper core and required modules
import {Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const data =[
  {
    avatar:AVTR1,
    name: 'Tina Snow',
    review: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nam perspiciatis quae omnis eius alias consectetur! Aut explicabo, cum est, quidem eius, velit quibusdam quia excepturi suscipit deleniti saepe aliquam.'
  },
  {
    avatar:AVTR2,
    name: 'Shatta Wale',
    review: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nam perspiciatis quae omnis eius alias consectetur! Aut explicabo, cum est, quidem eius, velit quibusdam quia excepturi suscipit deleniti saepe aliquam.'
  },
  {
    avatar:AVTR3,
    name: 'Tina Despite',
    review: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nam perspiciatis quae omnis eius alias consectetur! Aut explicabo, cum est, quidem eius, velit quibusdam quia excepturi suscipit deleniti saepe aliquam.'
  },
  {
    avatar:AVTR4,
    name: 'kwame Despite',
    review: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nam perspiciatis quae omnis eius alias consectetur! Aut explicabo, cum est, quidem eius, velit quibusdam quia excepturi suscipit deleniti saepe aliquam.'
  },
]
const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
       // install Swiper modules
       modules={[Pagination]}
       spaceBetween={50}
       slidesPerView={1}
       pagination={{ clickable: true }}
     >
        {
          data.map(({avatar,name,review},index)=>{
            return (
              <SwiperSlide key={index} className='testimonial'>
              <div className="client__avatar">
                <img src={avatar} ></img></div>
                <h5>{name}</h5>
                <small className='client__review'>
                  {review}
                </small>
                </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials