import React, { useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Logo from '../images/logo.svg';
import { useAuth } from '../context/AuthContext';

const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
  const history = useHistory();

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push('/browse');
    } catch (err) {
      setError('Failed to create an account');
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <div className='  w-full h-screen bg-center opacity-80'>
      <div className='flex w-full h-28  px-10 py-10'>
        <img src={Logo} alt='' className=' h-full' />
      </div>

      <div className='flex flex-col  mx-auto my-auto  sm:w-full  lg:w-1/4 sm:flex-1 h-4/6 sm:p-12 p-1'>
        <span className='text-black font-bold  text-5xl'>Sign Up</span>
        <span className='text-black   text-xl mt-4'>
          Create an account with Email and Password. This is a Netflix Clone
          Application and free of charge.
        </span>

        <form onSubmit={handleSubmit}>
          <div>
            <input
              type='email'
              id='email'
              ref={emailRef}
              required
              placeholder='Email Address'
              className='w-full mt-10 h-16 rounded text-2xl bg-gray-300'
            />
          </div>
          <div>
            <input
              type='password'
              id='password'
              ref={passwordRef}
              placeholder='Password'
              required
              className='w-full mt-10 h-16 rounded text-2xl bg-gray-300'
            />
          </div>

          <div>
            <button
              disabled={loading}
              type='submit'
              className='text-2xl bg-red-800 sm:h-16 sm:w-full mt-10 text-white focus:outline-none'
            >
              Sign Up
            </button>
          </div>

          <div className='flex justify-between items-center  mt-10'>
            <div>
              <span className='text-xl'>Already Have an Account ?</span>
            </div>
            <Link to='/login' className='text-black text-2xl'>
              Sign In
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
