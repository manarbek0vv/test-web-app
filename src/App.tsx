import { useEffect } from "react"
import Container from "./components/Container/Container"
import Navigation from "./components/Navigation/Navigation"
import Wallet from "./components/Wallet/Wallet"

function App() {

  useEffect(() => {
    Telegram.WebApp.requestFullscreen();
  }, [])

  return (
    <Container>
      <Wallet />
      <Navigation />
    </Container>
  )
}

export default App
