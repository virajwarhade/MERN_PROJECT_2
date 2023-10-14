import React from 'react';
import { Link } from 'react-router-dom'; 

export default function SignUp() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign up </h1>

      <form className='flex flex-col gap-4'>

        <input type="text" placeholder='username' id='username' className='bg-slate-100 p-3 rounded-lg  outline-blue-500 border-slate-700 '/>
        <input type="email" placeholder='email' id='email' className='bg-slate-100 p-3 rounded-lg  outline-blue-500 border-slate-700 '/>
        <input type="password" placeholder='password' id='password' className='bg-slate-100 p-3 rounded-lg outline-blue-500 border-slate-700 '/>
        
        <button className=' bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 p-3 disabled:opacity-80 shadow-lg'>Sign up</button>

      </form>

    <div className='flex gap-2 mt-5 bg-slate-100 w-fit p-3 rounded-md'>
      <p>Have an  account</p>
      <Link to='/sign-in'>
      <span className='text-blue-500'>Sign in</span>
      </Link>
    </div>



    </div>
  )
}
