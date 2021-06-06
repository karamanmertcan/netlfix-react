import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Questions from '../components/Questions/Questions';
import Netflix1 from '../images/netflix1.jpeg';
import Brown from '../images/brown.jpg';
import Device from '../images/device.png';
import Kids from '../images/kids.png';
import data from '../QuestionData';
import Footer from '../components/Footer/Footer';

const Home = () => {
  const [question, setQuestion] = useState(data);
  return (
    <div>
      <div className=' w-full min-h-full h-screen opacity-90 bg-center bg-netflix-bg mx-auto '>
        <Navbar />
        <div className='flex flex-col justify-center mt-44  '>
          <span className=' lg:text-6xl md:text-4xl sm:text-2xl text-white mx-auto'>
            Unlimited movies, TV shows, and more.
          </span>
          <span className='lg:text-6xl md:text-4xl sm:text-2xl text-white mx-auto'>
            This is a Netflix Clone Application.
          </span>
          <span className='lg:text-3xl sm:text-2xl text-white mx-auto mt-10'>
            Watch anywhere. Cancel anytime.
          </span>
          <span className='lg:text-2xl md:text-xl text-white mx-auto mt-10'>
            Ready to watch? Enter your email to create or restart your
            membership.
          </span>
        </div>
        <div className='flex lg:flex-row md:flex-col items-center justify-center '>
          <input
            type='text'
            placeholder='Email Address'
            className=' lg:h-20  md:w-48 sm:h-14 lg:w-96 sm:w-8 mt-10 placeholder-gray-400 text-2xl focus:outline-none'
          />
          <button className=' bg-red-600 lg:w-80 h-20 md:w-48 text-xl text-white mr-4 mt-10  '>
            Get started
          </button>
        </div>
      </div>
      <div className='grid lg:grid-cols-2 md:grid-cols-1  w-full  h-auto bg-black  border-b-8 border-t-8 border-gray-900'>
        <div className='flex flex-col mx-auto my-auto'>
          <span className='lg:text-5xl md:text-xl text-white font-extrabold mx-auto mt-10'>
            Enjoy on your TV.
          </span>
          <span className='lg:text-2xl md:text-xl text-white mx-auto mt-10'>
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </span>
        </div>

        <div className=' mx-auto my-auto'>
          <img
            src={Netflix1}
            alt=''
            className='lg:h-72 lg:w-96 md:h-48 md:w-72 sm:h-20 sm:w-14 sm:mt-10'
          />
        </div>
      </div>

      <div className='grid lg:grid-cols-2 md:grid-cols-1   w-full  h-auto bg-black  border-b-8  border-gray-900'>
        <div className='mx-auto'>
          <img
            src={Brown}
            alt=''
            className='lg:h-72 lg:w-96 md:h-60 md:w-72 sm:h-20 sm:w-48 sm:mt-10'
          />
        </div>

        <div className='flex flex-col   my-auto mx-auto'>
          <span className='lg:text-5xl md:text-xl text-white font-extrabold  mt-10'>
            Download your shows to watch offline.
          </span>
          <span className='lg:text-2xl md:text-xl text-white mx-auto mt-10'>
            Save your favorites easily and always have something to watch.
          </span>
        </div>
      </div>

      <div className='grid lg:grid-cols-2 md:grid-cols-1  w-full  h-auto bg-black border-b-8  border-gray-900  '>
        <div className='flex flex-col  px-24 my-auto mx-auto'>
          <span className='lg:text-5xl md:text-xl text-white font-extrabold   mt-10'>
            Watch everywhere.
          </span>
          <span className='lg:text-2xl md:text-xl text-white mx-auto my-auto mt-10'>
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV without paying more.
          </span>
        </div>
        <div className='mx-auto my-auto'>
          <img
            src={Device}
            alt=''
            className='lg:h-72 lg:w-96 md:h-60 md:w-1/4 sm:h-20 sm:w-14 sm:mt-10'
          />
        </div>
      </div>

      <div className='grid lg:grid-cols-2 md:grid-cols-1  w-full  h-auto bg-black  border-b-8 border-gray-900'>
        <div className='mx-auto'>
          <img
            src={Kids}
            alt=''
            className='lg:h-72 lg:w-96 md:h-48 md:72 sm:h-20 sm:w-14 sm:mt-10'
          />
        </div>
        <div className='flex flex-col  mx-auto my-auto'>
          <span className='lg:text-5xl md:text-xl text-white font-extrabold  mt-10'>
            Create profiles for kids.
          </span>
          <span className='lg:text-2xl md:text-xl text-white mx-auto mt-10'>
            Send kids on adventures with their favorite characters in a space
            made just for them—free with your membership.
          </span>
        </div>
      </div>
      {question.map(quest => {
        const { question, info } = quest;
        return <Questions key={quest.id} question={question} info={info} />;
      })}
      <div className='bg-black flex flex-col mx-auto border-b-8 border-gray-900 pb-10'>
        <span className='lg:text-2xl md:text-xl text-white mx-auto mt-20'>
          Ready to watch? Enter your email to create or restart your membership.
        </span>
        <div className='flex  md:flex-row  sm:flex-col items-center justify-center '>
          <input type='text' className='w-96 h-20 mt-10' />
          <button className=' bg-red-600 w-80 h-20  text-xl text-white mr-4 mt-10  '>
            Get started
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
