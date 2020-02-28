import { combineReducers } from 'redux';
import tracksReducer from './tracksSlice';

const rootReducer = combineReducers({
	tracks: tracksReducer,
});

export default rootReducer;
