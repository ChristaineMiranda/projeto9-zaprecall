import { useState } from "react"
import seta from "./assets/img/seta_play.png"
import virar from "./assets/img/seta_virar.png"
import CaixaDeBotoes from "./CaixaDeBotoes"

export default function Flashcard(props) {
    const { item, indice } = props
    const [icone, setIcone] = useState(seta)
    const [virado, setVirado] = useState(false)
    const [textoExibido, setTextoExibido] = useState(`Pergunta ${indice + 1}`)
    const [mostraResposta, setMostraResposta] = useState(false)

    function mostrarQuestao() {
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

    return (
        <div className={virado ? "pergunta-aberta" : "pergunta-fechada"}>
            <p >{textoExibido}</p>
            {mostraResposta? "": <img src={icone} alt="seta" onClick={mostrarQuestao} />}
            {mostraResposta? <CaixaDeBotoes/>: ""}

        </div>

        
    )
}