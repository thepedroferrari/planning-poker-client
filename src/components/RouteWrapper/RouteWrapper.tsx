import { StyledApp } from "components/App/StyledApp"
import { Header } from "components/Header"
import { Sidebar } from "components/Sidebar"
import { StyledFrame } from "./StyledFrame"

export const RouteWrapper: React.FC = ({ children }) => {
  return (
    <StyledApp>
      <Header />
      <Sidebar />
      <StyledFrame>{children}</StyledFrame>
    </StyledApp>
  )
}
