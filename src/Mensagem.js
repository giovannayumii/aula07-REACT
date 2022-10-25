import React from "react";
//atividade01
class Mensagem extends React.Component{
    shoot(){
        alert("Ola mundo");
    };
    render(){
        return(
            <button onClick={this.shoot}>Clique</button>
        );
    }
}
export default Mensagem;