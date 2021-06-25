import { Header } from "components/Header"
import { Room } from "components/Room"
import { Sidebar } from "components/Sidebar"
import { StyledApp } from "./StyledApp"

export const App = () => {
  return (
    <StyledApp>
      <Header />
      <Sidebar user="Pedro Ferrari" />
      <Room user="Pedro Ferrari" />
    </StyledApp>
  )
}
