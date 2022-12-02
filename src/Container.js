import Cabecalho from "./Cabecalho"
import CaixaDeCards from "./CaixaDeCards"
import ContadorDeProgresso from "./ContadorDeProgresso"
import deck from "./Deck"

export default function Container() {
    return (
        <div className="screen-container">
            <Cabecalho />
            <CaixaDeCards deck = {deck}/>
            <ContadorDeProgresso />

        </div>
    )
}