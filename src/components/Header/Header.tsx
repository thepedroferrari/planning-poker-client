import { useLazyQuery } from "@apollo/client"
import { Button } from "components/Button"
import { LOGOUT_QUERY } from "queries/logout"
import { useHistory } from "react-router-dom"
import { store } from "store/store"
import { StyledHeader } from "./StyledHeader"

export const Header = () => {
  const { user, setUser } = store()
  const [logout] = useLazyQuery(LOGOUT_QUERY)
  const isLoggedIn = user?.email.address

  const history = useHistory()

  const handleClick = () => {
    if (!isLoggedIn) {
      history.push("/login")
    } else {
      logout()
      setUser(null)
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
