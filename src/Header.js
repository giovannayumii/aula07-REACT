import React from "react";
//atividade02

//getDerivedStateFromProps()
/*class Header extends React.Component{
    constructor(props){
        super(props)
        this.state = {corfavorita:"Vermelho"};
    }
    static getDerivedStateFromProps(props,state){
        return{corfavorita:props.favcol};
    }
    render(){
        return(
            <h1>Minha cor favorita é {this.state.corfavorita}</h1>
        );
    }
}*/

//componentDidMount()
class Header extends React.Component{
    constructor(props){
        super(props)
        this.state = {corfavorita:"Vermelho"};
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({corfavorita:"verde"})
        },1000);

    }
    
    render(){
        return(
            <h1>Minha cor favorita é {this.state.corfavorita}</h1>
        );
    }
}

export default Header;