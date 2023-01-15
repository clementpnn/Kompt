import { Link } from "react-router-dom"
import { ButtonInterface, LabelInterface } from "../../interfaces/interfaces"
import Button from "../button"
import Label from "../label"



export default function DeleteRefundPopup() {

    const buttonDelete : ButtonInterface = {
        text: 'Delete',
        style: 'fill',
        color: 'primary',
        icon: undefined 
    }
    const labelDeleterefund : LabelInterface = {
        text: 'Delete refund',
        style: 'fill',
        color: 'primary',
        htmlFor: 'delete_refund',
        icon: undefined 
    }
    const labelDeleterefundCancel : LabelInterface = {
        text: 'Cancel',
        style: 'outline',
        color: 'primary',
        htmlFor: 'delete_refund',
        icon: undefined 
    }    

    return(
        <>
            <Label props={labelDeleterefund}/>
            <input type="checkbox" id="delete_refund" className="modal-toggle z-10" />
            <label htmlFor="delete_refund" className="modal cursor-pointer">
                <label className="modal-box relative p-5">
                    <div className="flex">
                        <p className="font-bold text-2xl flex-1">Are you sure to delete the refund ?</p>
                        <label htmlFor="delete_refund" className="text-primary font-bold">✕</label>
                    </div>
                    <div className="grid grid-cols-2 gap-5 mt-5">

                        <Button props={buttonDelete}/>
                        <Label props={labelDeleterefundCancel}/>
                    </div>
                </label>
            </label>
        </>
    )
    
}