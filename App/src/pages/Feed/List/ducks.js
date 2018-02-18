import { createTypes, createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const prefix = '@FEED_LIST/';

// Types
// export const Types = createTypes('INCREMENT', { prefix });

// Creators
// export const { Creators } = createActions({}, { prefix });

// Reducer
const INITIAL_STATE = Immutable({});

const HANDLERS = {};

export default createReducer(INITIAL_STATE, HANDLERS);
