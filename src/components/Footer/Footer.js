import React from 'react';
import Github from '../../images/github.svg';
import Insta from '../../images/insta.svg';

const Footer = () => {
  return (
    <div className="h-auto bg-black">
      <div className="grid grid-cols-6 grid-rows-6 gap-4 py-10 text-xl gap-4 border-b-8 border-gray-900">
        <div className="text-gray-400 col-start-2 col-end-3 row-start-2 row-end-3">
          Questions? Call 0850-390-7444
        </div>
        <div className="text-gray-400 col-start-2 col-end-3 row-start-3 row-end-4">
          FAQ
        </div>
        <div className="text-gray-400 col-start-2 col-end-3 row-start-4 row-end-5">
          Investor Relations
        </div>
        <div className="text-gray-400 col-start-2 col-end-3 row-start-5 row-end-6">
          Ways to Watch
        </div>
        <div className="text-gray-400 col-start-2 col-end-3 row-start-6 row-end-7">
          Corporate Information
        </div>
        <div className="text-gray-400 col-start-3 col-end-4 row-start-3 row-end-4">
          Help Center
        </div>
        <div className="text-gray-400 col-start-3 col-end-4 row-start-4 row-end-5">
          Jobs
        </div>
        <div className="text-gray-400 col-start-3 col-end-4 row-start-5 row-end-6">
          Terms of Use
        </div>
        <div className="text-gray-400 col-start-3 col-end-4 row-start-6 row-end-7">
          Contact Us
        </div>
        <div className="text-gray-400 col-start-4 col-end-5 row-start-3 row-end-4">
          Account
        </div>
        <div className="text-gray-400 col-start-4 col-end-5 row-start-4 row-end-5">
          Reedem Gift Cards
        </div>
        <div className="text-gray-400 col-start-4 col-end-5 row-start-5 row-end-6">
          Privacy
        </div>
        <div className="text-gray-400 col-start-4 col-end-5 row-start-6 row-end-7">
          Speed Test
        </div>

        <div className="text-gray-400 col-start-5 col-end-6 row-start-3 row-end-4">
          Media Center{' '}
        </div>
        <div className="text-gray-400 col-start-5 col-end-6 row-start-4 row-end-5">
          Buy Gift Cards
        </div>
        <div className="text-gray-400 col-start-5 col-end-6row-start-5 row-end-6">
          Cookie Preferences
        </div>
        <div className="text-gray-400 col-start-5 col-end-6 row-start-6 row-end-7">
          Legal Notices
        </div>
      </div>
      <div className="flex  flex-col  h-96 bg-black mt-14">
        <span className="flex justify-center items-center  text-2xl text-white">
          Hello, my name is Mertcan Karaman. I am a creative developer. This is
          a Netflix Clone Application
        </span>
        <span className="flex justify-center items-center  text-2xl text-white">
          I used React,Context API, Tailwind CSS, Firebase.
        </span>
        <div className="flex justify-center items-center mt-8">
          <a href="https://github.com/karamanmertcan" target="_blank">
            <img src={Github} alt="" />
          </a>
          <a href="https://github.com/karamanmertcan" target="_blank">
            <img src={Insta} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
