import React from 'react';
import './First.css'
class Icounter extends React.Component{

  constructor(){
    super();
    this.state={
      count:10,
      message:""
    }

    
  }

  Increment(){
    if(this.state.count<20)
    {
    this.setState({
      count:this.state.count+1})
    }
    else if (this.state.count===20){
        this.setState({
            message:"your already reached the limit"
        })
    }
    
  }

  Decrement(){
    if(this.state.count>0)
        {
    
    this.setState({
      count:this.state.count-1})
    }
    this.setState({message:""})
   
  }


  render(){
    return(
      <>
        
           <header id="header">
            <h1>Interactive Counter</h1>
            

            </header>
           
            <div className="container">
            <center>
            <h2>Count : {this.state.count}</h2>
            <p>{this.state.message}</p>
            <br />
            <br />
            <br />

            <div className="btn_container">
            <button id="btn1" onClick={this.Increment.bind(this)}>↑</button>
            
            <button onClick={this.Decrement.bind(this)}>↓</button>
            </div>
            </center>
        </div>
        
        </>
    );
  }

}


export default Icounter;