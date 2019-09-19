import React from 'react';
import './cardList.styles.css';

import { Card } from '../card/card.component';

const CardList = props => {

  return (
    <div className="card-list">
      {
        props.Users.map(user => {
          return (
              <Card user={user} key={user.id} />
          );
        })
      }
    </div>
  );

}

export default CardList;
