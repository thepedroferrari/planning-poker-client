import { useMutation } from "@apollo/client"
import { Button } from "components/Button"
import { STATUS } from "constants/status"
import { useToggle } from "hooks"
import { AUTH_USER } from "queries/authUser"
import { REGISTER_USER } from "queries/registerUser"
import { ChangeEvent, FormEvent, useState } from "react"

import { store } from "store/store"
import { TUserData } from "types/user"

export const Login = () => {
  const { isOn: shouldCreateAccount, toggle } = useToggle(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [authUser] = useMutation<TUserData>(AUTH_USER)
  const [registerUser] = useMutation<TUserData>(REGISTER_USER)

  const { user, setUser } = store()

  // if user is logged in already
  if (user !== null) {
    return (
      <div>
        You are already logged in. Do you want to <a href="/">logout?</a>
      </div>
    )
  }

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    let returnedUserData: TUserData | null | undefined

    if (shouldCreateAccount) {
      returnedUserData = await registerUser({
        variables: {
          email,
          password,
        },
      }).then((data) => data.data)
    } else {
      returnedUserData = await authUser({
        variables: {
          email,
          password,
        },
      }).then((data) => data.data)
    }

    if (returnedUserData?.data.status === STATUS.SUCCESS) {
      if (returnedUserData.data.user) {
        setUser(returnedUserData.data.user)
      }
    }
  }

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const title = shouldCreateAccount
    ? "Create a free account"
    : "Login into our App"

  const subtitle = shouldCreateAccount
    ? "Do you already have an account and want to login instead?"
    : "You do not have an account and you want to create one now?"

  const cta = shouldCreateAccount
    ? "Yes I want to login"
    : "Yes I want to create a free account"

  return (
    <div>
      <header>
        <h3>{title}</h3>
        <p>{subtitle}</p>
        <button type="button" onClick={toggle}>
          {cta}
        </button>
      </header>
      <form onSubmit={onSubmit}>
        <label htmlFor="email">
          <span>Email</span>
          <input
            type="email"
            name="email"
            placeholder="you@email.com"
            onChange={handleEmailChange}
          />
        </label>
        <label htmlFor="password">
          <span>Password</span>
          <input
            name="password"
            type="password"
            onChange={handlePasswordChange}
          />
        </label>
        <Button type="submit">
          {shouldCreateAccount ? "Create Account" : "Login"}
        </Button>
      </form>
    </div>
  )
}
