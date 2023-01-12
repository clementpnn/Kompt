interface State {
    isTrue: boolean;
    toggle: () => void
}

interface FormValues {
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

interface RefundData {
  name: string;
  debt: number;
  amount: number;
  date: string;
}

export type { State, FormValues, ButtonInterface, RefundData }