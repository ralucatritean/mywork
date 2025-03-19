import React, { useState, useEffect } from 'react';
import { Smile, Heart, Star, Sun, Moon, Cloud, Coffee, Music } from 'lucide-react';
import Card from '../components/MemoryGame/Card';
import { CardType } from '../components/MemoryGame/types';
import '../css/MemoryGame.css';

const formatTime = (timeInSeconds: number): string => {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};

const MemoryGame: React.FC = () => {
  const icons = [Smile, Heart, Star, Sun, Moon, Cloud, Coffee, Music];
  const [cards, setCards] = useState<CardType[]>([]);
  const [flipped, setFlipped] = useState<number[]>([]);
  const [matched, setMatched] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [time, setTime] = useState(0);
  const [timerActive, setTimerActive] = useState(false);

  useEffect(() => {
    let interval: number;;
    if (timerActive) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timerActive]);

  const initializeGame = () => {
    const shuffledCards = [...icons, ...icons]
      .sort(() => Math.random() - 0.5)
      .map((Icon, index) => ({
        id: index,
        Icon,
      }));
    setCards(shuffledCards);
  };

  const startGame = () => {
    setTime(0);
    initializeGame();
    setGameStarted(true);
    setShowPreview(true);
    setIsLocked(true);

    setTimeout(() => {
      setShowPreview(false);
      setIsLocked(false);
      setTimerActive(true);
    }, 1000);
  };

  useEffect(() => {
    if (matched.length === cards.length && cards.length > 0) {
      setTimerActive(false);
    }
  }, [matched.length, cards.length]);

  useEffect(() => {
    if (flipped.length === 2) {
      setIsLocked(true);
      const [first, second] = flipped;

      if (cards[first].Icon === cards[second].Icon) {
        setMatched([...matched, first, second]);
        setFlipped([]);
        setIsLocked(false);
      } else {
        setTimeout(() => {
          setFlipped([]);
          setIsLocked(false);
        }, 1000);
      }
      setMoves(prev => prev + 1);
    }
  }, [flipped, cards, matched]);

  const handleCardClick = (index: number) => {
    if (isLocked || flipped.includes(index) || matched.includes(index)) return;

    if (flipped.length < 2) {
      setFlipped([...flipped, index]);
    }
  };

  const resetGame = () => {
    setFlipped([]);
    setMatched([]);
    setMoves(0);
    setIsLocked(false);
    setGameStarted(false);
    setShowPreview(false);
    setCards([]);
    setTime(0);
    setTimerActive(false);
  };

  if (!gameStarted) {
    return (
      <div className="container">
        <div className="contentPage">
          <div className="start-screen">
            <div className="game-title">Joc de Memorie</div>
            <div className="start-instructions">
              <p>Găsește toate perechile de cărți potrivite</p>
              <p className="start-instructions-small">La început vei avea 1 secundă să memorezi pozițiile</p>
            </div>
            <button onClick={startGame} className="game-button start">
              Start Joc
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
        <div className="memory-game">
          <div className="game-title">Joc de Memorie</div>
          <div className="game-stats">
            <div className="timer">
              Timp: <span className="timer-value">{formatTime(time)}</span>
            </div>
            <div className="moves">
              Mutări: {moves}
              {matched.length === cards.length && (
                <span className="win-message">
                  Felicitări! Ai câștigat în {formatTime(time)}!
                </span>
              )}
            </div>
          </div>
          <button onClick={resetGame} className="game-button">
            Joc Nou
          </button>
          <div className="cards-grid">
            {cards.map((card, index) => (
              <Card
                key={card.id}
                isFlipped={flipped.includes(index) || matched.includes(index) || showPreview}
                Icon={card.Icon}
                onClick={() => handleCardClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
  );
};

export default MemoryGame;