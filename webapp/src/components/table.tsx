import { LabelInterface, RefundGroup } from "../interfaces/interfaces"
import Badge from "./badge"
import ProgressBar from "./progressbar"
import { useNavigate } from 'react-router-dom';
import RefundPopup from "./pop-up/refundPopup";



export default function Table({header, tab} : {header : string[], tab: RefundGroup[]}) {

    const navigate = useNavigate();
    const LabelInviteGroup : LabelInterface = {
        text: "Create Refund",
        style: "fill",
        color: "primary",
        htmlFor: 'create_refund',
        icon: undefined 
    }


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

                    {tab.map(line => {
                
                        return (
                            // <tr onClick={() => navigate(`/refund_${line.id}`, {state: {id: line.id}})}>
                            <tr key={line.id} onClick={() => navigate('/landing/refund', {state: {id: line.id}})}>
                                <td className="font-os text-large ">{line.name}</td>
                                <td className="w-80 pr-20"><ProgressBar taille={"w-80"} value={line.expense} max={line.amount}/></td>
                                <td className="font-os text-large text-primary font-bold">{`${line.expense}$ / ${line.amount}$`}</td>
                                <td>{line.expense==line.amount ? <Badge state="success"/> : <Badge state="processing"/>}</td>
                                <td className="font-os text-large">{line.date}</td>
                                <td><RefundPopup/></td>
                            </tr>
                        )
                })}

                </tbody>
            </table>
        </div>
    )
    
}
