import React, { Component } from 'react'

class Counter extends Component{
  render(){
    console.log(this.props)
    return(
      <div>
        <div className="counter">
          <button value={this.props.value} type="submit" onClick={this.props.increment}>+</button>


          <h4>{this.props.count}</h4>


          <button value={this.props.value} type="submit" onClick={this.props.decrement}>-</button>
        </div>

      </div>
    )
  }
}







export default Counter
