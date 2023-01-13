interface State {
    isTrue: boolean;
    toggle: () => void
}

interface FormValues {
    name: string;
    email: string;
    password: string;
    passwordConfirm: string;
  };

interface ButtonInterface {
  text: string;
  style: string;
  color: string;
  icon: string | undefined;
}

interface RefundGroup {
  id: number;
  name: string;
  expense: number;
  amount: number;
  date?: string;
}






export type { State, FormValues, ButtonInterface, RefundGroup};