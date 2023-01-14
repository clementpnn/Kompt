import {LabelInterface } from '../../interfaces/interfaces';
import Label from '../label';



export default function SideBarPopup() {

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

    return(
        <>
            <div className="drawer drawer-end mt-16 bg-none fixed hidden">
                <input id="drawer" type="checkbox" className="drawer-toggle" />
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
                    </div>
                </div>
            </div>            
        </>
    )
    
}
