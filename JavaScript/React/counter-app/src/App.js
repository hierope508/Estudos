import './App.css';
import NaviBar from './components/naviBar'
import Counters from './components/counters';
import React, { Component } from 'react'; 

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 5 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleDelete = (counterId) => {
    let counterList = this.state.counters;
    counterList = counterList.filter((c) => c.id !== counterId);
    this.setState({ counters: counterList });
  };

  handleIncrement = (counter) => {
    let counters = [...this.state.counters];
    let index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleReset = () => {
    let counters = this.state.counters.map((c) => {c.value = 0; return c;});
    this.setState({ counters });
  };

  render(){
      return(<React.Fragment>
        <NaviBar totalCounters = {this.state.counters.filter(c=>c.value>0).length}/>
        <Counters
          onDelete={this.handleDelete}
          onReset={this.handleReset}
          onIncrement={this.handleIncrement}
          counters={this.state.counters}
        />
      </React.Fragment>);
  };
}

export default App;
