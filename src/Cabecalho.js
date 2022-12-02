import logo from "./assets/img/logo.png"

//IMPORTAR FONTE!!!!!!!!
export default function Cabecalho(){
    return(
        <div className="logo-container">
            <img src= {logo} alt="logo do aplicativo" />
            <span>ZapRecall</span>
        </div>
    )
}