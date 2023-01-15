import { Outlet, Link } from "react-router-dom"
import { ReactComponent as Menu } from "../assets/icon/menu.svg"
import { userStore } from "../stores/store"
import CreateGroupPopup from "./pop-up/createGroupPopup"
import JoinGroupPopup from "./pop-up/joinGroupPopup"



function NavbarLog() {

  return (
    <>
      <JoinGroupPopup />
      <CreateGroupPopup />
    </>
  )

}

function NavbarNotLog() {

  return (
    <>
      <a href="/login" className="font-os text-large font-bold mr-10">
        Log In
      </a>
      <a href="/register" className="font-os text-large font-bold">
        Sign In
      </a>
    </>
  )

}

function NavbarInGroup() {

  return (
      <label htmlFor="drawer">
        <Menu />
      </label>
  )

}

export default function Navbar() {

  const getJwt = userStore((state) => state.token)
  const getGroup = userStore((state) => state.group)

  let isLogged: boolean = false

  if (getJwt == "") {
    isLogged = false
  } else {
    isLogged = true
  }

  return (
    
    <>
      <div className="px-20 border-b w-full fixed bg-white z-10">
        <div className="navbar bg-base-100 p-0">

          <div className="flex-1">
            <Link to="/" className="font-os font-bold text-title4 text-primary">
              Kompt
            </Link>
          </div>

          <div className="flex-none">
            {isLogged ? (
              <>{getGroup == true ? <NavbarInGroup /> : <NavbarLog />}</>
            ) : (
              <NavbarNotLog />
            )}
          </div>

        </div>
      </div>
      <Outlet />
    </>

  )

}