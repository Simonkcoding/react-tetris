import React, { useState } from 'react';
import { createStage } from '../gameHelpers';

//custome hooks
import { usePlayer } from '../hooks/usePlayer';
import { useStage } from '../hooks/useStage';

// styled component
import { StyledTetrisWrapper, StyledTetris } from './styles/StyledTetris';

// Components
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';

const Tetris = () => {

    const [dropTime, setDropTime] = useState(null);
    const [gameOver, setGameOVer] = useState(false);
    const [player, updatePlayerPos,resetPlayer] = usePlayer();
    const [stage, setStage] = useStage(player);

    console.log('re-render');

    const movePlayer = direction => {
        updatePlayerPos({x:direction,y:0});
    }

    const startGame = () => {
       // reset
        setStage(createStage());
        resetPlayer();
    }

    const drop = () => {
        updatePlayerPos({x:0,y:1, collided:false});
    }

    const dropPlayer = () => {
        drop();
    }

    const move = ({ keyCode }) => { // e.keycode, argument is e
        if (!gameOver) {
            if (keyCode === 37) {
                movePlayer(-1);
            } else if (keyCode === 39) {
                movePlayer(1);
            } else if (keyCode === 40) {
                dropPlayer();
            }
        }
    }

    return (
        <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={e => move(e)}>
            <StyledTetris>
                <Stage stage={stage} />
                <aside>
                    {gameOver ? (
                        <Display gameOver={gameOver} text="Game Over" />
                    ) : (
                            <div>
                                <Display text="score" />
                                <Display text="rows" />
                                <Display text="level" />
                            </div>
                        )}
                    <StartButton callback={startGame}/>
                </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    )
}

export default Tetris;