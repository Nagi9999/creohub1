"use client"
import Form from "@/app/components/form";
import Banner from "../components/banner";
import Text from "../components/text";

import React, { useState, useEffect } from "react";




const Contact = () => {
  
const [open, setOpen] = useState(0);
const [isFullScreen, setIsFullScreen] = useState(false);

const handleOpen = (value) => setOpen(open === value ? 0 : value);

useEffect(() => {
  const handleZoomChange = () => {
    const zoomLevelThreshold = 1.0;
    const currentZoomLevel = window.devicePixelRatio || 1;

    setIsFullScreen(currentZoomLevel < zoomLevelThreshold);
  };

  window.addEventListener("resize", handleZoomChange);

  handleZoomChange();

  return () => {
    window.removeEventListener("resize", handleZoomChange);
  };
}, []);

    return ( 
        <main className="flex flex-col   mx-auto ">
            <Banner imageSrc={"https://cdn.pixabay.com/photo/2017/12/02/14/38/contact-us-2993000_1280.jpg"}
            fullScreen={isFullScreen}>

            </Banner>
            <Text>
  <h1 className="text-5xl my-12 font-serif text-black-200">Contact Me</h1>
  <p className="sm:text-2xl text-lg  m-0 text-black-200">
    Feel free to get in touch with me! Whether you have questions, feedback, or
    just want to say hello, I'd love to hear from you.
  </p>
  <p className="sm:text-2xl text-lg  m-0 text-black-200">
    You can reach out to me through the following channels:
  </p>
  <ul className="sm:text-2xl text-lg  pl-8 list-none">
    <li className="sm:text-2xl text-lg ">Email: najielhakim9@gmail.com</li>
    <li className="sm:text-2xl text-lg ">Phone: 71302738</li>
    <li className="sm:text-2xl text-lg ">
      Social Media: Connect with me on{" "}
      <a
        href="https://www.linkedin.com/in/yourprofile"
        className="text-orange-500 underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>{" "}
      and{" "}
      <a
        href="https://twitter.com/yourprofile"
        className="text-orange-500 underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        Twitter
      </a>
    </li>
  </ul>
</Text>
<Form/>
        </main>
     );
}
 
export default Contact;