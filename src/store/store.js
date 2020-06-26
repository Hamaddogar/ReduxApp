 import  {createStore} from 'redux'
  import {dataReducer} from '../store/reducers/reducers'


  let store= createStore(dataReducer)
     export default store