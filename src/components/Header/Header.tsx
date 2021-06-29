import { Button } from "components/Button"
import { useEffect } from "react"
import { store } from "store/store"
import { StyledHeader } from "./StyledHeader"

export const Header = () => {
  const { user } = store()
  const isLoggedIn = user?.email.address

  useEffect(() => {}, [user])

  const handleClick = () => {
    console.log("LOGOUT")
  }

  const cta = isLoggedIn ? "Logout" : "Login / Register"
  return (
    <StyledHeader>
      <h1>
        <i>LOGO</i> Room: Frontend
      </h1>
      <Button onClick={handleClick}>{cta}</Button>
    </StyledHeader>
  )
}
