import React, { Component } from 'react';
import calculate from '../logic/calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        total: null,
        next: null,
        operation: null,
      },
    };

    this.buttonClick = this.buttonClick.bind(this);
  }

  buttonClick(e) {
    this.setState((state) => ({
      data: calculate(state.data, e.target.name),
    }));
  }

  render() {
    const { data } = this.state;

    return (
      <div className="container">
        <div className="result">
          { data.next || data.operation || data.total || 0 }
        </div>
        <div className="btn-container">
          <button onClick={(e) => this.buttonClick(e)} name="AC" type="button">AC</button>
          <button onClick={(e) => this.buttonClick(e)} name="+/-" type="button">+/-</button>
          <button onClick={(e) => this.buttonClick(e)} name="%" type="button">%</button>
          <button onClick={(e) => this.buttonClick(e)} className="action-btns" name="÷" type="button">÷</button>
          <button onClick={(e) => this.buttonClick(e)} name="7" type="button">7</button>
          <button onClick={(e) => this.buttonClick(e)} name="8" type="button">8</button>
          <button onClick={(e) => this.buttonClick(e)} name="9" type="button">9</button>
          <button onClick={(e) => this.buttonClick(e)} className="action-btns" name="x" type="button">x</button>
          <button onClick={(e) => this.buttonClick(e)} name="4" type="button">4</button>
          <button onClick={(e) => this.buttonClick(e)} name="5" type="button">5</button>
          <button onClick={(e) => this.buttonClick(e)} name="6" type="button">6</button>
          <button onClick={(e) => this.buttonClick(e)} className="action-btns" name="-" type="button">-</button>
          <button onClick={(e) => this.buttonClick(e)} name="1" type="button">1</button>
          <button onClick={(e) => this.buttonClick(e)} name="2" type="button">2</button>
          <button onClick={(e) => this.buttonClick(e)} name="3" type="button">3</button>
          <button onClick={(e) => this.buttonClick(e)} className="action-btns" name="+" type="button">+</button>
          <button onClick={(e) => this.buttonClick(e)} className="zero" name="0" type="button">0</button>
          <button onClick={(e) => this.buttonClick(e)} name="." type="button">.</button>
          <button onClick={(e) => this.buttonClick(e)} className="action-btns" name="=" type="button">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
