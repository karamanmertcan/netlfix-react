import React, { useRef, useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Logo from '../images/logo.svg';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSucces] = useState(false);
  const { login } = useAuth();
  const history = useHistory();

  const handleSubmit = async e => {
    e.preventDefault();
    console.log('hello', emailRef.current.value);

    try {
      setError(false);
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      setSucces(true);
      history.push('/browse');
    } catch (error) {
      setSucces(false);
    }
    setLoading(false);
  };

  return (
    <div className=' bg-netflix-bg w-full h-screen bg-center opacity-80'>
      <div className='flex w-full h-28  px-10 py-10'>
        <img src={Logo} alt='' className=' h-full' />
      </div>

      <div className='flex flex-col  mx-auto my-auto bg-black bg-opacity-90 sm:w-full  lg:w-1/4 sm:flex-1 h-4/6 sm:p-12 p-1 '>
        <span className='text-white   text-4xl'>Sign In</span>
        {error && (
          <div
            class='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative'
            role='alert'
          >
            <strong class='font-bold'>Invalid Credentials</strong>
            <span class='block sm:inline'> Your informations are invalid</span>
            <span class='absolute top-0 bottom-0 right-0 px-4 py-3'>
              <svg
                class='fill-current h-6 w-6 text-red-500'
                role='button'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
              >
                <title>Close</title>
                <path d='M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z' />
              </svg>
            </span>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type='email'
              id='email'
              ref={emailRef}
              placeholder='Email Address'
              required
              className='w-full mt-10 h-16 rounded text-2xl'
            />
          </div>
          <div>
            <input
              type='password'
              id='password'
              ref={passwordRef}
              placeholder='Password'
              required
              className='w-full mt-10 h-16 rounded text-2xl'
            />
          </div>

          <div>
            <button
              disabled={loading}
              type='submit'
              className='text-2xl bg-red-800 sm:h-16 sm:w-full mt-10 text-white focus:outline-none'
            >
              Login
            </button>
          </div>

          <div className='flex justify-center mt-10'>
            <Link to='/signup' className='text-white text-2xl'>
              Sign Up Now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
