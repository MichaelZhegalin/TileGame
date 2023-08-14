export const recordModule = {
    state: () => ({
        usersRecord: [],
        recordListShow: []
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
            localStorage.setItem('records', JSON.stringify(state.usersRecord));
            if(state.recordListShow.length < 3){
                state.recordListShow.push(
                    {
                        name: userInfo.name,
                        hardLvl: userInfo.hard,
                        speedLvl: userInfo.speed,
                        score: userInfo.score,
                        id: Date.now()
                    }
                )
            }
        },
        setAllUsersRecord(state, allUsersInfo){
            for(let i in allUsersInfo){
                state.usersRecord[i] = allUsersInfo[i];
                if(i < 3){
                    state.recordListShow[i] = allUsersInfo[i];
                }
            }
        },
        setRecordListShow(state, numberCarousel){
            let stopNum = undefined;
            for(let i = 0; i < 3; i++){
                if(state.usersRecord[numberCarousel * 3 + i] !== undefined){
                    state.recordListShow[i] = state.usersRecord[numberCarousel * 3 + i];
                }else{
                    stopNum = i;
                    i = 3;
                    state.recordListShow = []; 
                }
                
            }
            for(let i = 0; i < stopNum; i++){
                state.recordListShow[i] = state.usersRecord[numberCarousel * 3 + i];
            }
        },
        clearRecord(state){
            state.usersRecord = [];
            state.recordListShow = [];
            localStorage.clear();
        }
    },
    actions: {
    }
}