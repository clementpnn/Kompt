interface FormValues {
  token(token: any): unknown
  name: string
  email: string
  password: string
  passwordConfirm: string
  code: string
  title: string
  amount: number
}

interface ButtonInterface {
  text: string
  style: string
  color: string
  icon: string | undefined
}

interface LabelInterface {
  text: string
  style: string
  color: string
  htmlFor: string
  icon: string | undefined
}

interface RefundGroup {
  id: number;
  title: string;
  paid: number;
  payers_amount: number;
  date: string;
  members: RefundMember[]
}

interface RefundMember {
  name: string;
  paid: number;
  payers_amount: number;
}

interface User {
  token: string
  group: boolean
  admin : number
  setUser: (token: string) => void
  setAdmin: (newRole: number) => void
  setGroup: (inGroup: boolean) => void
  deleteUser: () => void
}

interface GroupHeader {
  name: string;
  member: number;
  admin: number;
  refund: [];
  code: string;
}


export type { FormValues, ButtonInterface, RefundGroup, RefundMember, LabelInterface, User ,GroupHeader };
