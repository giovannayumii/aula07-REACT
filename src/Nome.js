import React from "react";

class Nome extends React.Component {
    constructor(props){
        super(props);
        this.state = {myname: "Ana"};
    }
    static getDerivedStateFromProps(props,state){
        return {myname: props.favcol};
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({myname: "Maria"})
        },1000);
    }
    render(){
        return(
            <h1>Meu nome é {this.state.myname}</h1>
        );
    }
}

export default Nome;