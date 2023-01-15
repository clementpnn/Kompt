import { useEffect, useState } from 'react'
import {LabelInterface } from '../../interfaces/interfaces'
import Label from '../label'



export default function SideBarPopup() {

    const [checkBoxValue, setCheckBoxValue] = useState(false)
    const [style, setStyle] = useState("")

    useEffect(()=>{
        if(checkBoxValue == false){
            setStyle("w-0 ")
        } else if(checkBoxValue == true){
            setStyle("")
        }
    })

    const labelLeaveGroup : LabelInterface = {
        text: 'Leave Group',
        style: 'fill',
        color: 'primary',
        htmlFor: 'leave_group',
        icon: undefined 
    }
    const labelLogout : LabelInterface = {
        text: 'Log out',
        style: 'fill',
        color: 'primary',
        htmlFor: 'logout',
        icon: undefined 
    }
    const labelDeleteGroup : LabelInterface = {
        text: 'Delete Group',
        style: 'fill',
        color: 'primary',
        htmlFor: 'delete_group',
        icon: undefined 
    }

    return (

        <>      
            <div className={`drawer ${style}drawer-end mt-16 bg-none fixed `}>
                <input id="drawer" type="checkbox" checked={checkBoxValue} onChange={e => setCheckBoxValue(e.target.checked)} className="drawer-toggle" />
                <div className="drawer-side" id="drawer">
                    <label htmlFor="drawer" className="drawer-overlay"></label>
                    <div className="w-80 bg-white pl-10 pr-20 py-1">

                        <div className="flex flex-col py-10">
                            <p className="mb-5">Username</p>
                            <p>email</p>
                        </div>

                        <div className="flex flex-col py-10 border-y">
                            <div className="mb-5 w-full">
                                <Label props={labelLeaveGroup}/>
                            </div>
                            <Label props={labelLogout}/>
                        </div>
                        <div className="border-b w-full py-10">
                            <Label props={labelDeleteGroup}/>
                        </div>

                    </div>
                </div>
            </div>
        </>

    )
    
}


