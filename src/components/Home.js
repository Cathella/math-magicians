import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import '../App.css';

const Home = () => (
  <>
    <Nav />
    <div className="home-wrapper">
      <h1>The best way to learn Mathematics is to do Mathematics</h1>
      <div>
        <p className="tag-line">
          You can start learning mathematics with our free tool. We provide you with a free calculator and a quote.
        </p>
        <div className="btn-links">
          <Link to="/calculator" className="btns">Calculate Numbers</Link>
          <Link to="/quotes" className="btns more-padding">Get a Quote</Link>
        </div>
      </div>
    </div>
  </>
);

export default Home;
