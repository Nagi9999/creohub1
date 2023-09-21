import Form from "@/app/components/form";
import Banner from "../../components/banner";
import Text from "../../components/text";

const Contact = () => {
    return ( 
        <main className="flex flex-col   mx-auto 2xl:container ">
            <Banner imageSrc={"https://cdn.pixabay.com/photo/2017/12/02/14/38/contact-us-2993000_1280.jpg"}></Banner>
            <Text>
  <h1 className="text-5xl my-12 font-serif text-black-200">Contact Me</h1>
  <p className="text-2xl m-0 text-black-200">
    Feel free to get in touch with me! Whether you have questions, feedback, or
    just want to say hello, I'd love to hear from you.
  </p>
  <p className="text-2xl m-0 text-black-200">
    You can reach out to me through the following channels:
  </p>
  <ul className="list-disc pl-8 list-none">
    <li className="text-xl">Email: najielhakim9@gmail.com</li>
    <li className="text-xl">Phone: 71302738</li>
    <li className="text-xl">
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