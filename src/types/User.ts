import { TError } from "./error"

export type TUser = {
  email: {
    address: string
    verified: boolean
  }
  // TODO: Re-add this registrationDate: number
}

export type TUserData = {
  data: {
    status: string
    errors?: TError[]
    user?: TUser
  }
}
