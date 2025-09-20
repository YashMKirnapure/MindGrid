import React, { useState } from 'react'

const Login = () => 
{

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleSubmit = async(e) =>
  {
    e.preventDefault();
  }

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='w-full max-w-sm p-6 max-md:m-6 border border-primary/30 shadow-xl shadow-primary/15 rounded-lg'>
        <div className='flex flex-col items-center justify-center'>
            <div className='w-full py-6 text-center'>
              <h1 className='text-primary text-3xl font-bold'>Admin Login</h1>
              <p className='font-light'>Enter your credentials to access the admin panel</p>
            </div>

            <form className='mt-3 w-full sm:max-w-md text-gray-600' onSubmit={handleSubmit}>
                
                <div className='flex flex-col'>
                  <label>Email</label>
                  <input type="email" required placeholder='your email id' className='outline-none p-2 mb-6 border-2 border-gray-300' onChange={e=>setEmail(e.target.value)} value={email}/>
                </div>

                <div className='flex flex-col'>
                  <label>Password</label>
                  <input type="password" required placeholder='your password' className='outline-none p-2 mb-6 border-2 border-gray-300' onChange={e=>setPassword(e.target.value)} value={password}/>
                </div>

                <button type='submit' className='w-full py-3 font-medium text-white bg-primary rounded cursor-pointer hover:bg-primary/90 transition-all'>Login</button>

            </form>
        </div>
      </div>
    </div>
  )
}

export default Login
