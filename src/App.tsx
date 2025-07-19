import { useEffect } from "react"
import Container from "./components/Container/Container"
import Navigation from "./components/Navigation/Navigation"
import Wallet from "./components/Wallet/Wallet"

function App() {
  const desktops = ['macos', 'tdesktop', 'weba', 'webk', 'web']

  useEffect(() => {
    const tg = Telegram.WebApp;
    if (!(desktops.includes(tg.platform))) Telegram.WebApp.requestFullscreen();
    tg.setBackgroundColor('#181818');
    tg.expand();
    tg.disableVerticalSwipes();
    tg.lockOrientation();
  }, [])

  return (
    <Container>
      <Wallet />
      <Navigation />
    </Container>
  )
}

export default App
