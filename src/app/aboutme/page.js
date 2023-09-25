"use client"
import React, { useState } from 'react';
import Banner from "../components/banner";
import Text from "../components/text";

const AboutMe = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const items = [
    {
      title: "Web Development",
      description: "I have a basic background in web development. My experience includes HTML, CSS, and JavaScript. I have built static web pages and simple interactive web applications.",
    },
    {
      title: "Programming Journey",
      description: "My programming journey started during my internship at CreoShift.",
    },
    {
      title: "Basketball Passion",
      description: "I have a strong passion for playing basketball and maintaining a healthy lifestyle.",
    },
    {
      title: "Eager to Learn",
      description: "I'm always eager to learn and take on new challenges in web development.",
    },
    {
      title: "Portfolio Projects",
      description: "Feel free to explore my portfolio to see some of the projects I've worked on.",
    },
    {
      title: "Hobbies",
      description: "Besides programming and basketball, I also enjoy reading books and hiking in my free time.",
    },
    {
      title: "Education",
      description: "I completed my Bachelor's degree in Computer Science from XYZ University.",
    },
    {
      title: "Skills",
      description: "I have experience with technologies such as React, Node.js, Vue.js, and more.",
    },
  
  ];

  const handleItemClick = (index) => {
    setSelectedItem(items[index]);
  };

  return (
    <main className="flex flex-col mx-auto 2xl:container">
      <Banner
        imageSrc={
          "https://www.bolton.ac.uk/assets/Uploads/Is-a-Computer-Science-Degree-Worth-it-University-of-Bolton-v2.jpg"
        }
      >
        <h1 className="sm:text-5xl text-xl my-12 font-serif text-orange-200">About Me</h1>
        <p className="sm:text-2xl text-sm m-0 text-orange-200">Learn more about me.</p>
      </Banner>
      <Text class="mt-10">
        <div className="my-3.5">
          <p className="sm:text-2xl text-lg mb-16">
            Hi, I'm Naji El Hakim! I'm a passionate developer with a love for
            technology and programming. Select please for more info:
          </p>


          <div className="mt-4 space-y-4 mb-16">
            {items.map((item, index) => (
              <div key={index} className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  id={`item-${index}`}
                  name="about-me-items"
                  value={index}
                  onClick={() => handleItemClick(index)}
                />
                <label htmlFor={`item-${index}`} className="ml-2">{item.title}</label>
              </div>
            ))}
          </div>

          {selectedItem && (
            <div className="mt-4">
              <h2 className="font-bold text-2xl">{selectedItem.title}</h2>
              <p className="text-lg">{selectedItem.description}</p>
            </div>
          )}
        </div>
      </Text>
    </main>
  );
};

export default AboutMe;
