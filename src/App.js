import React from 'react';
import './index.css'
import Squares from './Squares';

function App() {

  console.log('render');
  
  const squares = [
    'whiteSquare',
    'blackSquare'
  ]

  return (
      <div className='wrapper'>
        <Squares squares={squares}/>
      </div>
  )
}


export default App;
