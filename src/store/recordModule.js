export const recordModule = {
    state: () => ({
        usersRecord: []
    }),
    getters: {
    },
    mutations: {
        setUserRecord(state, userInfo){
            state.usersRecord.push(
                {
                    name: userInfo.name,
                    hardLvl: userInfo.hard,
                    speedLvl: userInfo.speed,
                    score: userInfo.score,
                    id: Date.now()
                }
            )
        },
        setAllUsersRecord(state, allUsersInfo){
            for(let i in allUsersInfo){
                state.usersRecord[i] = allUsersInfo[i]
            }
        }
    },
    actions: {
    }
}