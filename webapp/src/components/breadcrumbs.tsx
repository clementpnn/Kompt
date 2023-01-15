import { Link } from "react-router-dom"



export default function BreadCrumbs({page}:{page:string | undefined}) {
    
    return (
        <>
            <div className="text-sm breadcrumbs">
                <ul>
                    <li><Link to="/landing">Home</Link></li> 
 
                    { {page} ? (   
                        <li> {page} </li>
                    ) : ( 
                        <></>
                    )}
                </ul>
            </div>
        </>
    )

}

