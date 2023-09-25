"use client"
import React from 'react';
import Banner from "../components/banner";
import Text from "../components/text";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

//  Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Project = () => {
  const projects = [
    {
      title: "E-commerce Website",
      description: "Developed a fully functional e-commerce website using React and Node.js. Implemented user authentication, product catalog, shopping cart, and payment processing. The project resulted in a responsive and user-friendly online store.",
      imageSrc: "https://images04.nicepage.com/feature/490294/shopping-cart-page-template.png",
    },
    {
      title: "Task Management App",
      description: "Created a task management web application using Vue.js and Firebase. Users can organize their tasks, set deadlines, and collaborate with team members. The app's real-time synchronization feature ensures up-to-date task tracking.",
      imageSrc: "https://www.sketchappsources.com/resources/source-image/kanban-app-digitalscience.png",
    },
    {
      title: "Weather Forecast App",
      description: "Built a weather forecast mobile app with Flutter. The app provides accurate weather forecasts based on user location. Users can view current conditions, hourly, and weekly forecasts, making it easy to plan outdoor activities.",
      imageSrc: "https://imgproxy.epicpxls.com/MhZHybSVTPy3zQvm8ZQfVQ3ubw2N73rxiWO6RWxGvyY/rs:fill:409:307:0/g:no/aHR0cHM6Ly9pdGVt/cy5lcGljcHhscy5j/b20vdXBsb2Fkcy9w/aG90by80MDI2NTc4/MGUyYTcxNTVmZTli/ODdmMmVkOTM3MmQw/Yg.jpg",
    },
    {
      title: "Social Media Analytics Dashboard",
      description: "Developed a dashboard that tracks and analyzes social media metrics. Users can connect their social media accounts, view engagement statistics, and generate reports. This project used Python and various APIs to collect and visualize data.",
      imageSrc: "https://images.klipfolio.com/website/public/1cf5beca-9248-4784-af79-3caed6b1f2cd/social-media-dashboard.png",
    },
    {
      title: "Online Learning Platform",
      description: "Created an online learning platform using Django and React. Users can enroll in courses, watch video lectures, and complete quizzes. Implemented user profiles, payment processing, and course recommendations.",
      imageSrc: "https://cdn.dribbble.com/users/2017098/screenshots/8068756/media/ebeb3873f5e7ff4b406f45d9a4bd076e.jpg?resize=1000x750&vertical=center",
    },
    {
      title: "Health and Fitness Tracker",
      description: "Developed a mobile app for tracking health and fitness goals. Users can input their daily activities, monitor calorie intake, and set workout routines. The app includes gamification elements to motivate users to stay active.",
      imageSrc: "https://www.mindinventory.com/blog/wp-content/uploads/2022/10/fitness-tracking-app.jpg",
    },
  ];

  return (
    <main className="flex flex-col mx-auto 2xl:container">
      <Banner
        imageSrc={
          "https://www.interviewbit.com/blog/wp-content/uploads/2022/01/Product-Landing-Page-550x440.png"
        }
      >
        <h1 className="sm:text-5xl text-xl my-12 font-serif text-black bg-gray-50">
          My software development projects
        </h1>
        <p className="sm:text-2xl text-sm m-0 text-black bg-gray-50">
          Here's some of my projects:
        </p>
      </Banner>

      <Text>
        {projects.map((project, index) => (
          <div key={index} className="mb-8">
            <h1 className="font-bold text-2xl">{project.title}</h1>
            <p className="text-lg">{project.description}</p>
          </div>
        ))}
      </Text>
      <div className="flex justify-center items-center">
        
        <div className="w-full sm:w-[50vw]">
        <h1 className="text-center font-bold text-2xl mb-3 font-serif ">Swipe in order to see my projects</h1>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <div className="mb-10">
                  <div className="w-full max-h-[50vh] overflow-hidden">
                    <img
                      src={project.imageSrc}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 bg-black bg-opacity-50 mt-5 mb-15">
                    <h3 className="text-white text-xl font-semibold">{project.title}</h3>
                    <p className="text-white">{project.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </main>
  );
};

export default Project;
