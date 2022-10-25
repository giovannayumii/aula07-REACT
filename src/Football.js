import React from "react";
//event handler
/*class Botao extends React.Component{
    shoot(){
        alert("Você Clicou!");
    };
    render(){
        return(
            <button onClick={this.shoot}>Clique</button>
        );
    }
}*/
//this
/*class Botao extends React.Component{
    constructor(props){
        super(props)
        this.shoot = this.shoot.bind(this)
    }
    shoot(){
        alert(this);
    };
    render(){
        return(
            <button onClick={this.shoot}>Clique</button>
        );
    }
}
*/
//utilizando arrow

class Botao extends React.Component{
    constructor(props){
        super(props)
        //this.shoot = this.shoot.bind(this)
    }
    shoot(){
        alert(this);
    };
    render(){
        return(
            <button onClick={this.shoot}>Clique</button>
        );
    }
}

//passando argumento p manipulador de eventos com arrow function

class Botao extends React.Component{
    shoot = (t) => {
        alert(t);
    };
    render(){
        return(
            <button onClick={()=>this.shoot("vocÊ clicou")}>Clique</button>
        );
    }
}

// sem arrow

class Botao extends React.Component{
    shoot(t){
        alert(t);
    };
    render(){
        return(
            <button onClick={this.shoot.bind(this,"você clicou")}>Clique</button>
        );
    }
}

export default Football;