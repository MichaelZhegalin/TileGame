export const settingModule = {
    state: () => ({
        hardLvl: 1,
        speedLvl: 1,
    }),
    getters: {
    },
    mutations: {
        setDefault(state){
            state.hardLvl = 1;
            state.speedLvl = 1;   
        },
        setSpeedLvl(state, speedValue){
            state.speedLvl = speedValue;
        },
        setHardLvl(state, hardLvlValue){
            state.hardLvl = hardLvlValue;
        },
    },
    actions: {
    }
}