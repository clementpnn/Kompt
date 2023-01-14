import { useForm, SubmitHandler } from 'react-hook-form'
import { ButtonInterface, FormValues } from '../../interfaces/interfaces';
import Button from '../button';



export default function JoinGroupPopup() {

    const { register, handleSubmit } = useForm<FormValues>();
    const onSubmit: SubmitHandler<FormValues> = data => {
      
      fetch('http://localhost:5432/#join_group', {
        method: 'POST',
        mode: 'cors',
        // body: new URLSearchParams({
        //   ...data
        // }),
        // credentials: 'include',
        // headers: new Headers({
        //   // 'Authorization' : 'Basic amZnbWFpbC5jb206cGFzc3dvcmQ=',
        //   'Content-type':  'application/x-www-form-urlencoded'
        // })
      })
        .then(data => data.text())
        .then(json => console.log(json))
    }

    const buttonJoinGroup : ButtonInterface = {
        text: 'Join',
        style: 'fill',
        color: 'primary',
        icon: undefined 
    }

    return(
        <>
            <label htmlFor="join" className="text-base font-bold mr-10">Join Group</label>
            <input type="checkbox" id="join" className="modal-toggle z-10" />
            <label htmlFor="join" className="modal cursor-pointer">
                <label className="modal-box relative p-5">
                    <div className="flex">
                        <p className="font-bold text-2xl flex-1">Join Group</p>
                        <a href="" className="text-primary font-bold">✕</a>
                    </div>
                    <p className="py-4 my-2.5">Enter the code generate by the group admin to join</p>
                    <div className="mt-5">
                        <form className="form-control w-full" onSubmit={handleSubmit(onSubmit)}>
                            <input type="text" placeholder="Enter the code" className="mb-5 input input-bordered w-full" {...register('generateCode')}/>
                            <Button props={buttonJoinGroup}/>
                        </form>
                    </div>
                </label>
            </label>
        </>
    )
    
}

