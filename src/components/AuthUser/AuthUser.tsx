import { useMutation } from "@apollo/client"
import { Button } from "components/Button"
import { RouteWrapper } from "components/RouteWrapper"
import { STATUS } from "constants/status"
import { useToggle } from "hooks"
import { AUTH_USER } from "queries/authUser"
import { REGISTER_USER } from "queries/registerUser"
import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { store } from "store/store"
import { TError } from "types/error"
import { TAuthUserData, TRegisterUserData } from "types/user"
import { getErrorsForField } from "utils"
import { StyledAuth } from "./StyledAuth"

export const AuthUser = () => {
  const { isOn: shouldCreateAccount, toggle } = useToggle(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState<TError[]>([])

  const [authUser] = useMutation<TAuthUserData>(AUTH_USER)
  const [registerUser] = useMutation<TRegisterUserData>(REGISTER_USER)

  const { user, setUser } = store()

  useEffect(() => {}, [user])

  // if user is logged in already
  if (user !== null) {
    return (
      <RouteWrapper>
        <StyledAuth>
          <h1>Welcome!</h1>
          <p>
            You are now logged in into the app. Start exploring by selecting a
            room on the left sidebar, or by create a new one yourself!
          </p>
          <hr />
          <p>
            Do you want to <a href="/">logout</a> instead?
          </p>
        </StyledAuth>
      </RouteWrapper>
    )
  }

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // let returnedUserData: TUserData | null | undefined

    if (shouldCreateAccount) {
      setErrors([])
      const data = await registerUser({
        variables: {
          email,
          password,
        },
      })
      const userData = data.data?.registerUser.data
      if (userData !== undefined) {
        if (userData.status === STATUS.FAILURE && userData.errors) {
          setErrors(userData.errors)
        }

        if (userData.status === STATUS.SUCCESS && userData.user) {
          setUser({
            email: userData.user?.email,
          })
        }
      }
    } else {
      const data = await authUser({
        variables: {
          email,
          password,
        },
      })

      const userData = data.data?.authUser.data
      if (userData !== undefined) {
        if (userData.status === STATUS.FAILURE && userData.errors) {
          setErrors(userData.errors)
        }

        if (userData.status === STATUS.SUCCESS && userData.user) {
          setUser({
            email: userData.user?.email,
          })
        }
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

  const footerCta = shouldCreateAccount
    ? "I need to login instead"
    : "I need to create an account instead"

  const emailErrors = getErrorsForField(errors, "email")
  const passwordErrors = getErrorsForField(errors, "password")

  return (
    <RouteWrapper>
      <StyledAuth>
        <header>
          <h3>{title}</h3>
          <p>{subtitle}</p>
          {user}
          <span
            role="link"
            tabIndex={0}
            onKeyDown={toggle}
            className="cta"
            onClick={toggle}>
            {cta}
          </span>
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
            <span className="errors">{emailErrors}</span>
          </label>
          <label htmlFor="password">
            <span>Password</span>
            <input
              name="password"
              type="password"
              onChange={handlePasswordChange}
            />
            <span className="errors">{passwordErrors}</span>
          </label>
          <footer>
            <span
              role="link"
              tabIndex={0}
              onKeyDown={toggle}
              className="cta footer-cta"
              onClick={toggle}>
              {footerCta}
            </span>
            <Button type="submit">
              {shouldCreateAccount ? "Register" : "Login"}
            </Button>
          </footer>
        </form>
      </StyledAuth>
    </RouteWrapper>
  )
}
