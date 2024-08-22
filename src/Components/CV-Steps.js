
import React from 'react';
import './CV-Steps.css';

const Card = () => {
  return (
    <div className='card-container'>
  <div className="card1">
    <img src="approved.svg" alt="Sample" className="card-image" />
    <p> Choose your
professionally 
designed template</p>
  </div>

  <div className="card1">
    <img src="burger.png" alt="Sample" className="card-image" />
    <p>Add pre-written examples to each section</p>
  </div>

  <div className="card1">
    <img src="download.png" alt="Sample" className="card-image" />
    <p>Download and start applying</p>
  </div>
    </div>
  );
}

export default Card;
