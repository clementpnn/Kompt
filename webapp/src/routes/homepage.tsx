import { Routes, Route, Outlet, Link } from "react-router-dom";
import InvitePopup from '../components/pop-up/invitePopup'
import Badge from "../components/badge"

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
      <br/>
      <InvitePopup />
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