'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { Container } from 'react-bootstrap'

import question_image from '../../assets/img/question.svg'
import we_make_shape1 from '../../assets/img/we-make-shape1.svg'
import we_make_shape2 from '../../assets/img/we-make-shape2.svg'
import standout_light from '../../assets/img/standout-light.svg'
import standout_long_arrow from '../../assets/img/standout-long-arrow.svg'
import why_we_project from '../../assets/img/why-we-project-image.svg'
import we_drive_icon from '../../assets/img/we-drive-icon.svg'
import work_icon from '../../assets/img/work-icon.svg'
import why_we_project2 from '../../assets/img/why-we-project-image2.svg'

gsap.registerPlugin(ScrollTrigger)

const WhyWe = () => {
  const containerRef = useRef(null) // Ref for .why_we_area

  useEffect(() => {
    const wrapper = containerRef.current.querySelector('.why_we_inner')
    if (!wrapper) return // Ensure wrapper exists

    const totalScrollWidth = wrapper.scrollWidth
    const containerWidth = containerRef.current.offsetWidth
    const scrollDistance = totalScrollWidth - containerWidth
    const extraScroll = 500 // Add 500px extra scroll area

    // Main horizontal scroll animation
    const mainScrollTL = gsap.to(wrapper, {
      x: -scrollDistance,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'center center',
        // end: `+=${scrollDistance}`,
        end: `+=${scrollDistance + extraScroll}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        // Assign an ID to this main ScrollTrigger
        id: 'horizontal-scroll', // <--- IMPORTANT: Give it an ID
        // markers: true, // Uncomment for debugging the main scroll
      },
    })

    // Helper function for animating shapes
    const animateShape = (selector, animationProps) => {
      gsap.from(selector, {
        ...animationProps,
        scrollTrigger: {
          trigger: selector,
          // Link to the main horizontal scroll animation
          containerAnimation: mainScrollTL, // <--- Use the timeline reference directly
          start: 'left center', // Trigger when the element's left edge hits the center of the viewport
          toggleActions: 'play none none reverse', // Play on entry, reverse on exit
          // markers: true, // Uncomment for debugging individual animations
          // scrub: 0.5, // Optional: add a slight scrub to these animations too
        },
      })
    }

    // Animate elements as they enter the viewport horizontally

    animateShape('.we_make_shape1', {
      rotationZ: -90,
      duration: 1,
      ease: 'power2.out',
    })

    animateShape('.we_make_shape2', {
      y: -50,
      duration: 1,
      ease: 'power2.out',
    })

    animateShape('.standout_light', {
      scale: 0.8,
      duration: 1,
      ease: 'back.out(1.7)',
    })

    animateShape('.standout_long_arrow', {
      x: -100,
      duration: 1,
      ease: 'power2.out',
    })

    animateShape('.why_we_project', {
      rotation: 15,
      y: 100,
      duration: 1,
      ease: 'power2.out',
    })

    animateShape('.we_drive_icon', {
      rotation: 15,
      y: 100,
      duration: 1,
      ease: 'power2.out',
    })

    animateShape('.btn-business', {
      rotation: 15,
      y: 100,
      duration: 1,
      ease: 'power2.out',
    })
    animateShape('.letter_o', {
      width: 48,
      duration: 1,
      ease: 'power2.out',
    })

    // Cleanup function for ScrollTrigger instances
    return () => {
      if (mainScrollTL) {
        mainScrollTL.scrollTrigger.kill()
      }
      // All child ScrollTriggers are typically killed when their containerAnimation is killed,
      // but if you create them outside this helper, you might need to kill them individually.
      // For this setup, it's generally handled.
      ScrollTrigger.getAll().forEach((st) => st.kill())
    }
  }, [])

  return (
    <>
      <section className='why_we_area' ref={containerRef}>
        <Container>
          <div className='why_we_inner'>
            <div className='single-slide slide_one'>
              <div className='media-text'>
                <Image src={question_image} alt='question image' />
                <div className='btn-wrap'>
                  <h4>Why we perfect</h4>
                  <h4 className='green'>for your business?</h4>
                </div>
              </div>
              <p>
                From intuitive apps to powerful dashboards, we craft digital
                products that solve real problems and delight users
              </p>
            </div>

            <div className='single-slide slide_two'>
              <Image
                className='we_make_shape1'
                src={we_make_shape1}
                alt='we make shape 1'
              />
              <Image
                className='we_make_shape2'
                src={we_make_shape2}
                alt='we make shape 2'
              />
              <h2>We Make &</h2>
            </div>

            <div className='single-slide slide_three'>
              <Image
                className='standout_light'
                src={standout_light}
                alt='light'
              />
              <div>
                <h2>You Stand Out</h2>
                <Image
                  className='standout_long_arrow'
                  src={standout_long_arrow}
                  alt='long arrow'
                />
              </div>
            </div>

            <div className='single-slide slide_four'>
              <Image
                className='why_we_project'
                src={why_we_project}
                alt='project'
              />
            </div>

            <div className='single-slide slide_five'>
              <div className='text-part'>
                <Image
                  className='we_drive_icon'
                  src={we_drive_icon}
                  alt='we drive icon'
                />
                <h2>We Drive</h2>
              </div>
              <div className='btn-part'>
                <h3 className='green btn-business'>Business</h3>
                <h3 className='yellow'>Growth</h3>
              </div>
            </div>
            <div className='single-slide slide_six'>
              <div className='work-part'>
                <h2>
                  We{' '}
                  <span>
                    W <span className='letter_o'></span>rk
                  </span>{' '}
                  <br /> Like Partners
                </h2>
              </div>
              <Image className='work_icon' src={work_icon} alt='work icon' />
            </div>
            <div className='single-slide slide_seven'>
              <Image
                className='why_we_project2'
                src={why_we_project2}
                alt='project 2'
              />
            </div>
            <div className='extra-scroll-space' />
          </div>
        </Container>
      </section>
    </>
  )
}

export default WhyWe
