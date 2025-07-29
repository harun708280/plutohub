'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import serimage1 from '../../assets/img/service_img1.jpg'
import check from '../../assets/img/check.svg'
import Buttons from '../Banner/Buttons'
import 'slick-carousel/slick/slick.css'
import Slider from 'react-slick'

const ProjectsItem = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <div className='service_wrapper'>
      <Slider {...settings}>
        <div className='service_flip_item'>
          <div className='flip_box_font'>
            <div className='ser_image'>
              <Image src={serimage1} alt='sr1' />
            </div>
            <div className='ser_content'>
              <Link href='#'>
                <h3>WordPress Development</h3>
              </Link>
            </div>
          </div>
          <div className='flip_box_back'>
            <div className='middle'>
              <Link href='#'>
                <h3>WordPress Development</h3>
              </Link>
              <p>
                We Create Unique Digital Experiences For Global Brands By
                Integrating AI, Innovative Design, And advanced Technology.
              </p>
              <ul className='list-unstyled'>
                <li>
                  <Image src={check} alt='check' />
                  Travel App
                </li>
                <li>
                  <Image src={check} alt='check1' />
                  Ecommerce App
                </li>
                <li>
                  <Image src={check} alt='check2' />
                  Medical App and more.
                </li>
              </ul>
              <Buttons links='#' btnText='Get a Service' />
            </div>
          </div>
        </div>
        <div className='service_flip_item'>
          <div className='flip_box_font'>
            <div className='ser_image'>
              <Image src={serimage1} alt='sr1' />
            </div>
            <div className='ser_content'>
              <Link href='#'>
                <h3>Dashboard Design</h3>
              </Link>
            </div>
          </div>
          <div className='flip_box_back'>
            <div className='middle'>
              <Link href='#'>
                <h3>Dashboard Design</h3>
              </Link>
              <p>
                We Create Unique Digital Experiences For Global Brands By
                Integrating AI, Innovative Design, And advanced Technology.
              </p>
              <ul className='list-unstyled'>
                <li>
                  <Image src={check} alt='check' />
                  Travel App
                </li>
                <li>
                  <Image src={check} alt='check1' />
                  Ecommerce App
                </li>
                <li>
                  <Image src={check} alt='check2' />
                  Medical App and more.
                </li>
              </ul>
              <Buttons links='#' btnText='Get a Service' />
            </div>
          </div>
        </div>
        <div className='service_flip_item'>
          <div className='flip_box_font'>
            <div className='ser_image'>
              <Image src={serimage1} alt='sr1' />
            </div>
            <div className='ser_content'>
              <Link href='#'>
                <h3>UI/UX Design</h3>
              </Link>
            </div>
          </div>
          <div className='flip_box_back'>
            <div className='middle'>
              <Link href='#'>
                <h3>UI/UX Design</h3>
              </Link>
              <p>
                We Create Unique Digital Experiences For Global Brands By
                Integrating AI, Innovative Design, And advanced Technology.
              </p>
              <ul className='list-unstyled'>
                <li>
                  <Image src={check} alt='check' />
                  Travel App
                </li>
                <li>
                  <Image src={check} alt='check1' />
                  Ecommerce App
                </li>
                <li>
                  <Image src={check} alt='check2' />
                  Medical App and more.
                </li>
              </ul>
              <Buttons links='#' btnText='Get a Service' />
            </div>
          </div>
        </div>
        <div className='service_flip_item'>
          <div className='flip_box_font'>
            <div className='ser_image'>
              <Image src={serimage1} alt='sr1' />
            </div>
            <div className='ser_content'>
              <Link href='#'>
                <h3>Mobile App Design</h3>
              </Link>
            </div>
          </div>
          <div className='flip_box_back'>
            <div className='middle'>
              <Link href='#'>
                <h3>Mobile App Design</h3>
              </Link>
              <p>
                We Create Unique Digital Experiences For Global Brands By
                Integrating AI, Innovative Design, And advanced Technology.
              </p>
              <ul className='list-unstyled'>
                <li>
                  <Image src={check} alt='check' />
                  Travel App
                </li>
                <li>
                  <Image src={check} alt='check1' />
                  Ecommerce App
                </li>
                <li>
                  <Image src={check} alt='check2' />
                  Medical App and more.
                </li>
              </ul>
              <Buttons links='#' btnText='Get a Service' />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  )
}

export default ProjectsItem
