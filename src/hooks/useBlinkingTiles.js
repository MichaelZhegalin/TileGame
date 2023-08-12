import { ref } from 'vue';

export function useBlinkingTiles(lvl, hardLvl, store){
    let numberTiles = ref();

    if(hardLvl === 0){
        numberTiles.value = 4;
    }else if(hardLvl === 1){
        numberTiles.value = 9;
    }else{
        numberTiles.value = 16;
    }

    for(let i = 0; i < lvl; i++){
        store.commit('setActiveTile', Math.floor(Math.random() * numberTiles.value));
    }   
}