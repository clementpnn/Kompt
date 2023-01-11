import { useForm, SubmitHandler } from 'react-hook-form'
import Button from '../components/button/button';
import { FormValues, ButtonInterface } from '../interfaces/interfaces'
import backPrimary from "../assets/icon/backPrimary.svg";

export default function Register() {
    const { register, handleSubmit } = useForm<FormValues>();
    const onSubmit: SubmitHandler<FormValues> = data => console.log(data);


    const button : ButtonInterface = {
      text: "je teste encore",
      style: "fill",
      color: "primary",
      icon: backPrimary
    }

    return (
      <div>
        <p>Create account</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input placeholder="name" {...register('name')}/>
          <input placeholder="email" type='email' {...register('email')} />
          <input placeholder="password" {...register('password')} />
          <input placeholder="confirm password" {...register('passwordConfirm')} />

          <input type='submit' />
        </form>
        <p>Already have an account ? <a href="/login"><Button text={button.text} style={button.style} color={button.color} icon={button.icon}/></a></p>

      </div>
    )
  }