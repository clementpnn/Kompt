import { RefundData } from "../../interfaces/interfaces"
import Badge from "../badge"

export default function Table() {

    const headerTable : string[] = ["Refund", "Loading", "Amount", "Status", "Date"]

    const data : RefundData[] = [
        {
            name: "Refund de la bouffe",
            debt: 10,
            amount: 20,
            date: "Jan 11, 2022"
        },
        {
            name: "Refund de la wifi",
            debt: 30,
            amount: 30,
            date: "Fev 24, 2022"
        },
        {
            name: "Soirée halloween",
            debt: 15,
            amount: 25,
            date: "Jan 15, 2022"
        },
    ]
    
    return (
    <div className="overflow-x-auto">
        <table className="table w-full">
            <thead>
            <tr className="border-b">
                {headerTable.map(value => {
                    return <td className="bg-white">{value}</td>
                })}
            </tr>
            </thead>
            <tbody>
            {data.map(line => {
                return (
                    <tr>
                        <td>{line.name}</td>
                        <td>{line.amount}</td>
                        <td>{`${line.debt} / ${line.amount}`}</td>
                        <td>{line.debt==line.amount ? <Badge state="sucess"/> : <Badge state="progress"/>}</td>
                        <td>{line.date}</td>
                    </tr>
                )
            })}
            </tbody>
        </table>
        
        </div>
    )
}