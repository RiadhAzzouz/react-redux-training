import { combineReducers } from 'redux';
import clientReducer from './clientReducer';
import categoryReducer from './categoryReducer';

export const allReducers = combineReducers({
    allClients: clientReducer,
    allCategories: categoryReducer
});