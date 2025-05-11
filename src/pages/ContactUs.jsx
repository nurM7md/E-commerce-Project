import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="container flex flex-col items-center p-5 py-10 m-auto rounded-lg md:flex-col lg:flex-row my-11 gap-x-10 bg-slate-100">
      <div className="flex flex-col md:w-3/4">
        <h2 className="text-5xl font-bold text-slate-900">Contact Us</h2>
        <p className="py-5 text-lg font-semibold text-gray-500">
          Feel free to contact us any time . we will get back to you as soon as
          we can!
        </p>
        <input
          type="text"
          placeholder="Name"
          className="px-4 py-2 border-b-2 rounded-full"
        />
        <input
          type="email"
          placeholder="Email"
          className="px-4 py-2 my-3 border-b-2 rounded-full"
        />
        <textarea
          title="Message"
          placeholder="Message"
          className="px-4 py-2 border-b-2 rounded-full"
        />
        <button className="px-3 py-2 m-auto text-white rounded-full w-72 mt-7 bg-slate-900">
          SEND
        </button>
      </div>

      <div className="w-full mt-5 rounded-xl bg-slate-900 lg:w-1/4">
        <div className="p-5 ">
          <h4 className="pb-6 text-3xl font-bold text-white">Info</h4>
          <div className="flex flex-row text-xl font-semibold text-white gap-x-3">
            <p>
              <FaFacebook />
            </p>
            <p>
              <a href="/">E-shop.facebook</a>
            </p>
          </div>
          <div className="flex flex-row text-xl font-semibold text-white gap-x-3">
            <p>
              <FaTwitter />
            </p>
            <p>
              <a href="/">E-shop.twitter</a>
            </p>
          </div>
          <div className="flex flex-row text-xl font-semibold text-white gap-x-3">
            <p>
              <FaInstagram />
            </p>
            <p>
              <a href="/">E-shop.insta</a>
            </p>
          </div>
          <div className="flex flex-row text-xl font-semibold text-white gap-x-3">
            <p>
              <FaPhone />
            </p>
            <p>
              <a href="/">0122235458</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
