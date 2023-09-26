"use client"
import Banner from "../components/Banner";
import Card from "../components/Card";
import Form from "../components/Form";
import React, { useState, useEffect } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

const Index = () => {
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
    <main>
      <Banner
        imageSrc="https://images.unsplash.com/photo-1552984418-b55abf780dd4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        fullScreen={isFullScreen}
      >
        <h1 className="sm:text-5xl text-xl my-12 font-serif text-orange-200 ">
          Welcome to the NBA World
        </h1>
        <p className="sm:text-2xl text-sm m-0 text-orange-200">
          I will show you first my top 3 NBA players of all time
        </p>
      </Banner>

      <div className="flex flex-col items-center  mt-8 mb-8 bg-orange-200 sm:mx-16 mx-3 sm:px-12 px-3.5 sm:py-3 py-3.5  ">
        <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(1)}>Kobe Bryant</AccordionHeader>
        <AccordionBody className="text-lg">
        Kobe Bryant, also known as the "Black Mamba," was an American professional basketball player. He spent his entire 20-year career with the Los Angeles Lakers and is considered one of the greatest basketball players of all time. Bryant was known for his scoring ability, work ethic, and competitive spirit. He won numerous NBA championships and earned numerous accolades throughout his career.

        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(2)}>
          Michael Jordan
        </AccordionHeader>
        <AccordionBody className="text-lg">
        Michael Jordan, often referred to as "MJ," is widely regarded as the greatest basketball player of all time. He played the majority of his career with the Chicago Bulls and won six NBA championships with the team. Jordan was known for his scoring ability, clutch performances, and competitive drive. He also achieved success as a businessman and owner of the Charlotte Hornets.

        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(3)}>
          LeBron James
        </AccordionHeader>
        <AccordionBody className="text-lg">
        LeBron James, often called "King James," is one of the most dominant and versatile players in NBA history. He has played for several NBA teams, including the Cleveland Cavaliers, Miami Heat, and Los Angeles Lakers. LeBron is known for his scoring, playmaking, and leadership on and off the court. He has won multiple NBA championships and continues to be a prominent figure in the basketball world.
        
        </AccordionBody>
      </Accordion>
      </div>

      <Card />
      <Form />
    </main>
  );
};

export default Index;
