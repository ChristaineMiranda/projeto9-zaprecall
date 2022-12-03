export default function CaixaDeBotoes(){

    function clicado(){

    }
    return(
        <div className="container-botoes">
            <button className="botao" onClick={()=>clicado("não lembrei")}>Não lembrei</button>
            <button className="botao" onClick={()=>clicado("quase não lembrei")}>Quase não lembrei</button>
            <button className="botao" onClick={()=>clicado("zap")}>Zap!</button>
        </div>
    )
}