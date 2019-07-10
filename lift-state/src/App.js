import React, { Component } from 'react';
import './App.css';
import Counter from './components/Counter/Counter.js'

class App extends Component {
  constructor(){
    super()
    this.state ={
      counter1: 0,
      counter2: 0,
      counter3: 0
    }
  }
  handleIncrement = (event)=>{
    switch (event.target.value) {
  case '1':
      this.setState({counter1: this.state.counter1 += 1})
  break;
  case '2':
    this.setState({counter2: this.state.counter2 += 1})
    break;
    case '3':
      this.setState({counter3: this.state.counter3 += 1})
      break;
  default: console.log('I hate react')
  }

}

handleDecrement = (event)=>{
    switch(event.target.value){
      case '1':
      this.setState({counter1: this.state.counter1 -= 1})
      break;
      case '2':
        this.setState({counter2: this.state.counter2 -= 1})
        break;
      case '3':
          this.setState({counter3: this.state.counter3 -= 1})
      break;
      default: console.log('react is broken')
    }
}

handleIncreaseAll = ()=>{
  console.log('nooo');
  this.setState({
    counter1: this.state.counter1 += 1,
    counter2: this.state.counter2 += 1,
    counter3: this.state.counter3 += 1
  })
}


handleDecreaseAll = ()=>{
  console.log('heyy');
  this.setState({
    counter1: this.state.counter1 -= 1,
    counter2: this.state.counter2 -= 1,
    counter3: this.state.counter3 -= 1
  })
}


  render() {
    return (
      <div className="App">
        <Counter count={this.state.counter1} increment={this.handleIncrement} value= '1' decrement={this.handleDecrement}/>


        <Counter count={this.state.counter2} increment={this.handleIncrement} value= '2' decrement={this.handleDecrement}/>


        <Counter count={this.state.counter3} increment={this.handleIncrement} value= '3' decrement={this.handleDecrement}/>
        <div>
          <button onClick={() => this.handleIncreaseAll()} type="submit">all +</button>
          <button onClick={() => this.handleDecreaseAll()} type="submit">all -</button>
        </div>






      </div>
    );
  }
}

export default App;
