import Flashcard from "./Flashcard"

export default function CaixaDeCards(props){
    const {deck} = props
    return(
        <div>
            {deck.map((item, indice)=><Flashcard key={item.question}item={item} indice = {indice}/>)}
            
        </div>
    )
}