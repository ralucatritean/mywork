import React from 'react';
import { CardProps } from './types';
import '../../css/MemoryGame.css';

const Card: React.FC<CardProps> = ({ isFlipped, Icon, onClick }) => (
  <div
    onClick={onClick}
    className="card"
  >
    <div className={`card-inner ${isFlipped ? 'flipped' : ''}`}>
      <div className="card-face card-front" />
      
      <div className="card-face card-back">
        {Icon && <Icon size={32} className="card-icon" />}
      </div>
    </div>
  </div>
);

export default Card;