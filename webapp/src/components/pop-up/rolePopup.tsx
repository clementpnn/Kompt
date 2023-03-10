import { useState } from "react";
import { LabelInterface } from "../../interfaces/interfaces"
import Label from "../label"



export default function RolePopup({name, role}:{name:string, role:string}) {

    const labelMemberRole : LabelInterface = {
        text: 'Role',
        style: 'fill',
        color: 'primary',
        htmlFor: 'member_role',
        icon: undefined 
    }

    const [selectedOption, setSelectedOption] = useState(true)

    return (

        <>  
            <Label props={labelMemberRole}/>

            <input type="checkbox" id="member_role" className="modal-toggle z-10" />
            <label htmlFor="member_role" className="modal cursor-pointer">
                <label className="modal-box relative p-5">

                    <div className="flex">
                        <p className="font-bold text-2xl flex-1">Member Role</p>
                        <label htmlFor="member_role" className="text-primary font-bold">✕</label>
                    </div>

                    <div>
                        <p className="py-2 my-2.5">What should be the role of {name} ?</p>
                        <p className="py-2 my-2.5">Actual role : {role}</p>
                    </div>

                    <form className="grid grid-rows-2 gap-5 mt-5">

                        <div className="flex flex-row">
                            <input type="radio" name="role" className="radio mr-2.5" value="admin" checked={selectedOption === true} onChange={() => setSelectedOption(false)}/>
                            <p>Admin</p>
                        </div>

                        <div className="flex">
                            <input type="radio" name="role" className="radio mr-2.5" value="user"/>
                            <p>User</p>
                        </div>
                        
                    </form>

                </label>
            </label>
        </>

    )

}
