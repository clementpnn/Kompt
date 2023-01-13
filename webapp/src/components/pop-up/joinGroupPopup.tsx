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
            <div className="modal" id="join_group">
                <div className="modal-box">
                <div className="flex">
                        <h3 className="font-bold text-2xl flex-1">Join Group</h3>
                        <a href="" className="text-primary font-bold">✕</a>
                    </div>
                    <p className="py-4 my-2.5">Enter the code generate by the group admin to join</p>
                    <form className="form-control" onSubmit={handleSubmit(onSubmit)}>

{/* valeur entre parenthèses du ...register() à modifier */}
{/* j'ai ajouté "generateCode" dans interface pour formValues en attendant*/}
                    <input type="text" placeholder="Enter the code" className="mb-5 input input-bordered w-full" {...register('generateCode')}/>

                        <Button props={buttonJoinGroup}/>
                        

                    </form>

                </div>
            </div>
        </>
    )

}

