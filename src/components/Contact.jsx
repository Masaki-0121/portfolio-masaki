// import { EmailJSResponseStatus } from "@emailjs/browser";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import contactImg from "../assets/3Dperson.svg";

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
        (result) => {
          console.log(result.text);
          console.log("Message sent!");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className=" relative bg-[#003667]  flex justify-center items-center">
      <div className="hidden xl:flex sm:absolute sm:top-0 sm:right-[5%]">
        <img
          className="h-[800px] w-[500px] animate-floating "
          src={contactImg}
          alt=""
        />
      </div>
      <div
        name="contact"
        className="w-full h-screen  flex  justify-center items-center p-4"
      >
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col max-w-[600px] w-full"
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
          {/* <button
            type="submit"
            className="w-full border-[#0fc2ba] bg-[#0fc2ba] text-white font-bold  border-2  px-4 py-3 my-8 mx-auto flex justify-center items-center"
          >
            Send
          </button> */}
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
