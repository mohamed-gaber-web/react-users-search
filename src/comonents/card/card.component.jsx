import React from 'react';

import './card.styles.css';

export const Card = props => {

  return(
    <div className="card-container">
      <img src="images/user.jpg" alt="" />
       <h1> {props.user.name} </h1>
       <p> { props.user.email } </p>
    </div>
  );

}
