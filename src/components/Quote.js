import React from 'react';
import Nav from './Nav';

const Quote = () => (
  <>
    <Nav />
    <div className="home-wrapper">
      <h3 style={{
        textAlign: 'center',
        marginTop: '5em',
        lineHeight: '1.8',
      }}>
        Mathematics is not about numbers, equations, computations, 
        or algorithms: it is about understanding. --William Paul Thurston
      </h3>
    </div>
  </>
)

export default Quote;
