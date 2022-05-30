import deepFreeze from 'deep-freeze';
import anecdoteReducer from './anecdoteReducer';
import { initialState } from './anecdoteReducer';

const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

describe('anecdote reducer', () => {
  test('should return anecdotes when is no action', () => {
    const action = {
      type: 'NOTHING'
    };

    const newState = anecdoteReducer(undefined, action)
    const anecdoteStates = newState.map(anecdote => anecdote.content);
    expect(anecdoteStates).toEqual(anecdotesAtStart)
  });

  test('votes increment by 1', () => {
    const action = {
      type: 'anecdotes/vote',
      payload: initialState[0].id
    };

    const state = initialState;
    deepFreeze(state);
    const newState = anecdoteReducer(state, action);
    expect(newState[0].votes).toBe(1);
  });

  test('create anecdote', () => {
    const action = {
      type: 'anecdotes/createAnecdote',
      payload: 'LEEEEEEEEEOOO LEEEEEEO'
    };

    const state = initialState;
    deepFreeze(state);
    const newState = anecdoteReducer(state, action);
    expect(newState[newState.length - 1].content).toContainEqual(action.payload);
  });
});