import erro from "./assets/img/icone_erro.png"
import quase from "./assets/img/icone_quase.png"
import acerto from "./assets/img/icone_certo.png"

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
        setSaldo } = props

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
        }
        if (botao === "quase") {
            setIcone(quase)
        }
        if (botao === "zap") {
            setIcone(acerto)
        }

    }
    return (
        <div className="container-botoes">
            <button className="botao" onClick={() => clicado("erro")}>Não lembrei</button>
            <button className="botao" onClick={() => clicado("quase")}>Quase não lembrei</button>
            <button className="botao" onClick={() => clicado("zap")}>Zap!</button>
        </div>
    )
}