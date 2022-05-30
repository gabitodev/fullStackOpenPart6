import { useSelector, useDispatch } from 'react-redux';
import { updateAnectode } from '../reducers/anecdoteReducer';
import { setNotification } from '../reducers/notificationReducer';

const AnecdoteList = () => {
  const anecdotes = useSelector(state => {
    if (state.filter) {
      return state.anecdotes.filter(anecdote => anecdote.content.toLowerCase().startsWith(state.filter));
    } else {
      return state.anecdotes;
    }
  });
  const sortedAnecdotes = [...anecdotes].sort((a, b) => b.votes - a.votes);
  const dispatch = useDispatch();

  const voteAnecdote = (id, content) => {
    dispatch(updateAnectode(id));
    dispatch(setNotification(`You voted '${content}'`, 5));
  };


  return (
    <>
      {sortedAnecdotes.map(anecdote =>
      <div key={anecdote.id}>
        <div>
          {anecdote.content}
        </div>
        <div>
          has {anecdote.votes}
          <button onClick={() => voteAnecdote(anecdote.id, anecdote.content)}>vote</button>
        </div>
      </div>
    )}
    </>
  );
};

export default AnecdoteList;