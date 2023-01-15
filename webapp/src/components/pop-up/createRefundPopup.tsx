import { useForm, SubmitHandler } from 'react-hook-form'
import { ButtonInterface, FormValues, LabelInterface } from '../../interfaces/interfaces';
import { userStore } from '../../stores/store';
import Button from "../button"
import Label from "../label"




export default function InvitePopup() {
    
    const getJwt = userStore((state) => state.token);
    const { register, handleSubmit } = useForm<FormValues>();
    const onSubmit: SubmitHandler<FormValues> = (data :any) => {
      
        fetch("http://localhost:2329/refund/create", {
            method: "POST",
            mode: "cors",
            credentials: "include",
            body: new URLSearchParams({
                ...data,
            }),
            headers: {
                Authorization: "Bearer " + getJwt,
            },
            })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
            });
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
                        <label htmlFor="create_refund" className="text-primary font-bold">
                        ✕
                        </label>
                    </div>
                    <form className="form-control my-5" onSubmit={handleSubmit(onSubmit)}>
                         <label className="label label-text font-os text-large">
                            Title
                         </label>
                         <input type="text" placeholder="Enter the title of the refund" className="mb-2 input input-bordered w-full" {...register('title')}/>
                         <label className="label label-text font-os text-large">
                            Amount
                         </label>
                         <input type="number" min="1" step="1"placeholder="Enter the refund amount" className="mb-10 input input-bordered w-full" {...register('amount')}/>
                         <Button props={buttonCreateRefund}/>
                     </form>
                </label>
            </label>
         </>
     )
     
 }


