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
  icon: string;
}

export type { State, FormValues, ButtonInterface }