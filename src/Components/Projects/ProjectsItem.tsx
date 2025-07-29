'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import 'slick-carousel/slick/slick.css'
import Slider from 'react-slick'
import Primage1 from '../../assets/img/pro_1.jpg'

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
    <div className='project_wrapper'>
      <Slider {...settings}>
        <div className='project_item'>
          <div className='pr_image'>
            <Image src={Primage1} alt='pr1' />
          </div>
          <div className='pr_content'>
            <Link href='#'>
              <h3>FinVault – Personal Finance App</h3>
            </Link>
            <p>
              We designed an intuitive mobile experience for FinVault, helping
              user
            </p>
          </div>
        </div>
        <div className='project_item'>
          <div className='pr_image'>
            <Image src={Primage1} alt='pr1' />
          </div>
          <div className='pr_content'>
            <Link href='#'>
              <h3>FinVault – Personal Finance App</h3>
            </Link>
            <p>
              We designed an intuitive mobile experience for FinVault, helping
              user
            </p>
          </div>
        </div>
        <div className='project_item'>
          <div className='pr_image'>
            <Image src={Primage1} alt='pr1' />
          </div>
          <div className='pr_content'>
            <Link href='#'>
              <h3>FinVault – Personal Finance App</h3>
            </Link>
            <p>
              We designed an intuitive mobile experience for FinVault, helping
              user
            </p>
          </div>
        </div>
        <div className='project_item'>
          <div className='pr_image'>
            <Image src={Primage1} alt='pr1' />
          </div>
          <div className='pr_content'>
            <Link href='#'>
              <h3>FinVault – Personal Finance App</h3>
            </Link>
            <p>
              We designed an intuitive mobile experience for FinVault, helping
              user
            </p>
          </div>
        </div>
      </Slider>
    </div>
  )
}

export default ProjectsItem
