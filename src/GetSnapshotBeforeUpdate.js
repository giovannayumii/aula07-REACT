import React from 'react';
//este metodo é utilizado antes do DOM
//utilizado p/armazenar os valores anteriores, antes da att
//o valor retornado por esse metodo será usado como paramentro p/ metodo componentDidUpdate()
//essa função é smepre utilizada c/ a fuinção componentDidUpdate()
class GetSnapshotBeforeUpdate extends React.Component{
    state={
        name:"GetSnapshotBeforeUpdate",
    };
    componentDidMount(){
        //mudar o stado depois de 1seg
        setTimeout(()=>{
            this.setState({name: 'Get Snapshot Before Update'});
        },1000);
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        document.getElementById('prev').innerHTML ='Previous Name: ' + prevState.name;
    }
    componentDidUpdate(){
        document.getElementById('new').innerHTML ='Current Name: ' + this.State.name;
    }
    render(){
        return(
            <div>
                <div id="prev"></div>
                <div id="new"></div>
            </div>
        );
    }
}
export default GetSnapshotBeforeUpdate;