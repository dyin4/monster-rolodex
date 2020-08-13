import React from 'react';
import './card-list.styles.css';
import { Card } from '../card/card.component'

export const CardList = (props) => ( //props is any object write in this object
                                         //main props is the child, that pass bwt <>child<>
     <div className = 'card-list'>
    {   props.monsters.map(monster => (
            <Card key={monster.id} monster={monster} />
        ))}
      </div>
);