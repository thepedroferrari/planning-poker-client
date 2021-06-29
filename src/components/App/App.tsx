import { Room } from "components/Room"
import { Welcome } from "components/Welcome"
import { useRoomSubscription } from "hooks"
import { BrowserRouter, Route, Switch } from "react-router-dom"

export const App = () => {
  useRoomSubscription()

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route path="/room/:name" component={Room} />
      </Switch>
    </BrowserRouter>
  )
}
