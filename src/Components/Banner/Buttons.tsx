"use client";

import React from "react";
import { HiArrowUp } from "react-icons/hi";
import Link from "next/link";

const Buttons = ({ btnText = "Explore more", links = "/" }) => {
  return (
    <Link href={links} className="theme_btn">{btnText} <div className="arrow_icon"><HiArrowUp/></div></Link>
  );
};

export default Buttons;
