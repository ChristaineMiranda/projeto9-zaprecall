import { useState } from "react"
import seta from "./assets/img/seta_play.png"
import virar from "./assets/img/seta_virar.png"
import CaixaDeBotoes from "./CaixaDeBotoes"

export default function Flashcard(props) {
    const { item, indice, cardsAbertos, setCardsAbertos, saldo, setSaldo} = props

    const [icone, setIcone] = useState(seta)
    const [virado, setVirado] = useState(false)
    const [textoExibido, setTextoExibido] = useState(`Pergunta ${indice + 1}`)
    const [mostraResposta, setMostraResposta] = useState(false)
    const [respondida, setRespondida] = useState(false)

    function mostrarQuestao() {
        if (icone === seta || icone === virar)
         {
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
        <div className={virado ? "pergunta-aberta" : "pergunta-fechada"}>
            <p className={respondida? "respondida": ""}>{textoExibido}</p>
            {mostraResposta ? "" : <img src={icone} alt="seta" onClick={mostrarQuestao} />}
            {mostraResposta ? <CaixaDeBotoes key={indice}
                indice={indice}
                setIcone={setIcone}
                setTextoExibido={setTextoExibido}
                setVirado={setVirado}
                setMostraResposta={setMostraResposta}
                setRespondida = {setRespondida}
                cardsAbertos = {cardsAbertos}
                setCardsAbertos = {setCardsAbertos}
                saldo = {saldo}
                setSaldo = {setSaldo}
              /> : ""}

        </div>


    )
}