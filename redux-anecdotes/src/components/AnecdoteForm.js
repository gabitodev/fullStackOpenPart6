import { createAnecdote } from '../reducers/anecdoteReducer';
import { connect } from 'react-redux';

const NewAnecdote = props => {
  const addAnecdote = async (event) => {
    event.preventDefault();
    const anecdote = {
      content: event.target.anecdote.value,
      votes: 0
    };
    event.target.anecdote.vaule = '';
    props.createAnecdote(anecdote);
  };

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name='anecdote' /></div>
        <button type='submit'>create</button>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    createAnecdote: value => {
      dispatch(createAnecdote(value));
    },
  };
};


export default connect(
  null,
  mapDispatchToProps
)(NewAnecdote);
