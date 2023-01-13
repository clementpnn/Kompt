import { ButtonInterface } from "../interfaces/interfaces";


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

                        <p className="font-os text-title5 font-bold">{username}</p>

                    </div>
                </div>
                <div>
                    <p className="font-os text-large text-gray-500">your loans: <span className="font-medium text-title5 text-primary ml-4">{loanValue}$</span></p>
                    <p className="font-os text-large text-gray-500 ml-10">your debt: <span className="font-medium text-title5 text-primary ml-4">{debtValue}$</span></p>

                </div>
            </div>
            
        </div>
    )
}