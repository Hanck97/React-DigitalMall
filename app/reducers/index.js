import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import list from './list'
import session from './session'
import product from './product'

export default combineReducers({
    list,
    product,
    session,
    router:routerReducer,
})