import Banner from "../components/banner";
import Text from "../components/text";

const AboutMe = () => {
  return (
    <main className="flex flex-col   mx-auto 2xl:container ">
      
      <Banner
        imageSrc={
          "https://www.bolton.ac.uk/assets/Uploads/Is-a-Computer-Science-Degree-Worth-it-University-of-Bolton-v2.jpg"
        }
      >
        <h1 className="sm:text-5xl text-xl my-12 font-serif text-orange-200">About Me</h1>
        <p className="sm:text-2xl text-sm m-0 text-orange-200">Learn more about me.</p>
      </Banner>
      <Text>
        
        <div>
          <p className="sm:text-2xl text-lg m-0">
            Hi, I'm Naji El Hakim ! I'm a passionate developer with a love for
            technology and programming. I have a basic background in web
            development .
          </p>
          <p className="sm:text-2xl text-lg m-0">
            My journey with programming began during my internship at CreoShift,
            where I had the opportunity to work on exciting projects and develop
            my skills.
          </p>
          <p className="sm:text-2xl text-lg m-0">
            In addition to coding, I have a strong passion for playing
            basketball and maintaining a healthy lifestyle by going to the gym.
          </p>
          <p className="sm:text-2xl text-lg m-0">
            I'm always eager to learn and take on new challenges in the
            ever-evolving field of web development.
          </p>
          <p className="sm:text-2xl text-lg m-0">
            Feel free to explore my portfolio to see some of the projects I've
            worked on. If you'd like to get in touch or collaborate on a
            project, don't hesitate to reach out via the contact form.
          </p>
        </div>
      </Text>
    </main>
  );
};

export default AboutMe;
