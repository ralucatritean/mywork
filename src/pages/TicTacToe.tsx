import { useState } from 'react';
import '../css/TicTacToe.css'

type Player = 'X' | 'O' | null;
type Board = Player[];

interface ScoreState {
    X: number;
    O: number;
}

function TicTacToe() {
    const [board, setBoard] = useState<Board>(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState<boolean>(true);
    const [winner, setWinner] = useState<Player | 'Draw' | null>(null);
    const [showNotification, setShowNotification] = useState<boolean>(false);
    const [scores, setScores] = useState<ScoreState>({
        X: 0,
        O: 0
    });

    const calculateWinner = (squares: Board): Player | 'Draw' | null => {
        const lines = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
            [0, 4, 8], [2, 4, 6] // diagonals
        ];

        for (const [a, b, c] of lines) {
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }

        if (squares.every(square => square !== null)) {
            return 'Draw';
        }

        return null;
    };

    const handleClick = (index: number): void => {
        if (board[index] || winner) {
            return;
        }

        const newBoard = [...board];
        newBoard[index] = isXNext ? 'X' : 'O';
        setBoard(newBoard);
        setIsXNext(!isXNext);

        const gameWinner = calculateWinner(newBoard);
        if (gameWinner) {
            setWinner(gameWinner);
            if (gameWinner !== 'Draw') {
                setScores(prevScores => ({
                    ...prevScores,
                    [gameWinner]: prevScores[gameWinner as keyof ScoreState] + 1
                }));
                setShowNotification(true);
            }
        }
    };

    const resetGame = (): void => {
        setBoard(Array(9).fill(null));
        setIsXNext(true);
        setWinner(null);
        setShowNotification(false);
    };

    const resetScores = (): void => {
        setScores({ X: 0, O: 0 });
    };

    const renderStatus = (): string => {
        if (winner === 'Draw') {
            return 'Joc la egalitate!';
        } else if (winner) {
            return `Câștigător: ${winner}`;
        } else {
            return `Următorul jucător: ${isXNext ? 'X' : 'O'}`;
        }
    };

    const renderSquare = (index: number): JSX.Element => (
        <button
            onClick={() => handleClick(index)}
            className={`game-square ${!board[index] && !winner ? 'hover-effect' : ''} 
        ${board[index] === 'X' ? 'x-move' : 'o-move'}`}
        >
            {board[index]}
        </button>
    );
    return (
        <div className="container">
            <div className="ttt-contentPage">
                <h1 className="game-title">Tic Tac Toe</h1>

                <div className="game-status">
                    {renderStatus()}
                </div>

                <div className="game-board">
                    {Array(9).fill(null).map((_, index) => (
                        <div key={index}>
                            {renderSquare(index)}
                        </div>
                    ))}
                </div>

                <div className="game-controls">
                    <button
                        onClick={resetGame}
                        className="control-button reset-game"
                    >
                        Joc Nou
                    </button>
                    <button
                        onClick={resetScores}
                        className="control-button reset-scores"
                    >
                        Resetare Score
                    </button>
                </div>

                {showNotification && winner && winner !== 'Draw' && (
                    <>
                        <div className="popup-overlay" onClick={resetGame} />
                        <div className="winner-popup">
                            <div className="popup-trophy">
                                🏆
                            </div>
                            <div className="popup-title">
                                {winner === 'X' ? (
                                    <span style={{ color: '#60a5fa' }}>X a câștigat!</span>
                                ) : (
                                    <span style={{ color: '#f87171' }}>O a câștigatF!</span>
                                )}
                            </div>
                            <div className="popup-message">
                                Felicitări pentru victorie!
                            </div>
                            <div className="popup-score">
                                Scor: X ({scores.X}) - O ({scores.O})
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default TicTacToe;