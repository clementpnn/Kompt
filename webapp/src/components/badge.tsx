export default function Badge({state}:{state:string}) {
   
    let button

    if(state=="processing") {
        button = <button className="px-2 pt-1 pb-1 rounded-full text-center text-xs bg-amber-200 text-orange-500 font-bold">processing</button>

    } else if(state=="success"){
        button = <button className="px-2 pt-1 pb-1 rounded-full text-center text-xs bg-lime-200 text-green-600 font-bold">success</button>
    }

    return (
        <>
            {button}
        </>
    )
    
  }