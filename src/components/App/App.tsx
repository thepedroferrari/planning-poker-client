import { Header } from "components/Header"
import { Room } from "components/Room"
import { Sidebar } from "components/Sidebar"
import { useMessageSubscription } from "hooks"
import { store } from "store/store"
import { StyledApp } from "./StyledApp"

export const App = () => {
  const { setSelectedRoom } = store()

  useMessageSubscription()

  return (
    <StyledApp>
      <Header />
      <Sidebar />
      <Room />

      <button type="button" onClick={() => setSelectedRoom("Frontend")}>
        FRONTEND
      </button>
      <button type="button" onClick={() => setSelectedRoom("Frontend 2")}>
        FRONTEND2
      </button>
      <button type="button" onClick={() => setSelectedRoom("Futurama")}>
        FUTURAMA
      </button>
    </StyledApp>
  )
}
