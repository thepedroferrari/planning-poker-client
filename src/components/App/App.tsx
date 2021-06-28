import { Header } from "components/Header"
import { Room } from "components/Room"
import { Sidebar } from "components/Sidebar"
import { useMessageSubscription } from "hooks/useMessageSubscription"
import { store } from "store/store"
import { StyledApp } from "./StyledApp"

export const App = () => {
  const { setSelectedRoom } = store()

  const room = useMessageSubscription()

  return (
    <StyledApp>
      <Header />
      <Sidebar user="Pedro Ferrari" />
      <Room user="Pedro Ferrari" />
      <h1>{room?.data?.name}</h1>
      <button type="button" onClick={() => setSelectedRoom("Frontend")}>
        FRONTEND
      </button>
      <button type="button" onClick={() => setSelectedRoom("Frontend 2")}>
        FRONTEND2
      </button>
      <button type="button" onClick={() => console.log(room)}>
        LOG ROOM
      </button>
    </StyledApp>
  )
}
