import { Button } from "components/Button"
import { useHistory } from "react-router-dom"
import { store } from "store/store"
import { StyledHeader } from "./StyledHeader"

export const Header = () => {
  const { user } = store()
  const isLoggedIn = user?.email.address

  const history = useHistory()

  const handleClick = () => {
    if (!user?.email.address) {
      history.push("/login")
    }
  }

  const cta = isLoggedIn ? "Logout" : "Login / Register"
  return (
    <StyledHeader>
      <h1>
        <i>LOGO</i>
      </h1>
      <Button onClick={handleClick}>{cta}</Button>
    </StyledHeader>
  )
}
