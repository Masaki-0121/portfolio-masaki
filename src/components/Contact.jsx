import React from "react";
import contactImg from "../assets/3Dperson.svg";

const Contact = () => {
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
        <form method="POST" className="flex flex-col max-w-[600px] w-full">
          <div className="pb-8">
            <p className=" text-4xl font-bold inline border-b-4 border-[#0fc2ba] text-white">
              Contact
            </p>
          </div>
          <input
            className="bg-[#ffff] p-2 border"
            type="text"
            placeholder="Name"
            name="name"
          />
          <input
            className="my-4 p-2 bg-[#ffff] border"
            type="email"
            placeholder="Email"
            name="email"
          />
          <textarea
            className="bg-[#ffff] p-2 border"
            name="message"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button className="w-full border-[#0fc2ba] bg-[#0fc2ba] text-white font-bold  border-2  px-4 py-3 my-8 mx-auto flex justify-center items-center">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
