import { useState } from "react"
import { GroupHeader } from "../interfaces/interfaces"
import { userStore } from "../stores/store"

export default function Test() {
  const getJwt = userStore((state) => state.token)
  
  // interface DataGroup{
  //   dataGroup: GroupHeader,
  //   loading: boolean
  // }

  // const [state, setState] = useState<DataGroup>({
  //   dataGroup: {
  //     name: "",
  //     member: 0,
  //     user: "",
  //     debt: 0,
  //     refund: [],
  //     code: "",
  // },
  //   loading: true
  // })
  // try {
  //   const response = await fetch("http://localhost:2329/dashboard", {
  //     method: "GET",
  //     mode: "cors",
  //     credentials: "include",
  //     headers: {
  //     Authorization: "Bearer " + getJwt,
  //     },
  // })
  //   const data = await response.json();
  //   setState({dataGroup: data, loading: false})
  // } catch (error) {
  //   console.error('Error:', error);
  // }


  return (
    <>
      {/* {state.loading == true && state.dataGroup.name} */}
    </>
  )
}