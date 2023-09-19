import Image from "next/image";
import styles from "./page.module.css";

//components
import Banner from "./components/banner";
import Card from "./components/card";
import Form from "./components/form";

export default function Home() {
  return (
    <main className="flex flex-col   mx-auto max-w-7xl" >
      <Banner/>
      <Card/>
      <Form/>
      </main>
  );
}
