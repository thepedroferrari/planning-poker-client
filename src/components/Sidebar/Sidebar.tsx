import { StyledSidebar } from "./StyledSidebar"

type Props = {
  user: string
}

export const Sidebar = ({ user }: Props) => {
  return <StyledSidebar>Stuff going on! {user}</StyledSidebar>
}
