import activeTabChangeReducer from './activeTabChangeReducer';
import { combineReducers } from 'redux';

const rootReducers = combineReducers({
    activeTab: activeTabChangeReducer
});

export default rootReducers;
