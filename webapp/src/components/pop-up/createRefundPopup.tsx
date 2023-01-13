import { useForm, SubmitHandler } from 'react-hook-form'
import { ButtonInterface, FormValues } from '../../interfaces/interfaces';
import Button from "../button"

export default function CreateRefundPopup() {
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
  
        
    const buttonCreate : ButtonInterface = {
        text: 'Create refund',
        style: 'fill',
        color: 'primary',
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
            <a href="#create_refund"><Button props={buttonCreate}/></a>
            <div className="modal" id="create_refund">
                <div className="modal-box">
                    <div className="flex">
                        <h3 className="font-bold text-2xl flex-1">Create Refund</h3>
                        <a href="" className="text-primary font-bold">✕</a>
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

                </div>
            </div>
        </>
    )

}

