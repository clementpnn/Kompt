import { GroupHeader, RefundGroup } from "../../interfaces/interfaces"
import Badge from "../badge"
import ProgressBar from "../progressbar"
import { useNavigate } from 'react-router-dom';





export default function GroupTable({header, obj} : {header : string[], obj: GroupHeader}) {

    const navigate = useNavigate();
    const tab = obj.refund
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

                    {tab.map((line : RefundGroup) => {
                        if(line.paid == null){
                            line.paid = 0
                        }
                        if(line.payers_amount == null){
                            line.payers_amount = 0
                        }
                        return (
                            <tr key={line.id} onClick={() => navigate('/landing/refund', {state: {id: line.id, admin: obj.admin}})}>
                                <td className="font-os text-large ">{line.title}</td>
                                <td className="w-80 pr-20"><ProgressBar taille={"w-80"} value={line.paid} max={line.payers_amount}/></td>
                                <td className="font-os text-large text-primary font-bold">{`${line.paid}$ / ${line.payers_amount}$`}</td>
                                <td>{line.paid==line.payers_amount ? <Badge state="success"/> : <Badge state="processing"/>}</td>
                                <td className="font-os text-large">{line.date}</td>
                                
                            </tr>
                        )
                    })}

                </tbody>

            </table>

        </div>
        
    )
    
}
