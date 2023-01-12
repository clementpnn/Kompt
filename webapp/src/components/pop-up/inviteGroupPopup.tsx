import { ButtonInterface } from "../../interfaces/interfaces"
import Button from "../button"

export default function InvitePopup({generateCode}:{generateCode:string}) {
    const buttonInvite : ButtonInterface = {
        text: 'Invite',
        style: 'outline',
        color: 'primary',
        icon: undefined 
    }
    return(
        <>
            <a href="#invite"><Button props={buttonInvite}/></a>
            <div className="modal" id="invite">
                <div className="modal-box">
                    <div className="flex">
                        <h3 className="font-bold text-lg flex-1">Generate Code</h3>
                        <a href="" className="text-primary font-bold">✕</a>
                    </div>
                    <p className="py-4">Give this code to your rommates to join the group</p>
                    <div className="flex justify-center	">
                        <p className="text-primary font-bold">{generateCode}</p>
                    </div>

                </div>
            </div>
        </>
    )

}

