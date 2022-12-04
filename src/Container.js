import { useState } from "react"
import Cabecalho from "./Cabecalho"
import CaixaDeCards from "./CaixaDeCards"
import ContadorDeProgresso from "./ContadorDeProgresso"
import deck from "./Deck"
import styled from "styled-components"

export default function Container() {
    const [cardsAbertos, setCardsAbertos] = useState(0)
    const [saldo, setSaldo] =  useState([])
   
    return (
        <StyledContainerTela>
            <Cabecalho />
            <CaixaDeCards deck = {deck}
             cardsAbertos = {cardsAbertos}
              setCardsAbertos = {setCardsAbertos}
              saldo = {saldo}
              setSaldo = {setSaldo}/>
            <ContadorDeProgresso cardsAbertos = {cardsAbertos} saldo = {saldo}/>
        </StyledContainerTela>
    )
}

const StyledContainerTela = styled.div`
    background-color: #FB6B6B;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px;
    padding: 0px;
    padding-bottom: 200px;
`
