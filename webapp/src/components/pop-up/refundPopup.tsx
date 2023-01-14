import { useForm, SubmitHandler } from 'react-hook-form'
import { ButtonInterface, FormValues } from '../../interfaces/interfaces';
import Button from '../button';



export default function RefundPopup() {

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

    const buttonRefund : ButtonInterface = {
        text: 'Refund',
        style: 'fill',
        color: 'primary',
        icon: undefined 
    }

    return(
        <>
            <label htmlFor="refund" className="text-base font-bold mr-10">Refund</label>
            <input type="checkbox" id="refund" className="modal-toggle z-10" />
            <label htmlFor="refund" className="modal cursor-pointer">
                <label className="modal-box relative p-5">
                    <div className="flex">
                        <p className="font-bold text-2xl flex-1">Refund</p>
                        {/* <a href="" className="text-primary font-bold">✕</a> */}
                    </div>
                    {/* <p className="py-4 my-2.5">Enter the code generate by the group admin to join</p> */}
                    <form className="form-control my-5" onSubmit={handleSubmit(onSubmit)}>
                         <label className="label label-text font-os text-large">
                            Amount
                         </label>
                         <input type="number" min="1" step="1"placeholder="Enter the refund amount" className="mb-10 input input-bordered w-full" {...register('password')}/>
                            <Button props={buttonRefund}/>
                         </form>
                </label>
            </label>
        </>
    )
    
}

