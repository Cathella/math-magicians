import React, { useState } from 'react';
import calculate from '../logic/calculate';
import Nav from './Nav';
import '../App.css';

const Calculator = () => {
  const [data, setData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const buttonClick = (obj, value) => {
    const newResult = calculate(obj, value);

    setData(newResult);
  };

  return (
    <>
      <Nav />
      <section className="calc-wrapper">
        <h2>Let us do some Math!</h2>
        <div className="container">
          <div className="result">
            { data.next || data.operation || data.total || 0 }
          </div>
          <div className="btn-container">
            <button onClick={() => buttonClick(data, 'AC')} type="button">AC</button>
            <button onClick={() => buttonClick(data, '+/-')} type="button">+/-</button>
            <button onClick={() => buttonClick(data, '%')} type="button">%</button>
            <button onClick={() => buttonClick(data, '÷')} className="action-btns" type="button">÷</button>
            <button onClick={() => buttonClick(data, '7')} type="button">7</button>
            <button onClick={() => buttonClick(data, '8')} type="button">8</button>
            <button onClick={() => buttonClick(data, '9')} type="button">9</button>
            <button onClick={() => buttonClick(data, 'x')} className="action-btns" type="button">x</button>
            <button onClick={() => buttonClick(data, '4')} type="button">4</button>
            <button onClick={() => buttonClick(data, '5')} type="button">5</button>
            <button onClick={() => buttonClick(data, '6')} type="button">6</button>
            <button onClick={() => buttonClick(data, '-')} className="action-btns" type="button">-</button>
            <button onClick={() => buttonClick(data, '1')} type="button">1</button>
            <button onClick={() => buttonClick(data, '2')} type="button">2</button>
            <button onClick={() => buttonClick(data, '3')} type="button">3</button>
            <button onClick={() => buttonClick(data, '+')} className="action-btns" type="button">+</button>
            <button onClick={() => buttonClick(data, '0')} className="zero" type="button">0</button>
            <button onClick={() => buttonClick(data, '.')} type="button">.</button>
            <button onClick={() => buttonClick(data, '=')} className="action-btns" type="button">=</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Calculator;
