import { RefundGroup } from "../interfaces/interfaces";
import Badge from "./badge";
import BreadCrumbs from "./breadcrumbs";
import ProgressBar from "./progressbar";



export default function HeaderExpense({refund} : {refund : RefundGroup}){
    
    return(
        <>
            <div className="mb-5 mx-20 pt-28">
                <BreadCrumbs page="Expenses"/>   
            </div> 
            <div className="grid grid-rows-1 grid-cols-2 mx-20 ">
                <div>
                    <p className="font-os text-title3 font-bold  mb-6">{refund.name}</p>
                    <div className="flex items-center">
                        <Badge state={refund.expense == refund.amount ? "success" : "processing"}/>
                        <p className="ml-6">{refund.date}</p>
                    </div>
                </div>
                <div className="flex flex-col items-end justify-center">
                    <ProgressBar taille={"h-4"} value={refund.expense} max={refund.amount}/>
                    <p className="mt-6 font-os text-title4 font-bold text-primary">{`${refund.expense}$ / ${refund.amount}$`}</p>
                </div>
                
            </div>
        </>
        
    )
    
}