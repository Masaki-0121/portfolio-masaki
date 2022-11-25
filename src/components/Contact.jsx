// import { EmailJSResponseStatus } from "@emailjs/browser";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import ReactIcon from "../assets/react-original.svg";
import FlutterIcon from "../assets/flutter-original.svg";
import NodeIcon from "../assets/nodejs-original.svg";
import NextjsIcon from "../assets/nextjs-line.svg";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7vr9wib",
        "template_lbt4i9p",
        form.current,
        "2y4ENus5WDDX1lIRw"
      )
      .then(
        function (response) {
          alert("Email sent successfully!");
        },
        function (error) {
          alert("FAILED!" + error);
        }
      );
    e.target.reset();
  };

  return (
    <div
      id="Contact"
      className=" h-screen sm:h-[200vh] md:h-[100vh] xl:h-screen relative bg-[#003667]  flex justify-center items-center"
    >
      <div className="hidden xl:flex sm:absolute sm:top-[25%] sm:right-[200px]">
        <img src={NodeIcon} alt="" className=" animate-floating" />
      </div>
      <div className="hidden xl:flex sm:absolute sm:top-[55%] sm:right-[200px]">
        <img src={NextjsIcon} alt="" className=" animate-floating" />
      </div>
      <div className="hidden xl:flex sm:absolute sm:top-[25%] sm:left-[200px]">
        <img src={ReactIcon} alt="" className=" animate-floating" />
      </div>
      <div className="hidden xl:flex  sm:absolute sm:top-[55%] sm:left-[200px]">
        <img src={FlutterIcon} alt="" className=" animate-floating" />
      </div>
      <div
        name="contact"
        className="w-full h-screen  flex  justify-center items-center p-4"
      >
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col max-w-[600px] w-full "
        >
          <div className="pb-8">
            <p className=" text-4xl font-bold inline border-b-4 border-[#0fc2ba] text-white">
              Contact
            </p>
          </div>
          <input
            className="bg-[#ffff] p-2 border"
            type="text"
            placeholder="Name"
            name="user_name"
          />
          <input
            className="my-4 p-2 bg-[#ffff] border"
            type="email"
            placeholder="Email"
            name="user_email"
          />
          <textarea
            className="bg-[#ffff] p-2 border"
            name="message"
            rows="10"
            placeholder="Message"
          ></textarea>

          <div className="w-full text-white bg-[#0fc2ba] border-[#0fc2ba] hover:bg-[#12c7be] hover:border-[#12c7be] font-bold  border-2  px-4 py-3 my-8 mx-auto flex justify-center items-center cursor-pointer">
            <input
              type="submit"
              className="btn btn-info"
              value="Send Message"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
