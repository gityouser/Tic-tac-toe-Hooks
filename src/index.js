import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square({squares, number, setSquares, isXNext, setLastTurn}) {
  return (
    <button 
      className="square"
      onClick ={() => {
        const newSquares = [...squares]
        newSquares[number] = isXNext ? 'X' : '0'
        setSquares(newSquares)
        setLastTurn(!isXNext)
      }} 
    >
      {squares[number]}
    </button>
  );
}

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [isXNext, setLastTurn] = useState(true)

  function renderSquare(i) {
    return <Square
      number={i}
      squares={squares}
      setSquares={setSquares}
      setLastTurn={setLastTurn}
      isXNext={isXNext}
    />;
  }

  const status = `Next player: ${isXNext ? 'X' : '0'}`

  return (
    <div>
      <div className="status">{status}</div>
      <div>This is to test pull requests on this repository.</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
