import { Outlet } from "react-router-dom";
import { userStore } from "../stores/store";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


function HomeLog() {
  return (
    <div className="pt-20 bg-stone-100 h-screen flex justify-center items-center flex flex-col">
      <p className="text-center">Vous n'avez pas encore de groupe.</p>
      <p className="text-center">Rejoignez en un ou créez le.</p>
    </div>
  );
}
function HomeNotLog() {
  return (
    <div className="pt-20 bg-stone-100 h-screen flex justify-center items-center flex flex-col">
      <p className="text-center">Bienvenue sur Kompt</p>
      <p className="text-center">Créez un compte ou connectez-vous pour accéder à l'application</p>
    </div>
  );
}

export default function Homepage() {
  const getJwt = userStore((state) => state.token);
  const getGroup = userStore((state) => state.group);
  const setGroup = userStore((state) => state.setGroup);
  const navigate = useNavigate();

  let isLogged: boolean = false;
  if (getJwt == "") {
    isLogged = false;
  } else {
    isLogged = true;
    fetch("http://localhost:2329/collocation", {
      method: "GET",
      mode: "cors",
      credentials: "include",
      headers: {
        Authorization: "Bearer " + getJwt,
      },
    })
    .then((response) => response.json())
    .then((data) => {
      if(data.isInCollocation == "yes"){
        
        setGroup(true)
      }
    })
  }

  useEffect(() => {
    if (getGroup == true) {
      navigate("/landing");
    }
  });
  
  return (
    <>
      {isLogged ? <HomeLog /> : <HomeNotLog />}
      <Outlet />
    </>
  );
}
