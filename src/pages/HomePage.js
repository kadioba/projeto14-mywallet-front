import styled from "styled-components"
import { BiExit } from "react-icons/bi"
import Transactions from "../components/Transactions"
import { useContext } from "react"
import AuthContext from "../contexts/AuthContext"
import ButtonsAddTransaction from "../components/ButtonsAddTransaction"

export default function HomePage() {

  const { authToken, username } = useContext(AuthContext);
  console.log(authToken)

  return (
    <HomeContainer>
      <Header>
        <h1>Olá, {username}</h1>
        <BiExit />
      </Header>

      <Transactions />

      <ButtonsAddTransaction />

    </HomeContainer>
  )
}

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 50px);
`
const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2px 5px 2px;
  margin-bottom: 15px;
  font-size: 26px;
  color: white;
`
