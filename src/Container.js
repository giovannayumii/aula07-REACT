import React from "react";
//exercicio4
class Container extends React.Component{
    constructor(props){
        super(props)
        this.state = {show:true};
    }
    delHeeader = () =>{
        this.setState({show:false});
    }
    
    render(){

        let myheader;
        if (this.state.show){
            myheader = <Child />
        };
        return(
            <div>
                {myheader}
                <button type="button" onClick={this.delHeeader}>Apague o Titulo</button>
            </div>
        );
    }
}

class Child extends React.Component{
    componentWillUnmount(){
        alert("O componente Header esta prestes a ser desmontado");
    }
    render(){
        return(
            <h1>Ola mundo</h1>
        );
    }
}

export default Container;