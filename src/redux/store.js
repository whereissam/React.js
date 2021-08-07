
// 該文件專門用於export 一個 store對象，整個應用只有一個store對象

// 引入 createStore，專門用於創建redux中最為核心的store對象
import { createStore } from "redux";
// 引入 Count 組件服務的reducer
import countReducer from './count_reducer'

export default createStore(countReducer )
