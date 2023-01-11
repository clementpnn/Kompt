import React from "react";
import { useForm, SubmitHandler } from 'react-hook-form'
import { FormValues } from '../interfaces/interfaces'
import { Routes, Route, Outlet, Link } from "react-router-dom";


// import Input from '../components/input'

export default function Login() {
    const { register, handleSubmit } = useForm<FormValues>();
    const onSubmit: SubmitHandler<FormValues> = data => console.log(data);
    

    return (
      <div>

        <p> Log in </p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input placeholder="name"{...register('name')} />
          <input placeholder="password"/>

          {/* <Input placeholder={"Enter your username"} fonction={register} label={"name"}/> */}
    
          <input type='submit' />
        </form>

        <p><a href="/register">New on Kompt ? Create an account</a></p>

        <Outlet />
      </div>
    )
  }