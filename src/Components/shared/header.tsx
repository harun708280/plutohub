'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Offcanvas, Row } from 'react-bootstrap'
import Buttons from '../Banner/Buttons'

const Header = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <>
      <Offcanvas
        show={show}
        onHide={handleClose}
        responsive='lg'
        placement='end'
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <Image
              src='/images/logo.svg'
              alt='Plutohob'
              width={110}
              height={24}
            />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className='mobile-nav'>
            <nav>
              <ul>
                <li>
                  <Link href='/services'>Services</Link>
                </li>
                <li>
                  <Link href='/about'>About Us</Link>
                </li>
                <li>
                  <Link href='/about'>Projects</Link>
                </li>
                <li>
                  <Link href='/about'>Blog</Link>
                </li>
              </ul>
            </nav>
          </div>
        </Offcanvas.Body>
      </Offcanvas>

      <div className='mobile-header'>
        <Container>
          <Row>
            <Col>
              <div className='header-inside'>
                <div className='mobile-site-logo'>
                  <Link href='/'>
                    <Image
                      src='/images/logo.svg'
                      alt='Plutohob'
                      width={110}
                      height={24}
                    />
                  </Link>
                </div>

                <span className='mobile-menu-trigger' onClick={handleShow}>
                  <Image
                    src='/images/mobile-menu-trigger.svg'
                    alt='mobile menu trigger'
                    width={44}
                    height={44}
                  />
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <header>
        <Container>
          <Row>
            <Col xxl={12}>
              <div className='header-content d-flex align-items-center justify-content-between'>
                <div className='site-logo'>
                  <Link href='/'>
                    <Image
                      src='/images/logo.svg'
                      alt='Plutohob'
                      width={160}
                      height={35}
                    />
                  </Link>
                </div>
                <nav>
                  <ul>
                    <li>
                      <Link href='/services'>Services</Link>
                    </li>
                    <li>
                      <Link href='/about'>About Us</Link>
                    </li>
                    <li>
                      <Link href='/about'>Projects</Link>
                    </li>
                    <li>
                      <Link href='/about'>Blog</Link>
                    </li>
                  </ul>
                </nav>

                <div className='header-btn'>
                  <Buttons links='#' btnText='Let’s Talk' />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
    </>
  )
}

export default Header
