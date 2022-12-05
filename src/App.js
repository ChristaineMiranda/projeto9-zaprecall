import Container from "./Container";
import TelaInicial from "./TelaInicial"
import GlobalStyle from "./assets/css/GlobalStyle";
import { useState } from "react";


function App() {
  const [iniciarJogo, setIniciarJogo] = useState(false)
  return (
   <>
   <GlobalStyle/>
   {iniciarJogo? <Container />: <TelaInicial setIniciarJogo = {setIniciarJogo}/> }   
   </>
  )
}

export default App;