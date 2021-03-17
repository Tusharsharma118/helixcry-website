import React, { useState, useRef, useEffect } from "react";
import { useInterval } from "./interval";
import {Button,ButtonGroup} from 'react-bootstrap'
import '../styles/Snake.css'
  
const CANVAS_SIZE = [700, 300];
const SNAKE_START = [
  [8, 7],
  [8, 8]
];
const APPLE_START = [8, 3];
const SCALE = 10;
const SPEED = 120;
const DIRECTIONS = {
  "UP": [0, -1], //up using button
  87: [0,-1], // up using W
  "DOWN": [0, 1], //down using button
  83: [0,1], // down using S
  "LEFT": [-1, 0], //left using button
  65: [-1,0], // left using A
  "RIGHT": [1, 0], //right using button
  68: [1,0] // right using D
};

const Snake = () => {

  const canvasRef = useRef();
  const [snake, setSnake] = useState(SNAKE_START);
  const [apple, setApple] = useState(APPLE_START);
  const [dir, setDir] = useState([0, -1]);
  const [speed, setSpeed] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  const [prevInput,setPrevInput] = useState('U');
  useInterval(() => gameLoop(), speed);

  const endGame = () => {
    setSpeed(null);
    setGameOver(true);
  };

  const moveSnake = (keyCode) => {
    console.log(keyCode)
    console.log("prevInput =", prevInput)
    if (keyCode === 'UP' && prevInput !== 'D' ){
        setDir(DIRECTIONS[keyCode]);
        setPrevInput('U');
        }
    else if (keyCode === 'DOWN' && prevInput !== 'U' ){
            setDir(DIRECTIONS[keyCode]);
            setPrevInput('D');
    }
    else if (keyCode === 'LEFT' && prevInput !== 'R' ){
            setDir(DIRECTIONS[keyCode]);
            setPrevInput('L');
    }
    else if (keyCode === 'RIGHT' && prevInput !== 'L' ){
            setDir(DIRECTIONS[keyCode]);
            setPrevInput('R');
    }
  }

  const moveKeySnake = ({keyCode}) => {
    console.log({keyCode})
    console.log("prevInput =", prevInput)
    if (keyCode === 87 && prevInput !== 'D' ){
        setDir(DIRECTIONS[keyCode]);
        setPrevInput('U');
        }
    else if (keyCode === 83 && prevInput !== 'U' ){
            setDir(DIRECTIONS[keyCode]);
            setPrevInput('D');
    }
    else if (keyCode === 65 && prevInput !== 'R' ){
            setDir(DIRECTIONS[keyCode]);
            setPrevInput('L');
    }
    else if (keyCode === 68 && prevInput !== 'L' ){
            setDir(DIRECTIONS[keyCode]);
            setPrevInput('R');
    }
  }
    

  const createApple = () =>
    apple.map((_a, i) => Math.floor(Math.random() * (CANVAS_SIZE[i] / SCALE)));

  const checkCollision = (piece, snk = snake) => {
    if (
      piece[0] * SCALE >= CANVAS_SIZE[0] ||
      piece[0] < 0 ||
      piece[1] * SCALE >= CANVAS_SIZE[1] ||
      piece[1] < 0
    )
      return true;

    for (const segment of snk) {
      if (piece[0] === segment[0] && piece[1] === segment[1]) return true;
    }
    return false;
  };

  const checkAppleCollision = newSnake => {
    if (newSnake[0][0] === apple[0] && newSnake[0][1] === apple[1]) {
      let newApple = createApple();
      while (checkCollision(newApple, newSnake)) {
        newApple = createApple();
      }
      setApple(newApple);
      setScore(score+1);
      if(score === 5){
          setSpeed(speed - 50);
      }
      return true;
    }
    return false;
  };

  const gameLoop = () => {
    const snakeCopy = JSON.parse(JSON.stringify(snake));
    const newSnakeHead = [snakeCopy[0][0] + dir[0], snakeCopy[0][1] + dir[1]];
    snakeCopy.unshift(newSnakeHead);
    if (checkCollision(newSnakeHead)) endGame();
    if (!checkAppleCollision(snakeCopy)) snakeCopy.pop();
    setSnake(snakeCopy);
  };

  const startGame = () => {
    setSnake(SNAKE_START);
    setApple(APPLE_START);
    setDir([0, -1]);
    setSpeed(SPEED);
    setGameOver(false);
    setScore(0);
  };

  useEffect(() => {
    const context = canvasRef.current.getContext("2d");
    context.setTransform(SCALE, 0, 0, SCALE, 0, 0);
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    context.fillStyle = "pink";
    snake.forEach(([x, y]) => context.fillRect(x, y, 1, 1));
    context.fillStyle = "lightblue";
    context.fillRect(apple[0], apple[1], 1, 1);
  }, [snake, apple, gameOver]);

  return (
    <> 
    <div role="button" className="game-body" tabIndex="0" onKeyDown={e => moveKeySnake(e)}>
        <div className="heading-item">
            <h2>Snek Back to the Past!</h2>
        </div>
      <canvas
        style={{ border: "1px solid white" }}
        ref={canvasRef}
        width={`${CANVAS_SIZE[0]}px`}
        height={`${CANVAS_SIZE[1]}px`}
      />
      {gameOver && <span className="score-not-btn" >GAME OVER!  SCORE : {score} </span>}
      <div className="button-group">
        <Button onClick={startGame} variant="dark" className="start-btn">START</Button>
        <Button onClick={() => moveSnake("UP")} variant="dark" className="arrow-up-btn">W</Button>
        <ButtonGroup className="bottom-button">
          <Button variant="dark" onClick={() => moveSnake("LEFT")} className="wasd">A</Button>
          <Button variant="dark" onClick={() => moveSnake("DOWN")} className="wasd">S </Button>
          <Button variant="dark" onClick={() => moveSnake("RIGHT")}className="wasd">D</Button>
        </ButtonGroup>
        </div>
      </div>    
    </>
  );
};

export default Snake;