import { RefundMember, RefundGroup } from "../../interfaces/interfaces"
import Badge from "../badge"
import ProgressBar from "../progressbar"
import RefundPopup from "../pop-up/refundPopup";




export default function RefundTable({header, obj} : {header : string[], obj: RefundGroup}) {

    const tab = obj.members

    return (
        <div className="overflow-x-auto pt-14 px-20">
            <table className="table-normal w-full">
                <thead>
                    <tr className="border-b">
                        {header.map((value, index) => {
                            return <td key={index} className="bg-white font-os normal-case text-large font-bold">{value}</td>
                        })}
                    </tr>
                </thead>
                <tbody>

                    {tab.map((line : RefundMember) => {
                        if(line.paid == null){
                            line.paid = 0
                        }
                        if(line.payers_amount == null){
                            line.payers_amount = 0
                        }
                        return (
                            <tr key={line.id}>
                                <td className="font-os text-large ">{line.name}</td>
                                <td className="w-80 pr-20"><ProgressBar taille={"w-80"} value={line.paid} max={line.payers_amount}/></td>
                                <td className="font-os text-large text-primary font-bold">{`${line.paid}$ / ${line.payers_amount}$`}</td>
                                <td>{line.paid==line.payers_amount ? <Badge state="success"/> : <Badge state="processing"/>}</td>
                                <td><RefundPopup id={line.id}/></td>
                            </tr>
                        )
                })}

                </tbody>
            </table>
        </div>
    )
    
}
