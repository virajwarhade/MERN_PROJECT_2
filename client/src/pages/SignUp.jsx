
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 



export default function SignUp() {


  const [formData,setFormData] = useState({});
  const [error,setError] = useState(false);
  const [loading,setLoading] = useState(false);

  const handleChange = (e) => {

    setFormData({...formData, [e.target.id]:e.target.value });
  };

const handleSubmit = async (e) =>{

  e.preventDefault();

try {
  setLoading(true);
  setError(false);
    const res = await fetch('/api/auth/signup',{
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(formData),
  });

  const data = await res.json();
    console.log(data);
 
   

    if(data.success === false){
       setError(true);
    }
    else{
      setError(false);
    }
    
    setLoading(false);
} catch (error) {
  setLoading(false);
  setError(true);
}



}


// console.log(formData);




  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign up </h1>

      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>

        <input type="text" placeholder='username' id='username' className='bg-slate-100 p-3 rounded-lg  outline-blue-500 border-slate-700 '
        onChange={handleChange}
        />
        <input type="email" placeholder='email' id='email' className='bg-slate-100 p-3 rounded-lg  outline-blue-500 border-slate-700 '
        onChange={handleChange}
        />
        <input type="password" placeholder='password' id='password' className='bg-slate-100 p-3 rounded-lg outline-blue-500 border-slate-700 '
        onChange={handleChange}
        />
        
        <button disabled={loading} className=' bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 p-3 disabled:opacity-80 shadow-lg'>
          {loading ? "Loading" : "Sign Up"}</button>

      </form>

    <div className='flex gap-2 mt-5 bg-slate-100 w-fit p-3 rounded-md'>
      <p>Have an  account</p>
      <Link to='/sign-in'>
      <span className='text-blue-500'>Sign in</span>
      </Link>
    </div>

    <p className='mt-5 text-red-700 '>{error && "something went wrong!"}</p>

    </div>
  )
}
