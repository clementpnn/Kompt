import React from "react";
import { useForm, SubmitHandler } from 'react-hook-form'
import { FormValues } from '../interfaces/interfaces'
import { Routes, Route, Outlet, Link } from "react-router-dom";


// import Input from '../components/input'

export default function Login() {
    const { register, handleSubmit } = useForm<FormValues>();
    const onSubmit: SubmitHandler<FormValues> = data => console.log(data);
    

    return (
      <div className="flex justify-center h-screen items-center">
        <div className="w-1/3 h-screen flex flex-col place-content-evenly">

          <div className="flex text-center flex-col">
            <p className="text-4xl"> Welcome to Kompt ! </p>
          </div>

          <form className="form-control w-full" onSubmit={handleSubmit(onSubmit)}>
            <label className="label label-text">
              <span>Name</span>
            </label>
            <input type="text" placeholder="Enter username" className="input input-bordered w-full" {...register('name')}/>

            <label className="label label-text">
              <span>Password</span>
            </label>
            <input type="password" placeholder="Enter password" className="input input-bordered w-full" {...register('password')}/>

            <button className="btn w-full mt-10 bg-indigo-700 hover:bg-indigo-500 border-none text-white">Log in</button>

          </form>

          <p>New on Kompt ? <a href="/register" className="font-bold">Sign in</a></p>
        </div>
      </div>
    )
  }