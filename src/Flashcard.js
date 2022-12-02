import play from "./assets/img/seta_play.png"

export default function Flashcard(props) {
    const {item, indice} = props
    return (
        <div className="pergunta-fechada">
            <p >{`Pergunta ${indice+1}`}</p>
            <img src={play} alt="seta"/>
        </div>

    )
}