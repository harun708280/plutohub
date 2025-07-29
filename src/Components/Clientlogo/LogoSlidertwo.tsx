'use client'; 

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

import clientlogo1 from "../../assets/img/client_logo1.png";
import clientlogo2 from "../../assets/img/client_logo2.png";
import clientlogo3 from "../../assets/img/client_logo3.png";
import clientlogo4 from "../../assets/img/client_logo4.png";
import clientlogo5 from "../../assets/img/client_logo5.png";
import clientlogo6 from "../../assets/img/client_logo6.png";
import clientlogo7 from "../../assets/img/client_logo7.png";
import clientlogo8 from "../../assets/img/client_logo8.png";

const ClientlogoData = [
  { id: 1, image: clientlogo1 },
  { id: 2, image: clientlogo2 },
  { id: 3, image: clientlogo3 },
  { id: 4, image: clientlogo4 },
  { id: 5, image: clientlogo5 },
  { id: 6, image: clientlogo6 },
  { id: 7, image: clientlogo7 },
  { id: 8, image: clientlogo8 },
  { id: 9, image: clientlogo5 },
  { id: 10, image: clientlogo6 },
  { id: 11, image: clientlogo7 },
  { id: 12, image: clientlogo8 },
];

export default function LogoSlidertwo() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const totalWidth = marquee.scrollWidth / 2;
    const speed = 50;

    gsap.to(marquee, {
      x: totalWidth,
      duration: totalWidth / speed,
      ease: 'none',
      repeat: 1,
    });
  }, []);

  return (
    <div className="client_logo_slider" ref={marqueeRef}>
      {[...ClientlogoData,...ClientlogoData].map((item, index) => (
        <div className="logo_slider_item" key={`${item.id}-${index}`} >
          <Image
            src={item.image}
            alt={`client-${item.id}`}/>
        </div>
      ))}
    </div>
  );
}
