import Banner from "../components/banner";
import Text from "../components/text";

const Project = () => {
 
  return (
    <main className="flex flex-col   mx-auto 2xl:container ">
      <Banner imageSrc={
          "https://www.interviewbit.com/blog/wp-content/uploads/2022/01/Product-Landing-Page-550x440.png"
        }
      >
        <h1 className="text-5xl my-12 font-serif text-black bg-gray-50">
          My software development projects
        </h1>
        <p className="text-2xl m-0 text-black bg-gray-50">
          Here's some of my projects:
        </p>
      </Banner>
      <Text>
        <h1 class="font-bold text-xl"> E-commerce Website</h1>
        <p>
          Description: Developed a fully functional e-commerce website using
          React and Node.js. Implemented user authentication, product catalog,
          shopping cart, and payment processing. The project resulted in a
          responsive and user-friendly online store.
        </p>
        <h1 class="font-bold text-xl">Task Management App </h1>
        <p>
          Description: Created a task management web application using Vue.js
          and Firebase. Users can organize their tasks, set deadlines, and
          collaborate with team members. The app's real-time synchronization
          feature ensures up-to-date task tracking
        </p>
        <h1 class="font-bold text-xl">Weather Forecast App </h1>
        <p>
          Description: Built a weather forecast mobile app with Flutter. The app
          provides accurate weather forecasts based on user location. Users can
          view current conditions, hourly, and weekly forecasts, making it easy
          to plan outdoor activities.
        </p>
      </Text>
    </main>
  );
};

export default Project;
