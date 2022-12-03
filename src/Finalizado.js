export default function Finalizado(props){
    const {saldo} =  props
    let resultado = ""
    let mensagem
    for(let i=0; i<8; i++){
        if(saldo[i]==="erro") resultado = "erro" //verifica se há alguma questão errada nas respondidas
    }
    if(resultado){
         mensagem = ` Putz...Ainda faltam alguns...Mas não desanime!`
    }
    else{
         mensagem = `Parabéns! Você não esqueceu de nenhum flashcard!`
    }
    return(
        <p>{mensagem}</p>
    )
}