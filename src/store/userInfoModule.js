export const userInfoModule = {
    state: () => ({
        score: 0,
        lvl: 1,
        name: '',
    }),
    getters: {
    },
    mutations: {
        setNewGame(state){
            state.score = 0;
            state.lvl = 1;
            state.name = '';
        },
        setName(state, nameUser){
            state.name = nameUser;
        },
        setScore(state){
            state.score += 1;
        },
        setLvl(state){
            state.lvl += 1;
        },
    },
    actions: {
    }
}