import { useForm, SubmitHandler } from 'react-hook-form'
import { ButtonInterface, FormValues, LabelInterface } from '../../interfaces/interfaces';
import Button from "../button"
import Label from "../label"




export default function InvitePopup() {

    const { register, handleSubmit } = useForm<FormValues>();
    const onSubmit: SubmitHandler<FormValues> = data => {
      
      fetch('http://localhost:5432/#create_refund', {
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

    const LabelInviteGroup : LabelInterface = {
        text: "Create Refund",
        style: "fill",
        color: "primary",
        htmlFor: 'create_refund',
        icon: undefined 
    }
    const buttonCreateRefund : ButtonInterface = {
        text: 'Create',
        style: 'fill',
        color: 'primary',
        icon: undefined 
    }
    
    return(
        <>
            <Label props={LabelInviteGroup}/>
            <input type="checkbox" id="create_refund" className="modal-toggle z-10" />
            <label htmlFor="create_refund" className="modal cursor-pointer">
                <label className="modal-box relative p-5">
                    <div className="flex">
                        <p className="font-bold text-2xl flex-1">Create Refund</p>
                        {/* <a href="" className="text-primary font-bold">✕</a> */}
                    </div>
                    <form className="form-control my-5" onSubmit={handleSubmit(onSubmit)}>
                         <label className="label label-text font-os text-large">
                            Title
                         </label>
                         <input type="text" placeholder="Enter the title of the refund" className="mb-2 input input-bordered w-full" {...register('email')}/>
                         <label className="label label-text font-os text-large">
                            Amount
                         </label>
                         <input type="number" min="1" step="1"placeholder="Enter the refund amount" className="mb-10 input input-bordered w-full" {...register('password')}/>
                         <Button props={buttonCreateRefund}/>
                     </form>
                </label>
            </label>
         </>
     )
     
 }


