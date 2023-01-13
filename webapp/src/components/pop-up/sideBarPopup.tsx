import { useState } from 'react';
import { ButtonInterface } from '../../interfaces/interfaces';
import Button from '../button';

export default function SideBarPopup() {

    const buttonLeaveGroup : ButtonInterface = {
        text: 'Leave Group',
        style: 'fill',
        color: 'primary',
        icon: undefined 
    }
    const buttonLogout : ButtonInterface = {
        text: 'Logout',
        style: 'fill',
        color: 'primary',
        icon: undefined 
    }

    return(
        <>
            <div className="drawer drawer-end mt-16 bg-none fixed">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-side" id="drawer">

                    <label htmlFor="my-drawer-4" className="drawer-overlay"></label>

                    <div className="w-80 bg-white pl-10 pr-20 py-1">

                        <div className="flex flex-col py-10">
                            <p className="mb-5">Username</p>
                            <p>email</p>
                        </div>

                        <div className="flex flex-col py-10 border-y">
                            <div className="mb-5 w-full">
                                <Button props={buttonLeaveGroup}/>
                            </div>
                            <Button props={buttonLogout}/>
                        </div>

                    </div>
                </div>
            </div>

            
        </>
    )
}

// function Hide() {

// }