interface State {
    isTrue: boolean;
    toggle: () => void
}

interface FormValues {
    name: string;
    email: string;
    password: string;
  };
  

export type { State, FormValues }