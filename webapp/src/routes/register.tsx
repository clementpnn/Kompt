import { useForm, SubmitHandler } from "react-hook-form";
import Button from "../components/button";
import { FormValues, ButtonInterface } from "../interfaces/interfaces";
import { userStore } from "../stores/store";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Register() {
  const setJwt = userStore((state) => state.setUser);
  const getJwt = userStore((state) => state.token);
  const navigate = useNavigate();

  useEffect(() => {
    if (getJwt != "" ) {
      navigate("/");
    } 
  });

  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data : any) => {
    fetch("http://localhost:2329/register", {
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
        setJwt(response.token);
      });
  };

  

  const buttonRegister: ButtonInterface = {
    text: "Register",
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
        <form className="form-control w-full" onSubmit={handleSubmit(onSubmit)}>
          <label className="label label-text font-bold font-os text-large">
            Name
          </label>
          <input
            type="text"
            placeholder="Enter username"
            className="mb-2 input input-bordered w-full"
            {...register("name")}
            required
          />
          <label className="label label-text font-bold font-os text-large">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter email"
            className="mb-2 input input-bordered w-full"
            {...register("email")}
            required
          />
          <label className="label label-text font-bold font-os text-large">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter password"
            className="mb-2 input input-bordered w-full"
            {...register("password")}
            required
          />
          <label className="label label-text font-bold font-os text-large">
            Confirm password
          </label>
          <input
            type="password"
            placeholder="Confirm password"
            className="mb-10 input input-bordered w-full"
            {...register("passwordConfirm")}
            required
          />
          <Button props={buttonRegister} />
        </form>
        <p className="font-os text-large">
          Already have a Kompt account ?{" "}
          <a href="/login" className="font-os font-bold text-large">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}