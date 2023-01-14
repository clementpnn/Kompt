import { useForm, SubmitHandler } from "react-hook-form";
import { ButtonInterface, FormValues } from "../interfaces/interfaces";
import Button from "../components/button";
import { userStore } from "../stores/store";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Login() {
  const setJwt = userStore((state) => state.setUser);
  const getJwt = userStore((state) => state.token);
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    fetch("http://localhost:2329/login", {
      method: "POST",
      mode: "cors",
      body: new URLSearchParams({
        ...data,
      }),
      credentials: "include",
      headers: new Headers({
        "Content-type": "application/x-www-form-urlencoded",
      }),
    })
      .then((data) => data.json())
      .then((response) => {
        if ("token" in response) {
          setJwt(response.token);
        } else {
          console.log(response.error);
        }
      });
  };

  useEffect(() => {
    if (getJwt != "" && getJwt != undefined) {
      navigate("/");
    }
  });

  const buttonLogin: ButtonInterface = {
    text: "Login",
    style: "fill",
    color: "primary",
    icon: undefined,
  };

  return (
    <div className="flex justify-center h-screen items-center">
      <div className="w-1/3 h-screen flex flex-col place-content-evenly">
        <div className="flex text-center flex-col">
          <p className="font-os text-title3 font-bold"> Welcome to Kompt ! </p>
        </div>
        <form className="form-control" onSubmit={handleSubmit(onSubmit)}>
          <label className="label label-text font-bold font-os text-large">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter email"
            className="mb-2 input input-bordered w-full"
            {...register("email")}
          />
          <label className="label label-text font-bold font-os text-large">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter password"
            className="mb-10 input input-bordered w-full"
            {...register("password")}
          />
          <Button props={buttonLogin} />
        </form>
        <p className="font-os text-large">
          New on Kompt ?{" "}
          <Link to="/register" className="font-os font-bold text-large">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}