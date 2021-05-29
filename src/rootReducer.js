import {combineReducers} from 'redux';
import usersReducer from './usersReducer';
import itemsReducer from './itemsReducer';

const rootReducer = combineReducers({
    usersReducer:usersReducer,
    itemsReducer:itemsReducer
})

export default rootReducer