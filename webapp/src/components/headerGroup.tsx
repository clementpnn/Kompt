import {ReactComponent as User} from '../assets/icon/user.svg'
import InvitePopup from './pop-up/inviteGroupPopup'
import CreateRefundPopup from "../components/pop-up/createRefundPopup"
import { Link } from 'react-router-dom'
import { GroupHeader } from '../interfaces/interfaces'



export default function HeaderGroup({group}:{group : GroupHeader}) {

    return (

        <>
            <div className="mx-20 bg-white border-y py-5">  
                <div className="navbar bg-base-100 p-0">
                    <div className="flex-1">
                        <div className="flex-1 flex flex-col">
                            <p className="font-os text-title3 font-bold">{group.name}</p>
                            <div className="flex my-5">
                                <div className="flex items-center">
                                    < User />
                                    <p className="font-os text-large font-bold text-grey-500 ml-2 mr-4">{group.member}</p>
                                </div>

                                <Link to="/landing/members_group" className="font-os text-large font-bold text-primary">see all members</Link>

                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex">
                            <div className="mr-5">
                                <InvitePopup generateCode={group.code} />
                            </div>
                            <div>
                                <CreateRefundPopup/>
                            </div>
                        </div>
                    </div>   
                </div>
            </div>
        </>
    )
    
}
