import { TError } from "./error"

export type TUser = {
  email: {
    address: string
    verified: boolean
  }
  // TODO: Re-add this registrationDate: number
}

export type TRegisterUserData = {
  registerUser: {
    data: {
      status: string
      errors?: TError[]
      user?: TUser
    }
  }
}

export type TAuthUserData = {
  authUser: {
    data: {
      status: string
      errors?: TError[]
      user?: TUser
    }
  }
}
