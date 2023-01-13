import { useForm, SubmitHandler } from 'react-hook-form'
import { ButtonInterface, FormValues } from '../interfaces/interfaces'
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Button from '../components/button';

export default function Login() {
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = data => {
    
    fetch('http://localhost:5432/login', {
      method: 'POST',
      mode: 'cors',
      body: new URLSearchParams({
        ...data
      }),
      credentials: 'include',
      headers: new Headers({
        // 'Authorization' : 'Basic amZnbWFpbC5jb206cGFzc3dvcmQ=',
        'Content-type':  'application/x-www-form-urlencoded'
      })
    })
      .then(data => data.text())
      .then(json => console.log(json))
  }
  
  const buttonLogin : ButtonInterface = {
    text: 'Login',
    style: 'fill',
    color: 'primary',
    icon: undefined 
  }

  return (
    <div className="flex justify-center h-screen items-center">
      <div className="w-1/3 h-screen flex flex-col place-content-evenly">

        <div className="flex text-center flex-col">
          <p className="font-os text-title3 font-bold"> Welcome to Kompt ! </p>
        </div>

        <form className="form-control" onSubmit={handleSubmit(onSubmit)}>
          <label className="label label-text font-bold font-os text-large">
            Email
          </label>
          <input type="email" placeholder="Enter email" className="mb-2 input input-bordered w-full" {...register('email')}/>

          <label className="label label-text font-bold font-os text-large">
            Password
          </label>
          <input type="password" placeholder="Enter password" className="mb-10 input input-bordered w-full" {...register('password')}/>

          <Button props={buttonLogin}/>
          

        </form>
        
        <p className='font-os text-large'>New on Kompt ? <a href="/register" className="font-os font-bold text-large">Sign up</a></p>
      </div>
    </div>
  )
}