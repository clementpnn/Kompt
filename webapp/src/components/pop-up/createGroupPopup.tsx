import { useForm, SubmitHandler } from 'react-hook-form'
import { ButtonInterface, FormValues } from '../../interfaces/interfaces';
import Button from '../button';

export default function CreateGroupPopup() {
    const { register, handleSubmit } = useForm<FormValues>();
    const onSubmit: SubmitHandler<FormValues> = data => {
      
      fetch('http://localhost:5432/#create_group', {
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

    const buttonCreateGroup : ButtonInterface = {
        text: 'Create',
        style: 'fill',
        color: 'primary',
        icon: undefined 
    }
    return(
        <>
            {/* <a href="#create_group">ooo</a> */}
            <div className="modal" id="create_group">
                <div className="modal-box">
                <div className="flex">
                        <h3 className="font-bold text-2xl flex-1">Create Group</h3>
                        <a href="" className="text-primary font-bold">✕</a>
                    </div>
                    <p className="py-4 my-2.5">Create a group and invite your roomates</p>
                    <form className="form-control" onSubmit={handleSubmit(onSubmit)}>

{/* valeur entre parenthèses du ...register() à modifier */}
{/* j'ai ajouté "generateCode" dans interface pour formValues en attendant*/}
                        <input type="text" placeholder="Group name" className="mb-5 input input-bordered w-full" {...register('generateCode')}/>

                        <Button props={buttonCreateGroup}/>
                        

                    </form>

                </div>
            </div>
        </>
    )

}

