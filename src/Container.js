import { useState } from "react"
import Cabecalho from "./Cabecalho"
import CaixaDeCards from "./CaixaDeCards"
import ContadorDeProgresso from "./ContadorDeProgresso"
import deck from "./Deck"

export default function Container() {
    const [cardsAbertos, setCardsAbertos] = useState(0)
    const [saldo, setSaldo] =  useState([])
    console.log(cardsAbertos)
    return (
        <div className="screen-container">
            <Cabecalho />
            <CaixaDeCards deck = {deck}
             cardsAbertos = {cardsAbertos}
              setCardsAbertos = {setCardsAbertos}
              saldo = {saldo}
              setSaldo = {setSaldo}/>
            <ContadorDeProgresso cardsAbertos = {cardsAbertos} saldo = {saldo}/>
        </div>
    )
}