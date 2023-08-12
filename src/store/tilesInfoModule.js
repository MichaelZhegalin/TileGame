export const tilesInfoModule = {
    state: () => ({
        tiles: [],
        activeId: [],
        gameOver: false,
        nextLvl: false,
    }),
    getters: {
    },
    mutations: {
        setField(state, tilesNumber){
            state.tiles.length = 0;
            state.activeId.length = 0;
            state.gameOver = false;
            state.nextLvl = false;
            for(let i = 0; i < tilesNumber; i++){
                state.tiles.push({
                    activeState: false,
                    color: '#FFFFFF',
                    activeCounter: 0,
                    id: i
                })
            }
        },
        setActiveTile(state, activeTileId){
            console.log(state.tiles)
            state.tiles[activeTileId].activeState = true;
            state.tiles[activeTileId].activeCounter += 1;
            state.activeId.push(activeTileId); 
        },
        setColorTile(state, tileIdAndColor){
            state.tiles[tileIdAndColor.id].color = tileIdAndColor.color;
        },
        setClickTile(state, tileId){
            if(state.tiles[tileId].activeCounter <= 0 || state.activeId[0] !== tileId){
                state.gameOver = true
            }else{
                state.tiles[tileId].activeCounter -= 1;
                state.activeId = state.activeId.reverse();
                state.activeId.pop();
                state.activeId = state.activeId.reverse();
                if(state.activeId.length === 0){
                    state.nextLvl = true;
                }
                if(state.tiles[tileId].activeCounter === 0){
                    state.tiles[tileId].activeState = false;
                }
            }
        },
        setNextLvl(state){
            state.nextLvl = !state.nextLvl;
        },
        setGameOver(state){
            state.gameOver = true;
        },
    },
    actions: {
    }
}