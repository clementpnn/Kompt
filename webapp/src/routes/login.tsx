import React from "react";
import { useForm, SubmitHandler } from 'react-hook-form'
import { FormValues } from '../interfaces/interfaces'

export default function Register() {
    const { register, handleSubmit } = useForm<FormValues>();
    const onSubmit: SubmitHandler<FormValues> = data => console.log(data);
    


    
    return (
      <div>

        <p> Log in </p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input placeholder="name"{...register('name')} />
          <input placeholder="password"{...register('password')} />
    
          <input type='submit' />
        </form>

        <p><a href="/register">New on Kompt ? Create an account</a></p>


      </div>
    )
  }