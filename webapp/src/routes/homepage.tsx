import { Routes, Route, Outlet, Link } from "react-router-dom";
import InvitePopup from '../components/pop-up/inviteGroupPopup'
import Badge from "../components/badge"
import CreateRefundPopup from "../components/pop-up/createRefundPopup";
import CreateGroupPopup from "../components/pop-up/createGroupPopup";
import JoinGroupPopup from "../components/pop-up/joinGroupPopup";

function HomeLog() {
  return (
    <div className="pt-20 bg-stone-100 h-screen flex justify-center items-center flex flex-col">
      <p className="text-center">Vous n'avez pas encore de groupe.</p>
      <p className="text-center">Rejoignez en un ou créez le.</p>
    </div>
  )
}
function HomeNotLog() {
  return (
    <div className="pt-20 bg-stone-100 h-screen flex justify-center items-center flex flex-col">
      <p className="text-center">Bienvenue sur Kompt</p>
      <p className="text-center">Créez un compte ou connectez-vous pour accéder à l'application</p>
      {/* <br/>
      <InvitePopup generateCode={"DZIOQJ249898JND2948"} />
      <CreateRefundPopup/>
      <CreateGroupPopup/>
      <JoinGroupPopup/> */}


    </div>
)

}






export default function Homepage() {
  
    const isLogged = false;
    return (
        <>
            {isLogged ? (
                <HomeLog />
            ) : (
                <HomeNotLog />
            )}
            <Outlet />
        </>
    );
  }