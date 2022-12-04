import styled from "styled-components"
import parabens from "./assets/img/party.png"
import triste from "./assets/img/sad.png"
export default function Finalizado(props) {
    const { saldo } = props
    let resultado = ""
    let mensagem1
    let mensagem2
    let imagem
    for (let i = 0; i < 8; i++) {
        if (saldo[i] === "erro") resultado = "erro" //verifica se há alguma questão errada nas respondidas
    }
    if (resultado) {
        imagem = triste
        mensagem1 = "Putz..."
        mensagem2 = "Ainda faltam alguns... Mas não desanime!"
    }
    else {
        imagem = parabens
        mensagem1 = "Parabéns!"
        mensagem2 = "Você não esqueceu de nenhum flashcard!"
    }
    return (
        <StyledCaixa>
            <div>
                <img src={imagem} alt="imagem" />
                <span>{mensagem1}</span>
            </div>
            <div>{mensagem2}</div>
        </StyledCaixa>

    )
}

const StyledCaixa = styled.div`
width: 235px;
font-size: 18px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
span{
    font-weight: 700;
}
div{
    width:100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 12px;
    text-align: center;
    img{
        margin-right: 12px;
    }
}
`