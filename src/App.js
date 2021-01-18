import './App.css';
import React from 'react';

class Odometer extends React.Component{

  constructor() {
    super();
    this.state = {counter:0};
   
  }

  odometerCounter(value) {
    if(this.state.counter+value > 9999){
      this.state.counter=this.state.counter+value-10001
}

    this.setState({
      counter: this.state.counter + value
    });
  }
  render(){
    return(
      <>
      <button className='btn' onClick={()=>{
        this.odometerCounter(1)
      }}>click to  add 1 </button>
      <button  className='btn'  onClick={()=>{
        this.odometerCounter(10)
      }}>click to  add 10 </button>
     <button className='btn'  onClick={()=>{
        this.odometerCounter(100)
      }}>click to  add 100 </button>
      <button  className='btn' onClick={()=>{
        this.odometerCounter(1000)
      }}>click to  add 1000 </button>
      <p className='para'>
        {String(this.state.counter).padStart(4,0)}
      </p>
      </>
    )
  }   
}

function Header(props) {

  return (
    <h1 className='header-one'> {props.greeting}</h1>
  );
};
function Footer(props) {
  return (
    <h3 className='footer-one' > Trade Mark all by {props.trademark} </h3>
  );
};


function App() {
  return (
    <>
      <Header greeting='Hello from React ' />
      <Odometer/>
      <Footer trademark='written by hadeel  ' />
    </>
  );
}

export default App;
