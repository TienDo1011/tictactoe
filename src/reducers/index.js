import { combineReducers } from 'redux';
import input from './input';
import memories from './memories';
import memoriesVisible from './memoriesVisible';

const rootReducer = combineReducers({ input, memories, memoriesVisible });

export default rootReducer;
