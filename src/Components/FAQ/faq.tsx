'use client'

import { Minus, Plus } from 'lucide-react'
import Image from 'next/image'
import { Accordion, Col, Container, Row } from 'react-bootstrap'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const FaqSection = () => {
  const thumbnailRef = useRef(null)

  useEffect(() => {
    if (thumbnailRef.current) {
      // Create infinite up-down floating animation
      gsap.to(thumbnailRef.current, {
        y: -20, // Move up 20px
        duration: 1.2, // 1.2 seconds duration (faster)
        ease: 'power2.inOut', // Smooth easing
        yoyo: true, // Reverse the animation
        repeat: -1, // Infinite repeat
      })
    }
  }, [])

  return (
    <section
      className='faq-section'
      style={{ backgroundImage: 'url(/images/faq-bg.png)' }}
    >
      <Container>
        <Row className='justify-content-center'>
          <Col xl={5}>
            <div className='section-title'>
              <h2 className='title'>Frequently Asked Questions</h2>

              <div ref={thumbnailRef}>
                <Image
                  src='/images/faq-thumb.png'
                  width={296}
                  height={400}
                  alt='faq-thumb'
                />
              </div>
            </div>
          </Col>
          <Col xl={7}>
            <Accordion defaultActiveKey='0' flush>
              <Accordion.Item eventKey='0'>
                <Accordion.Header>
                  <span className='accordion-title'>
                    How Long Does a Design Project Take?
                  </span>
                  <span className='accordion-icons'>
                    <Plus /> <Minus />
                  </span>
                </Accordion.Header>
                <Accordion.Body>
                  Usually, our design process takes a few weeks, depending on
                  the project's complexity and scope. We begin with thorough
                  research and planning, followed by design iterations and
                  client feedback sessions. This collaborative approach ensures
                  that the final design aligns perfectly with your vision and
                  goals.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey='1'>
                <Accordion.Header>
                  <span className='accordion-title'>
                    Are your apps available on both Android and iOS?
                  </span>
                  <span className='accordion-icons'>
                    <Plus /> <Minus />
                  </span>
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey='2'>
                <Accordion.Header>
                  <span className='accordion-title'>
                    How do you use AI in your apps?
                  </span>
                  <span className='accordion-icons'>
                    <Plus /> <Minus />
                  </span>
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey='3'>
                <Accordion.Header>
                  <span className='accordion-title'>
                    Do you work with partners or accept collaborations?
                  </span>
                  <span className='accordion-icons'>
                    <Plus /> <Minus />
                  </span>
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey='4'>
                <Accordion.Header>
                  <span className='accordion-title'>
                    Can I suggest a feature or report an issue?
                  </span>
                  <span className='accordion-icons'>
                    <Plus /> <Minus />
                  </span>
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default FaqSection
