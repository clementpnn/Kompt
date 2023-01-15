import { useForm, SubmitHandler } from "react-hook-form";
import { ButtonInterface, FormValues } from "../../interfaces/interfaces";
import { userStore } from "../../stores/store";
import Button from "../button";

export default function CreateGroupPopup() {
  const getJwt = userStore((state) => state.token);
  const setGroup = userStore((state) => state.setGroup);

  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data : any) => {
    fetch("http://localhost:2329/collocation/create", {
      method: "POST",
      mode: "cors",
      credentials: "include",
      body: new URLSearchParams({
        ...data,
      }),
      headers: {
        Authorization: "Bearer " + getJwt,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if(data.isInCollocation == 'yes'){
          setGroup(true)
        }
      });
  };

  const buttonJoinGroup: ButtonInterface = {
    text: "Create",
    style: "fill",
    color: "primary",
    icon: undefined,
  };

  return (
    <>
      <label htmlFor="logout" className="text-base font-bold">
        Create Group
      </label>
      <input type="checkbox" id="logout" className="modal-toggle z-10" />
      <label htmlFor="logout" className="modal cursor-pointer">
        <label className="modal-box relative p-5">
          <div className="flex">
            <p className="font-bold text-2xl flex-1">Create Group</p>
            {/* <a href="" className="text-primary font-bold">
              ✕
            </a> */}
          </div>
          <p className="py-4 my-2.5">Create a group and invite your roomates</p>
          <div className="mt-5">
            <form
              className="form-control w-full"
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                type="text"
                placeholder="Enter the group name"
                className="mb-5 input input-bordered w-full"
                required
                {...register("name")}
              />
              <Button props={buttonJoinGroup} />
            </form>
          </div>
        </label>
      </label>
    </>
  );
}