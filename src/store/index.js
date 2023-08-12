import { createStore } from 'vuex'
import { settingModule } from './settingModule'
import { tilesInfoModule } from './tilesInfoModule'
import { userInfoModule } from './userInfoModule'
import { recordModule } from './recordModule'

export default createStore({
  modules: {
    setting: settingModule,
    tilesInfo: tilesInfoModule,
    userInfo: userInfoModule,
    record: recordModule
  }
})