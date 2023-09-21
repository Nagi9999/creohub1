import Banner from "../components/banner";
import Card from "../components/card";
import Form from "../components/form";

const Index = () => {
  return (
    <main>
      <Banner imageSrc="https://images.unsplash.com/photo-1552984418-b55abf780dd4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80">
        <h1 className="sm:text-5xl text-xl my-12 font-serif text-orange-200">
          Welcome to the NBA World
        </h1>
        <p className="sm:text-2xl text-sm m-0 text-orange-200">
          I will show you first my top 3 NBA players of all time
        </p>
      </Banner>
      <Card />
      <Form />
    </main>
  );
};

export default Index;
