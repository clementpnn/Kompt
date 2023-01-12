import { ButtonInterface } from "../interfaces/interfaces";
import Button from "./button/button";

export default function headerUser({username, loanValue, debtValue}:{username: string, loanValue: number, debtValue:number}) {
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
        <div className="mx-20 border-y bg-white">        
            <div className="navbar bg-base-100 p-0">
                <div className="flex-1">
                    <div className="flex-1 flex flex-col">

                        <p className="text-4xl text-bold">{username}</p>

                    </div>
                </div>
                <div className="flex-none">
                    <p className="text-gray-500">your loans: <span className="text-primary ml-2.5">{loanValue}$</span></p>
                    <p className="text-gray-500 ml-10">your debt: <span className="text-primary ml-2.5">{debtValue}$</span></p>

                </div>
            </div>
            
        </div>
    )
}