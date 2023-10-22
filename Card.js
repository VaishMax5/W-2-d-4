import React from 'react';
import './Card.css'

// Functional Card Component
function Card(props) {
  return (
    <div className="card" >
      <img src="https://www.moople.in/blog/wp-content/uploads/2018/02/New-Project-99.jpg"alt={props.title} />
      <div className="card-body">
        <h2>Vaishak Shetty</h2>
        <p>Hi Everyone</p>
      </div>
    </div>
  );
}

export default Card;
