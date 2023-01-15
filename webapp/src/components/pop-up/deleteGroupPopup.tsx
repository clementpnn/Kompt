import { ButtonInterface, LabelInterface } from "../../interfaces/interfaces"
import Button from "../button"
import Label from "../label"



export default function DeleteGroupPopup() {

    const buttonDelete : ButtonInterface = {
        text: 'Delete',
        style: 'fill',
        color: 'primary',
        icon: undefined 
    }

    const labelDeleteGroupCancel : LabelInterface = {
        text: 'Cancel',
        style: 'outline',
        color: 'primary',
        htmlFor: 'delete_group',
        icon: undefined 
    }

    return (

        <>            
            <input type="checkbox" id="delete_group" className="modal-toggle z-10" />
            <label htmlFor="delete_group" className="modal cursor-pointer">
                <label className="modal-box relative p-5">

                    <div className="flex">
                        <p className="font-bold text-2xl flex-1">Are you sure to delete the group ?</p>
                        <label htmlFor="delete_group" className="text-primary font-bold">✕</label>
                    </div>

                    <div className="grid grid-cols-2 gap-5 mt-5">
                        <Button props={buttonDelete}/>
                        <Label props={labelDeleteGroupCancel}/>
                    </div>

                </label>
            </label>
        </>

    )
    
}