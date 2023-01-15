import { RefundGroup } from "../interfaces/interfaces"
import Badge from "./badge"
import ProgressBar from "./progressbar"
import { useNavigate } from 'react-router-dom'
import RefundPopup from "./pop-up/refundPopup"



export default function Table({header, tab} : {header : string[], tab: []}) {

    const navigate = useNavigate()

    var url = document.location.href; 
    const endOfUrl = url.substring (url.lastIndexOf( "/" )+1 )

    var onPage = false
    if (endOfUrl == "refund") {
        onPage = true
    } else {
        false
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

                    {tab.map((line : RefundGroup) => {
                        if(line.paid == null){
                            line.paid = 0
                        }
                        if(line.payers_amount == null){
                            line.payers_amount = 0
                        }
                        return (
                            <tr key={line.id} onClick={() => navigate('/landing/refund', {state: {id: line.id}})}>

                                <td className="font-os text-large ">{line.title}</td>
                                <td className="w-80 pr-20"><ProgressBar taille={"w-80"} value={line.paid} max={line.payers_amount}/></td>
                                <td className="font-os text-large text-primary font-bold">{`${line.paid}$ / ${line.payers_amount}$`}</td>
                                <td>{line.paid==line.payers_amount ? <Badge state="success"/> : <Badge state="processing"/>}</td>
                                <td className="font-os text-large">{line.date}</td>

                                {onPage ? (
                                    <td><RefundPopup/></td>
                                ) : ( 
                                    <></>
                                )}       

                            </tr>
                        )
                    })}

                </tbody>

            </table>

        </div>
        
    )
    
}
