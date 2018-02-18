import { createTypes, createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const prefix = '@HOME/';

// Types
export const Types = createTypes('INCREMENT', { prefix });

// Creators
export const { Creators: Counter } = createActions({ increment: null }, { prefix });

// Reducer
const INITIAL_STATE = Immutable({ counter: 0 });

const HANDLERS = {
  [Types.INCREMENT]: state => Immutable({ counter: state.counter + 1 })
};

export default createReducer(INITIAL_STATE, HANDLERS);
