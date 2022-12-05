import logo from "./assets/img/logo.png"
import styled from "styled-components"

export default function TelaInicial(props){
    const {setIniciarJogo} = props
    return(
        <StyledFundo>
            <img src={logo} alt="logo"/>
            <span>ZapRecall</span>
            <StyledBotaoIniciar onClick={()=> setIniciarJogo(true)}>Iniciar Recall!</StyledBotaoIniciar>
        </StyledFundo>
    )
}
const StyledFundo = styled.div`
min-height: 100vh;
background-color: #FB6B6B;
display: flex;
flex-direction: column;
align-items: center;
padding: 160px;
img{
    margin-bottom: 20px;
    width: 136px;
}
span{
    font-family: 'Righteous';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    color: #FFFFFF;
    margin-left: 20px;
}
`

const StyledBotaoIniciar = styled.button`
width: 246px;
height: 54px;
border-radius: 5px;
border-color: #D70900;
background-color: #ffffff;
color: #D70900;
font-family: 'Recursive';
margin-top: 20px;
`