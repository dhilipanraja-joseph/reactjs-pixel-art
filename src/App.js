import React from 'react';
import './App.css';
import Display from './Display'
import { mario, minion, minion_looks_left, minion_looks_right } from './arts'

class App extends React.Component {

  constructor() {
    super() 
    this.state= {
      colors: []
    }
  }

  toggle() {
    this.setState({ colors: minion_looks_left }, ()=> {
      setTimeout(()=> this.setState({ colors: minion_looks_right }, ()=> {
        setTimeout(()=> this.toggle(), 1000)
      }), 1000)
    })
  }

  componentDidMount() {
    this.toggle()
  }

  render() {
    return (
      <div className="App">
        <Display pixelSize={5} colors={this.state.colors} />
        <Display pixelSize={5} colors={minion} />
        <Display pixelSize={5} colors={mario} />
      </div>
    );
  }
}

export default App;