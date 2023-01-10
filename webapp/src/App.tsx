import { useForm, SubmitHandler } from 'react-hook-form'
import { FormValues } from './interfaces/interfaces'

export default function App() {
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name')} />
      <input type='email' {...register('email')} />
      <input {...register('password')} />

      <input type='submit' />
    </form>
  )
}