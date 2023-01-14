interface FormValues {
  token(token: any): unknown;
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
  code: string;
}

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

interface User {
  token: string;
  group: boolean;
  setUser: (token: string) => void;
  setGroup: (inGroup: boolean) => void;
  deleteUser: () => void;
}
export type { FormValues, ButtonInterface, RefundGroup, LabelInterface, User };
