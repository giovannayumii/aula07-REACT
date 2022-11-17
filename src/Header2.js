import React from "react";

class Header2 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {idade: "52"};
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({idade: "25"})
        },1000);
    }
    shouldComponentUpdate() {
      return true;
    }
    
    render() {
      return (
        <div>
        <h1>Minha idade é:  {this.state.idade}</h1>
        </div>
      );
    }
  }
  
export default Header2;