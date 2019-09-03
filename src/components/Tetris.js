import React,{useState} from 'react';

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
    const [player] = usePlayer();
    const [stage, setStage] = useStage(player);

    console.log('re-render');
    return (
        <StyledTetrisWrapper>
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
                    <StartButton />
                </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    )
}

export default Tetris;