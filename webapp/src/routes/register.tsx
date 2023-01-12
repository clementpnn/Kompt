import { useForm, SubmitHandler } from 'react-hook-form'
import Button from '../components/button';
import { FormValues, ButtonInterface } from '../interfaces/interfaces'
// import backPrimary from "../assets/icon/backPrimary.svg";

export default function Register() {
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = data => {
      
    fetch('http://localhost:5432/register', {
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
            <span>Email</span>
          </label>
          <input type="email" placeholder="Enter email" className="input input-bordered w-full" {...register('name')}/>

          <label className="label label-text">
            <span>Password</span>
          </label>
          <input type="password" placeholder="Enter password" className="input input-bordered w-full" {...register('password')}/>

          <label className="label label-text">
            <span>Confirm password</span>
          </label>
          <input type="password" placeholder="Confirm password" className="input input-bordered w-full" {...register('passwordConfirm')}/>

          <button className="btn w-full mt-10 bg-indigo-700 hover:bg-indigo-500 border-none text-white">Log in</button>

        </form>

        <p>New on Kompt ? <a href="/login" className="font-bold">Log in</a></p>
      </div>
    </div>



    // <div>
    //   <p>Create account</p>
    //   <form onSubmit={handleSubmit(onSubmit)}>
        
    //     <input placeholder="name" {...register('name')}/>
    //     <input placeholder="email" type='email' {...register('email')} />
    //     <input placeholder="password" {...register('password')} />
    //     <input placeholder="confirm password" {...register('passwordConfirm')} />

    //     <input type='submit' />
    //   </form>
    //   <p>Already have an account ? <a href="/login"><Button text={button.text} style={button.style} color={button.color} icon={button.icon}/></a></p>

    // </div>
  )
}