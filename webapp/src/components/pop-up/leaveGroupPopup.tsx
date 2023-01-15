import { ButtonInterface, LabelInterface } from "../../interfaces/interfaces"
import Button from "../button"
import Label from "../label"



export default function LeaveGroupPopup() {

    const buttonLeaveGroup : ButtonInterface = {
        text: 'Leave group',
        style: 'fill',
        color: 'primary',
        icon: undefined 
    }
    const labelLeaveGroupCancel : LabelInterface = {
        text: 'Cancel',
        style: 'outline',
        color: 'primary',
        htmlFor: 'leave_group',
        icon: undefined 
    }

    return(
        <>
            <input type="checkbox" id="leave_group" className="modal-toggle z-10" />
            <label htmlFor="leave_group" className="modal cursor-pointer">
                <label className="modal-box relative p-5">
                    <div className="flex">
                        <p className="font-bold text-2xl flex-1">Are you sure to leave the group ?</p>
                        <label htmlFor="leave_group" className="text-primary font-bold">
                        ✕
                        </label>
                    </div>
                    <div className="grid grid-cols-2 gap-5 mt-5">

                        <Button props={buttonLeaveGroup}/>
                        <Label props={labelLeaveGroupCancel}/>

                    </div>
                </label>
            </label>
        </>
    )
    
}