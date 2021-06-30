import { Button } from "components/Button"
import { RouteWrapper } from "components/RouteWrapper"
import { useHistory } from "react-router-dom"
import { StyledNotFound } from "./StyledNotFound"

export const NotFound = () => {
  const history = useHistory()
  return (
    <RouteWrapper>
      <StyledNotFound>
        <h1>404</h1>
        <div />
        <h3>Looks like you&apos;re lost!</h3>
        <p>The page you are looking for is not available.</p>
        <Button onClick={() => history.push("/")}>Take me Home</Button>
      </StyledNotFound>
    </RouteWrapper>
  )
}
