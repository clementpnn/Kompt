import { Link } from "react-router-dom"

export default function PageNotFound() {
    return (
        <div className="pt-20 bg-stone-100 h-screen flex justify-center items-center flex flex-col text-title1">
            <p className="text-center">Error - Page not found</p>
            <Link to="/" className="hover:underline">Return to homepage</Link>
        </div>
    )

}