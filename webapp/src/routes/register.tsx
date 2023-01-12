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

  const buttonRegister : ButtonInterface = {
    text: 'Register',
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

        <form className="form-control w-full" onSubmit={handleSubmit(onSubmit)}>
          <label className="label label-text font-bold font-os text-large">
            Name
          </label>
          <input type="text" placeholder="Enter username" className="mb-2 input input-bordered w-full" {...register('name')}/>

          <label className="label label-text font-bold font-os text-large">
            Email
          </label>

          <input type="email" placeholder="Enter email" className="mb-2 input input-bordered w-full" {...register('name')}/>


          <label className="label label-text font-bold font-os text-large">
            Password
          </label>
          <input type="password" placeholder="Enter password" className="mb-2 input input-bordered w-full" {...register('password')}/>

          <label className="label label-text font-bold font-os text-large">
            Confirm password
          </label>
          <input type="password" placeholder="Confirm password" className="mb-10 input input-bordered w-full" {...register('passwordConfirm')}/>

          <Button props={buttonRegister}/>

        </form>

        <p className='font-os text-large'>Already have a Kompt account ? <a href="/register" className="font-os font-bold text-large">Sign in</a></p>
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