import Flashcard from "./Flashcard"

export default function CaixaDeCards(props){
    const {deck, cardsAbertos ,setCardsAbertos, saldo, setSaldo} = props
    
    return(
        <div>
            {deck.map((item, indice)=><Flashcard key={item.question}
            item={item}
            indice = {indice}
            cardsAbertos = {cardsAbertos}
            setCardsAbertos = {setCardsAbertos}
            saldo = {saldo}
            setSaldo = {setSaldo}
            />)}
            
        </div>
    )
}