export default function BreadCrumbs({page}:{page:string | undefined}) {
    
    return(
        <>
            <div className="text-sm breadcrumbs">
                <ul>
                    <li><a href="/landing">Home</a></li> 
                    { {page} ? (   
                        <li> {page} </li>
                    ) : ( 
                        <p></p>
                    )}
                </ul>
            </div>
        </>
    )

}

