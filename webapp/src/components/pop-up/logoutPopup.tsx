import { ButtonInterface } from "../../interfaces/interfaces"
import Button from "../button"



export default function LeaveGroupPopup() {

    const buttonLogout : ButtonInterface = {
        text: 'Log out',
        style: 'fill',
        color: 'primary',
        icon: undefined 
    }
    const buttonLogoutCancel : ButtonInterface = {
        text: 'Cancel',
        style: 'outline',
        color: 'primary',
        icon: undefined 
    }

    return(
        <>        
            <input type="checkbox" id="logout" className="modal-toggle z-10" />
            <label htmlFor="logout" className="modal cursor-pointer">
                <label className="modal-box relative p-5">
                    <div className="flex">
                        <p className="font-bold text-2xl flex-1">Are you sure to log out ?</p>
                        <label htmlFor="logout" className="text-primary font-bold">
                        ✕
                        </label>                    
                    </div>
                    <div className="grid grid-cols-2 gap-5 mt-5">
                        <Button props={buttonLogout}/>
                        <Button props={buttonLogoutCancel}/>
                    </div>
                </label>
            </label>
        </>
    )
    
}