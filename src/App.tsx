import { useEffect } from "react";
import Container from "./components/Container/Container"
import Wallet from "./components/Wallet/Wallet"
import { useTelegram } from "./hooks/useTelegram";

function App() {
  const { showBackButton, onBackClick, close } = useTelegram();

  useEffect(() => {
    showBackButton();
    onBackClick(() => {
      close(); // Закрыть мини-апп
    });
  }, []);

  return (
    <Container>
      <Wallet />
    </Container>
  )
}

export default App
