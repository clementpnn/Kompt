import {ReactComponent as User} from '../assets/icon/user.svg';
import InvitePopup from './pop-up/inviteGroupPopup';
import CreateRefundPopup from "../components/pop-up/createRefundPopup";
import BreadCrumbs from './breadcrumbs';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { userStore } from '../stores/store';
import { GroupHeader } from '../interfaces/interfaces';



export default function HeaderGroup() {

    const getJwt = userStore((state) => state.token);
 
    const [groupData, setGroupData] = useState<GroupHeader>({
        code: "",
        name: "",
        member: 0,
        user: "",
        debt: 0,
    })
    useEffect(
        () => {
            fetch("http://localhost:2329/dashboard", {
                method: "GET",
                mode: "cors",
                credentials: "include",
                headers: {
                Authorization: "Bearer " + getJwt,
                },
            })
            .then((response) => response.json())
            .then((data) => {
                setGroupData({
                    code: data.collocationCode,
                    name: data.collocationName,
                    member: data.peoples,
                    user: data.userName,
                    debt: data.toPay
                })
            })
        }
    )
    
    return (
        <>
            <div className="mb-5 mx-20 pt-28">
                <BreadCrumbs page=""/>   
            </div> 
            <div className="mx-20 bg-white">  
                <div className="navbar bg-base-100 p-0">
                    <div className="flex-1">
                        <div className="flex-1 flex flex-col">
                            <p className="font-os text-title3 font-bold">{groupData.name}</p>
                            <div className="flex my-5">
                                <div className="flex items-center">
                                    < User />
                                    <p className="font-os text-large font-bold text-grey-500 ml-2 mr-4">{groupData.member}</p>
                                </div>

                                <Link to="/landing/members_group" className="font-os text-large font-bold text-primary">see all members</Link>

                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex">
                            <div className="mr-5">
                                <InvitePopup generateCode={groupData.code} />
                            </div>
                            <CreateRefundPopup/>
                        </div>
                    </div>   
                </div>
            </div>
            <div className="mx-20 border-y bg-white">        
                <div className="navbar bg-base-100 p-0">
                    <div className="flex-1">
                        <div className="flex-1 flex flex-col">
                            <p className="font-os text-title5 font-bold">{groupData.user}</p>
                        </div>
                    </div>
                    <div>
                        <p className="font-os text-large text-gray-500 ml-10">your debt: <span className="font-medium text-title5 text-primary ml-4">{groupData.debt==null ? 0 : groupData.debt}$</span></p>
                    </div>
                </div>
            </div>
        </>
    )
    
}
