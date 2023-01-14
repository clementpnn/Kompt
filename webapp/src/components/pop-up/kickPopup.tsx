import { useForm, SubmitHandler } from 'react-hook-form'
import { ButtonInterface, FormValues, LabelInterface } from '../../interfaces/interfaces';
import Button from '../button';
import Label from '../label';



export default function KickMemberPopup({name}:{name:string}) {

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

    const labelKickMember : LabelInterface = {
        text: 'Kick',
        style: 'fill',
        color: 'primary',
        htmlFor: 'kick_member',
        icon: undefined 
    }
    const buttonKick : ButtonInterface = {
        text: 'Kick',
        style: 'fill',
        color: 'primary',
        icon: undefined 
    }
    const buttonKickCancel : ButtonInterface = {
        text: 'Cancel',
        style: 'outline',
        color: 'primary',
        icon: undefined 
    }


    

    return(
        <>
            <Label props={labelKickMember}/>
            <input type="checkbox" id="kick_member" className="modal-toggle z-10" />
            <label htmlFor="kick_member" className="modal cursor-pointer">
                <label className="modal-box relative p-5">
                    <div className="flex">
                        <p className="font-bold text-2xl flex-1">Kick member</p>
                        <a href="" className="text-primary font-bold">✕</a>
                    </div>
                    <p className="py-4 my-2.5">Are you sure to kick {name} ?</p>
                    <div className="grid grid-cols-2 gap-5 mt-5">
                        <Button props={buttonKick}/>
                        <Button props={buttonKickCancel}/>
                    </div>
                </label>
            </label>
        </>
    )
    
}

