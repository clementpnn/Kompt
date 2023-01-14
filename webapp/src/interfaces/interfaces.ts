interface State {
  compteur: number;
  increase: () => void
}

interface Jwt {
  jwt: string;
  setJwt: (newState : string) => void;
}

interface Logged {
  isLogged: boolean;
  toggle: () => void
}

interface FormValues {
    token(token: any): unknown;

    name: string;
    email: string;
    password: string;
    passwordConfirm: string;
    generateCode: string
  };


interface ButtonInterface {
  text: string;
  style: string;
  color: string;
  icon: string | undefined;
}

interface LabelInterface {
  text: string;
  style: string;
  color: string;
  htmlFor: string;
  icon: string | undefined;
}

interface RefundGroup {
  id: number;
  name: string;
  expense: number;
  amount: number;
  date?: string;
}



export type { State, FormValues, ButtonInterface, RefundGroup, LabelInterface, Jwt, Logged};