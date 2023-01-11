import { useForm, SubmitHandler } from 'react-hook-form'
import { FormValues } from '../interfaces/interfaces'

export default function Register() {
    const { register, handleSubmit } = useForm<FormValues>();
    const onSubmit: SubmitHandler<FormValues> = data => console.log(data);
  
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
        <p><a href="/login">Already have an account ? Log in</a></p>

      </div>
    )
  }