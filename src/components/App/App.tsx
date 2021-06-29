import { AuthUser } from "components/AuthUser"
import { CreateRoom } from "components/CreateRoom"
import { Room } from "components/Room"
import { useRoomSubscription } from "hooks"
import { useIsLoggedIn } from "hooks/useIsLoggedIn"
import { BrowserRouter, Route, Switch } from "react-router-dom"

export const App = () => {
  useIsLoggedIn()
  useRoomSubscription()

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={AuthUser} />
        <Route exact path="/login" component={AuthUser} />
        <Route exact path="/create-room" component={CreateRoom} />
        <Route path="/room/:name" component={Room} />
      </Switch>
    </BrowserRouter>
  )
}
