import { useForm, SubmitHandler } from 'react-hook-form'
import { ButtonInterface, FormValues } from '../../interfaces/interfaces'
import Button from '../button'
import { userStore } from "../../stores/store"



export default function JoinGroupPopup() {

    const getJwt = userStore((state) => state.token)
    const setGroup = userStore((state) => state.setGroup)

    const { register, handleSubmit } = useForm<FormValues>()
    const onSubmit: SubmitHandler<FormValues> = (data : any) => {
      
        fetch("http://localhost:2329/collocation/joined", {
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
                if(data.isInCollocation == 'yes'){
                    setGroup(true)
                }
            })

    }

    const buttonJoinGroup : ButtonInterface = {
        text: 'Join',
        style: 'fill',
        color: 'primary',
        icon: undefined 
    }

    return (

        <>
            <label htmlFor="join" className="text-base font-bold mr-10">Join Group</label>

            <input type="checkbox" id="join" className="modal-toggle z-10" />
            <label htmlFor="join" className="modal cursor-pointer">
                <label className="modal-box relative p-5">

                    <div className="flex">
                        <p className="font-bold text-2xl flex-1">Join Group</p>
                        <label htmlFor="join" className="text-primary font-bold">✕</label>
                    </div>

                    <p className="py-4 my-2.5">Enter the code generate by the group admin to join</p>

                    <div className="mt-5">
                        <form className="form-control w-full" onSubmit={handleSubmit(onSubmit)}>
                            <input type="text" placeholder="Enter the code" className="mb-5 input input-bordered w-full" {...register('code')}/>
                            <Button props={buttonJoinGroup}/>
                        </form>
                    </div>

                </label>
            </label>
        </>

    )
    
}

