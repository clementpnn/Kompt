import { LabelInterface } from "../../interfaces/interfaces"
import Label from "../label"



export default function InvitePopup({generateCode}:{generateCode:string}) {

    const LabelInviteGroup : LabelInterface = {
        text: "Invite",
        style: "outline",
        color: "primary",
        htmlFor: 'invite',
        icon: undefined 
    }

    return(
        <>
            <Label props={LabelInviteGroup}/>
            <input type="checkbox" id="invite" className="modal-toggle z-10" />
            <label htmlFor="invite" className="modal cursor-pointer">
                <label className="modal-box relative p-5">
                    <div className="flex">
                        <p className="font-bold text-2xl flex-1">Create Group</p>
                        {/* <a href="" className="text-primary font-bold">✕</a> */}
                    </div>
                    <p className="py-4">Give this code to your rommates to join the group</p>
                    <div className="flex justify-center	">
                        <p className="text-primary font-bold">{generateCode}</p>
                    </div>
                </label>
            </label>
         </>
     )
     
 }
