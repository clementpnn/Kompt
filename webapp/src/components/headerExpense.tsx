import { RefundGroup } from "../interfaces/interfaces"
import Badge from "./badge"
import DeleteRefund from "./pop-up/deleteRefund"
import ProgressBar from "./progressbar"



export default function HeaderExpense({refund} : {refund : RefundGroup}) {
    
    return (

        <>
            <div className="grid grid-rows-1 grid-cols-2 mx-20 border-y pt-5 pb-8">

                <div>
                    <div className="flex items-center	">
                        <p className="font-os text-title3 font-bold mb-5 mr-10">{refund.title}</p>
                        <div className="mb-3">

                        <DeleteRefund />
                        </div>
                    </div>
                    <div className="flex items-center">
                        <Badge state={refund.paid == refund.payers_amount ? "success" : "processing"}/>
                        <p className="ml-6">{refund.date}</p>
                    </div>
                </div>

                <div className="flex flex-col items-end justify-center">
                    <ProgressBar taille={"h-4"} value={refund.paid} max={refund.payers_amount}/>
                    <p className="mt-6 font-os text-title4 font-bold text-primary">{`${refund.paid}$ / ${refund.payers_amount}$`}</p>
                </div>
                
            </div>
        </>
        
    )
    
}