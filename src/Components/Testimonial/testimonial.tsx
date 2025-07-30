"use client";

import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import { MoveLeft, MoveRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
import { useRef, useState } from "react";

const TestimonialsSection = () => {
  const sliderRef = useRef<any>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderSettings = {
    dots: true,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          variableWidth: false,
          slidesToShow: 1,
        },
      },
    ],
  };

  const handleDotClick = (index: number) => {
    sliderRef.current?.slickGoTo(index); // Go to the slide based on the clicked dot
  };

  const handlePrevClick = () => {
    sliderRef.current?.slickPrev();
  };

  const handleNextClick = () => {
    sliderRef.current?.slickNext();
  };

  const testimonialsData = [
    {
      id: 1,
      message:
        "“We are pleased with the quality and comprehensiveness of the outcomes, as well as the ongoing support. The team recognized the limitations of mobile and web app development, avoiding overly flashy designs that complicate front-end coding.”",
      authorName: "Khaled Belkadi",
      authorRole: "Project Manager",
      authorImage: "/images/author-avatar.svg",
    },
    {
      id: 2,
      message:
        "“We are pleased with the quality and comprehensiveness of the outcomes, as well as the ongoing support. The team recognized the limitations of mobile and web app development, avoiding overly flashy designs that complicate front-end coding.”",
      authorName: "Sarah Johnson",
      authorRole: "Product Owner",
      authorImage: "/images/author-avatar.svg",
    },
    {
      id: 3,
      message:
        "T“We are pleased with the quality and comprehensiveness of the outcomes, as well as the ongoing support. The team recognized the limitations of mobile and web app development, avoiding overly flashy designs that complicate front-end coding.”",
      authorName: "Michael Smith",
      authorRole: "CTO",
      authorImage: "/images/author-avatar.svg",
    },
  ];

  const testiMonialShapeRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (testiMonialShapeRef.current) {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;

        // Calculate movement based on mouse position (normalized to -1 to 1)
        const xPercent = (clientX / innerWidth - 0.5) * 2;
        const yPercent = (clientY / innerHeight - 0.5) * 2;

        // Apply movement with reduced intensity for subtle effect
        const moveX = xPercent * 20; // Max 20px movement
        const moveY = yPercent * 15; // Max 15px movement

        testiMonialShapeRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
      }
    };

    // Add event listener
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      className="testimonials-area testimonail"
      style={{ background: "url(/images/testimonial-section-bg.png)" }}
    >
      <Image
        ref={testiMonialShapeRef}
        src="/images/testimonail-shape.png"
        width={373}
        height={324}
        alt="Contact Shape"
        className="testimonial-shape"
      />

      <Container>
        <Row className="align-items-center justify-content-between">
          <Col md={4} xs={12}>
            <div className="section-title-wrapper">
              <h2 className="section-title">
                What Clients <br />
                <span>
                  L
                  <Image
                    src="/images/o.png"
                    width={66}
                    height={30}
                    alt="o.png"
                  />
                  ve{" "}
                </span>
                to Tell
              </h2>
            </div>
          </Col>
          <Col md={4} xs={12} className="text-end">
            <div className="testimonial-right">
              <div className="trust-pilot">
                <h5>Our Happy Customer</h5>
              </div>
              <p>
                <Image
                  src="/images/trust-pilot.svg"
                  width={75}
                  height={15}
                  alt="trust-pilot"
                  className="me-2"
                />
                5.0 (8.9k Reviews)
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="custom-border no-margin-right">
        <Slider {...sliderSettings} ref={sliderRef}>
          {/* Slide 1 */}
          <div>
            <div
              className="single-testimonial-item p-4 text-white rounded"
              style={{
                backgroundImage: "url(/images/testimonial-bg.png)",
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
              }}
            >
              <Image
                src="/images/quote-left.svg"
                width={35}
                height={35}
                alt="quote"
                className="mb-3"
              />
              <p className="message">
                “We are pleased with the quality and comprehensiveness of the
                outcomes, as well as the ongoing support. The team recognized
                the limitations of mobile and web app development, avoiding
                overly flashy designs that complicate front-end coding.”
              </p>
              <div className="author-meta d-flex align-items-center gap-3 mt-4">
                <Image
                  src="/images/author-avatar.svg"
                  width={50}
                  height={50}
                  alt="Khaled Belkadi"
                  className="rounded-circle"
                />
                <div className="author-info">
                  <h4 className="mb-0">Khaled Belkadi</h4>
                  <p className="mb-0">Project Manager</p>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2 */}

          <div>
            <div
              className="single-testimonial-item position-relative p-4 text-white rounded d-flex justify-content-center align-items-center"
              style={{
                backgroundImage: "url(/testi1.png)",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top",
                minHeight: "300px",
                clipPath: "polygon(100% 0, 100% 90%, 90% 100%, 0 100%, 0 0)",
              }}
            >
              <div
                className="play-button d-flex justify-content-center align-items-center"
                style={{
                  width: "64px",
                  height: "64px",
                  backgroundColor: "rgba(255,255,255,0.2)",
                  borderRadius: "50%",
                  cursor: "pointer",
                  zIndex: 2,
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="white"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>

              {/* Author Info Fixed at Bottom */}
              <div
                className="author-meta position-absolute"
                style={{
                  bottom: "24px",
                  left: "24px",
                  right: "24px",
                }}
              >
                <Image
                  src="/images/author-avatar.svg"
                  width={50}
                  height={50}
                  alt="Sarah Johnson"
                  className="rounded-circle author-avatar"
                />
                <div className="author-info">
                  <h4 className="mb-0">Sarah Johnson</h4>
                  <p className="mb-0">Product Owner</p>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 3 */}

          <div
            className="single-testimonial-item3 position-relative"
            style={{
              backgroundImage: "url(/images/testimonial-bg.png)",
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }}
          >
            <Row>
              <Col xl={7}>
                <div className=''>
                  <Image
                    src="/images/quote-left.svg"
                    width={35}
                    height={35}
                    alt="quote"
                    className="mb-3"
                  />
                  <p className="message">
                    “We are pleased with the quality and comprehensiveness of
                    the outcomes, as well as the ongoing support. The team
                    recognized the limitations of mobile and web app
                    development, avoiding overly flashy designs that complicate
                    front-end coding.”
                  </p>
                  <div className="author-meta ">
                    <Image
                      src="/images/author-avatar.svg"
                      width={50}
                      height={50}
                      alt="Sarah Johnson"
                      className="rounded-circle"
                    />
                    <div className="author-info">
                      <h4 className="mb-0">Sarah Johnson</h4>
                      <p className="mb-0">Product Owner</p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xl={5}>
                <div
                  className="position-relative p-4 mt-4 text-white rounded d-flex justify-content-center align-items-center"
                  style={{
                    backgroundImage: "url(/testi2.png)",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    minHeight: "300px",
                    height: "100%",
                    width: "100%",
                    maxWidth: "300px",
                    clipPath: "polygon(100% 0, 100% 83%, 83% 100%, 0 100%, 0 0)",
                  }}
                >
                  <div
                    className="play-button d-flex justify-content-center align-items-center"
                    style={{
                      width: "64px",
                      height: "64px",
                      backgroundColor: "rgba(255,255,255,0.2)",
                      borderRadius: "50%",
                      cursor: "pointer",
                      zIndex: 2,
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      fill="white"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Slider>
      </Container>
      <Container>
        <Row className="text-center">
          <Col xl={12}>
            <div className="testi-navigation">
              <div className="">
                {testimonialsData.map((_, index) => (
                  <span
                    key={index}
                    className={`testi-dot ${
                      index === currentSlide ? "active" : ""
                    }`}
                    onClick={() => handleDotClick(index)}
                  />
                ))}
              </div>
              <div className="testi-nav">
                <span
                  className="testi-arrow-left"
                  onClick={handlePrevClick}
                  style={{ cursor: "pointer" }}
                >
                  <MoveLeft />
                </span>
                <span
                  className="testi-arrow-right"
                  onClick={handleNextClick}
                  style={{ cursor: "pointer" }}
                >
                  <MoveRight />
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TestimonialsSection;
