import { LabelInterface } from "../../interfaces/interfaces"
import Label from "../label"



export default function RolePopup({name, role}:{name:string, role:string}) {
    console.log({role})

    const labelMemberRole : LabelInterface = {
        text: 'Role',
        style: 'fill',
        color: 'primary',
        htmlFor: 'member_role',
        icon: undefined 
    }
    return(
        <>  
            <Label props={labelMemberRole}/>
                <input type="checkbox" id="member_role" className="modal-toggle z-10" />
                <label htmlFor="member_role" className="modal cursor-pointer">
                    <label className="modal-box relative p-5">
                        <div className="flex">
                            <p className="font-bold text-2xl flex-1">Member Role</p>
                            <a href="" className="text-primary font-bold">✕</a>
                        </div>
                        <div>
                            {/* Bug a corriger */}
                            <p className="py-2 my-2.5">What should be the role of {name} ?</p>
                            <p className="py-2 my-2.5">Actual role : {role}</p>
                        </div>
                        <div className="grid grid-rows-2 gap-5 mt-5">
                            {/* faire un fonction if pour afficher le bon deja coché */}
                            <div className="flex flex-row">
                                <input type="radio" name="role" className="radio mr-2.5" value="admin" checked />
                                <p>Admin</p>
                            </div>
                            <div className="flex">
                                <input type="radio" name="role" className="radio mr-2.5" value="user"/>
                                <p>User</p>
                            </div>
                        </div>
                    </label>
                </label>
        </>
    )

}
