import { userStore } from "../stores/store";

export default function Test() {
  const getJwt = userStore((state) => state.token);
  const logout = userStore((state) => state.deleteUser);
  return (
    <>
      <h1>{getJwt}</h1>
      <button onClick={logout}>Je supprime</button>
    </>
  );
}