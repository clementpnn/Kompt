import { ButtonInterface } from "../../interfaces/interfaces"
import Button from "../button"

export default function LeaveGroupPopup() {
    const buttonLeave : ButtonInterface = {
        text: 'Leave group',
        style: 'fill',
        color: 'primary',
        icon: undefined 
    }
    const buttonLeaveCancel : ButtonInterface = {
        text: 'Cancel',
        style: 'outline',
        color: 'primary',
        icon: undefined 
    }

    return(
        <>
        
            <input type="checkbox" id="leave_group" className="modal-toggle z-10" />
            <label htmlFor="leave_group" className="modal cursor-pointer">
                <label className="modal-box relative p-5">
                    <div className="flex">
                        <p className="font-bold text-2xl flex-1">Are you sure to leave the group ?</p>
                        <a href="" className="text-primary font-bold">✕</a>
                    </div>
                    <div className="grid grid-cols-2 gap-5 mt-5">

                        <Button props={buttonLeave}/>
                        <Button props={buttonLeaveCancel}/>

                    </div>
                </label>
            </label>
        </>
    )
}