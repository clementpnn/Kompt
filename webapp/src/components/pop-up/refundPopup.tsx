import { useForm, SubmitHandler } from 'react-hook-form'
import { ButtonInterface, FormValues } from '../../interfaces/interfaces'
import { userStore } from '../../stores/store'
import Button from '../button'



export default function RefundPopup({id} : {id : number}) {

    const getJwt = userStore((state) => state.token)

    const { register, handleSubmit } = useForm<FormValues>()
    const onSubmit: SubmitHandler<FormValues> = (data : any) => {
      
      fetch("http://localhost:2329/pay", {
        method: "POST",
        mode: "cors",
        credentials: "include",
        body: new URLSearchParams({
            "id": id,
            ...data
        }),
        headers: {
            Authorization: "Bearer " + getJwt,
        },
        })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
      })

    }

    const buttonRefund : ButtonInterface = {
        text: 'Refund',
        style: 'fill',
        color: 'primary',
        icon: undefined 
    }

    return (
        
        <>
            <label htmlFor="refund" className="text-base font-bold mr-10">Refund</label>

            <input type="checkbox" id="refund" className="modal-toggle z-10" />
            <label htmlFor="refund" className="modal cursor-pointer">
                <label className="modal-box relative p-5">

                    <div className="flex">
                        <p className="font-bold text-2xl flex-1">Refund</p>
                        <label htmlFor="refund" className="text-primary font-bold">✕</label>
                    </div>

                    <form className="form-control my-5" onSubmit={handleSubmit(onSubmit)}>
                        <label className="label label-text font-os text-large">
                            Amount
                        </label>
                        <input type="number" min="1" step="1"placeholder="Enter the refund amount" className="mb-10 input input-bordered w-full" {...register('amount')}/>
                        <Button props={buttonRefund}/>
                    </form>

                </label>
            </label>
        </>

    )
    
}

