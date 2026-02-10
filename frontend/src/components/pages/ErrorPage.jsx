import React from 'react'
import {useNavigate} from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();
  function clickHandler() {
    navigate('/');
  }
  return (
    <div className='flex flex-col justify-between h-screen w-full'>
      <div className='px-8 py-4'>
        <h1 className='text-zinc-400 text-9xl tracking-tight'>404</h1>
        <h1 className='text-zinc-400 text-6xl tracking-tighter'> Page Not Found</h1>
        <button 
        className='mt-4 border-2 px-3 py-2 rounded-lg text-white bg-zinc-900 tracking-tight font-semibold'
        onClick={clickHandler}
        >Home Page</button>
      </div>
      <div className='text-center'>
        <p className='text-sm text-zinc-900 tracking-tighter'>
          &copy; Tanmay Productions.
        </p>
      </div>
    </div>
  )
}

export default ErrorPage