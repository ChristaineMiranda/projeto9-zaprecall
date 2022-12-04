import { useState } from "react"
import seta from "./assets/img/seta_play.png"
import virar from "./assets/img/seta_virar.png"
import CaixaDeBotoes from "./CaixaDeBotoes"
import styled from "styled-components"

export default function Flashcard(props) {
    const { item, indice, cardsAbertos, setCardsAbertos, saldo, setSaldo } = props

    const [icone, setIcone] = useState(seta)
    const [virado, setVirado] = useState(false)
    const [textoExibido, setTextoExibido] = useState(`Pergunta ${indice + 1}`)
    const [mostraResposta, setMostraResposta] = useState(false)
    const [respondida, setRespondida] = useState(false)
    const [cor, setCor] = useState("black")

    function mostrarQuestao() {
        if (icone === seta || icone === virar) {
            if (icone === virar) {
                setTextoExibido(item.answer)
                setMostraResposta(true)
            }
            else {
                setIcone(virar)
                setVirado(true)
                setTextoExibido(item.question)
            }
        }
    }
    return (
            <StyledPergunta  data-test="flashcard" virado={virado} respondida={respondida} cor={cor}>
            <p  data-test="flashcard-text">{textoExibido}</p>
            {mostraResposta ? "" : <StyledIcone  data-test="play-btn turn-btn zap-icon  partial-icon no-icon" virado={virado} src={icone} alt="seta" onClick={mostrarQuestao} />}
            {mostraResposta ? <CaixaDeBotoes key={indice}
                indice={indice}
                setIcone={setIcone}
                setTextoExibido={setTextoExibido}
                setVirado={setVirado}
                setMostraResposta={setMostraResposta}
                setRespondida={setRespondida}
                cardsAbertos={cardsAbertos}
                setCardsAbertos={setCardsAbertos}
                saldo={saldo}
                setSaldo={setSaldo}
                setCor={setCor}
            /> : ""}
        </StyledPergunta>
    )
}
const StyledIcone = styled.img`
    position: absolute;
    bottom: ${props => props.virado ? 10 : 22}px;
    right: 10px;
`
const StyledPergunta = styled.div`
    width: 300px;
    min-height: ${props => props.virado ? 100 : 35}px;
    background-color: ${props => props.virado ? "#FFFFD5" : "#FFFFFF"};
    font-weight: ${props => props.virado ? 400 : 700} px;
    font-size: ${props => props.virado ? 16 : 18}px;
    line-height: ${props => props.virado ? 22 : 19}px;
    align-items: ${props => props.virado ? "" : "center"};
    position: relative;
    flex-direction: ${props => props.virado ? "column" : ""};
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);       
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    font-family: 'Recursive';
    font-style: normal;
    color: #333333;
    p{
        text-decoration: ${props => props.respondida ? "line-through" : "none"};
        color: ${props => props.cor};
    }
`