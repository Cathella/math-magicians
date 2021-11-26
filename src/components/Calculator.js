import React, { Component } from 'react';
import Button from './Button';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <div className="result">0</div>
        <div className="btn-container">
          <Button name="AC" />
          <Button name="+/-" />
          <Button name="%" />
          <Button name="÷" className="action-btns" />
          <Button name="7" />
          <Button name="8" />
          <Button name="9" />
          <Button name="x" className="action-btns" />
          <Button name="4" />
          <Button name="5" />
          <Button name="6" />
          <Button name="-" className="action-btns" />
          <Button name="1" />
          <Button name="2" />
          <Button name="3" />
          <Button name="+" className="action-btns" />
          <Button name="0" className="zero" />
          <Button name="." />
          <Button name="=" className="action-btns" />
        </div>
      </div>
    );
  }
}

export default Calculator;
