import { ButtonInterface } from "../../interfaces/interfaces"
import Button from "../button"

export default function InvitePopup() {
    const buttonInvite : ButtonInterface = {
        text: 'Invite',
        style: 'outline',
        color: 'primary',
        icon: undefined 
    }
    return(
        <>
            <a href="#my-modal-2"><Button props={buttonInvite}/></a>
            <div className="modal" id="my-modal-2">
                <div className="modal-box">
                    <div className="flex">
                        <h3 className="font-bold text-lg flex-1">Congratulations random Internet user!</h3>
                        <a href="" className="text-primary font-bold">✕</a>
                    </div>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div className="modal-action">
                    </div>

                </div>
            </div>
        </>
    )

}

