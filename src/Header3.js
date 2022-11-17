import React from "react";

class Header3 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {favoritecolor: "Vermelho"};
    }
    componentDidMount() {
      setTimeout(() => {
        this.setState({favoritecolor: "Amarelo"})
      }, 1000)
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
      document.getElementById("div1").innerHTML =    "Antes da atualização a cor favorita é:  " + prevState.favoritecolor;
    }
    componentDidUpdate() {
      document.getElementById("div2").innerHTML =    "Depois da atualização a cor favorita é:  " + this.state.favoritecolor;
    }
    render() {
      return (
        <div>
          <h1>Minha Cor favorita é: {this.state.favoritecolor}</h1>
          <div id="div1"></div>
          <div id="div2"></div>
        </div>
      );
    }
  }
export default Header3;