import Finalizado from "./Finalizado"
export default function ContadorDeProgresso(props){
    const {cardsAbertos, saldo} = props
    
    return(
        <div className="footer-concluidos">
            {cardsAbertos === 8? <Finalizado saldo = {saldo}/> :""}
            {cardsAbertos}/8 CONCLUÍDOS
        </div>
    )
}