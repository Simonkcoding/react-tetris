export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () => {
    return (
        Array.from(Array(STAGE_HEIGHT), () =>
            new Array(STAGE_WIDTH).fill([0, 'clear'])
        )
    )
}

export const checkCollision = (player, stage, { x: moveX, y: moveY }) => {
    for (let y = 0; y < player.tetriomino.length; y += 1) {
        for (let x = 0; x < player.tetriomino[y].length; x += 1) {
            // 1. check if we are in tetromino cell

            if (player.tetriomino[y][x] !== 0) {
                if (
                    // 2. check that our move is inside in the game area
                    // we shouldn't go thu the bottom (y)
                    !stage[y + player.pos.y + moveY] ||
                    // 3. check that our move is inside the game area(x)
                    !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
                    // 4. cehck taht the cell isn't set to clear
                    stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !==
                    'clear'
                ) {
                    return true;
                }
            }
        }
    }
}


