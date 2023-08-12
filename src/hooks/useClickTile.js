import { ref } from 'vue';
export function useClickTile(tileId, tilesNum, store){
    let nextLvlFlag = ref(false)
    store.commit('setClickTile', tileId);
    if(store.state.tilesInfo.gameOver !== true && store.state.tilesInfo.nextLvl !== true){
        store.commit('setScore');
    }else if(store.state.tilesInfo.gameOver !== true){
        store.commit('setScore');
        store.commit('setLvl');
        store.commit('setNextLvl');
        nextLvlFlag.value = true;
    }else{
        store.commit('setGameOver')
    }

    return nextLvlFlag.value
}