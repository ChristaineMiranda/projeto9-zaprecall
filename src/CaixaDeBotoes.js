import erro from "./assets/img/icone_erro.png"
import quase from "./assets/img/icone_quase.png"
import acerto from "./assets/img/icone_certo.png"
import styled from "styled-components"

export default function CaixaDeBotoes(props) {
    const { setIcone,
        setTextoExibido,
        setVirado,
        indice,
        setMostraResposta,
        setRespondida,
        cardsAbertos,
        setCardsAbertos,
        saldo,
        setSaldo,
        setCor } = props

    function clicado(botao) {
        let quantidadeAbertos = cardsAbertos + 1
        setCardsAbertos(quantidadeAbertos)
        setVirado(false)
        setTextoExibido(`Pergunta ${indice + 1}`)
        setMostraResposta(false)
        setRespondida(true)
        let novoSaldo = [...saldo, botao]
        setSaldo(novoSaldo)

        if (botao === "erro") {
            setIcone(erro)
            setCor("#ff3030")
        }
        if (botao === "quase") {
            setIcone(quase)
            setCor("#ff922f")
        }
        if (botao === "zap") {
            setIcone(acerto)
            setCor("#2FBE34")
        }

    }
    return (
        <StyledContainerBotoes>
            <StyledBotao  data-test="no-btn" onClick={() => clicado("erro")}>Não lembrei</StyledBotao>
            <StyledBotao  data-test="partial-btn" onClick={() => clicado("quase")}>Quase não lembrei</StyledBotao>
            <StyledBotao  data-test="zap-btn" onClick={() => clicado("zap")}>Zap!</StyledBotao>
        </StyledContainerBotoes>
    )
}

const StyledContainerBotoes = styled.div`
    width: 300px;
    display: flex;
    justify-content: space-between;
   
`
const StyledBotao = styled.button`
    width: 85px;
    height: 38px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #FFFFFF;
    border-radius: 5px;
    border: 1px solid;
    padding:5px;  
    &:nth-child(1){
    background-color: #ff3030;
    border-color: #ff3030;
  }
    &:nth-child(2){
    background-color: #ff922f;
    border-color: #ff922f;
  }
    &:nth-child(3){
    background-color: #2FBE34;
    border-color: #2FBE34;
  }
`
