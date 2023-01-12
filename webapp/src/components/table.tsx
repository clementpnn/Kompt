import { RefundData } from "../interfaces/interfaces"
import Badge from "./badge"
import ProgressBar from "./progressbar"

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
    <div className="overflow-x-auto pt-14 px-20">
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
                        <td className="w-80 pr-20"><ProgressBar value={line.debt} max={line.amount}/></td>
                        <td>{`${line.debt} / ${line.amount}`}</td>
                        <td>{line.debt==line.amount ? <Badge state="success"/> : <Badge state="processing"/>}</td>
                        <td>{line.date}</td>
                    </tr>
                )
            })}
            </tbody>
        </table>
        </div>
    )
}
