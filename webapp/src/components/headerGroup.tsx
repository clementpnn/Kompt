// import { Routes, Route, Outlet, Link } from "react-router-dom";

import {ReactComponent as User} from '../assets/icon/user.svg';
import { ButtonInterface } from "../interfaces/interfaces";
import Button from "./button";



export default function HeaderGroup({groupName, groupId, groupMemberNumber}:{groupName: string, groupId: number, groupMemberNumber:number}) {
    const buttonInvite : ButtonInterface = {
        text: 'Invite',
        style: 'outline',
        color: 'primary',
        icon: undefined 
    }
    const buttonCreate : ButtonInterface = {
        text: 'Create refund',
        style: 'fill',
        color: 'primary',
        icon: undefined 
    }
    
    return (
        <div className="mx-20 pt-32 bg-white">        
            <div className="navbar bg-base-100 p-0">
                <div className="flex-1">
                    <div className="flex-1 flex flex-col">

                        <p className="font-os text-title3 font-bold">{groupName}</p>

                        <div className="flex my-5">
                            <div className="flex items-center">
                                < User />
                                <p className="font-os text-large font-bold text-grey-500 ml-2 mr-4">{groupMemberNumber}</p>
                            </div>

                            <p><a className="font-os text-large font-bold text-primary"href={`/landing/members_group_${groupId}`}>see all members</a></p>
                        </div>

                    </div>
                </div>
                <div>
                    <div className="mr-4">
                        <Button props={buttonInvite}/>
                    </div>
                    <Button props={buttonCreate}/>

                </div>
            </div>
            {/* <Outlet /> */}
            
        </div>
    )
}
