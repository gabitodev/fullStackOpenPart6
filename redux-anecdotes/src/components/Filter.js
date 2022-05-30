import { showFiltered } from '../reducers/filterReducer';
import { connect } from 'react-redux';

const Filter = props => {
  const style = {
    marginBottom: 10
  };

  return (
    <div style={style}>
      filter <input onChange={({ target }) => props.showFiltered(target.value)} />
    </div>
  )
};

const mapDispatchToProps = dispatch => {
  return {
    showFiltered: value => {
      dispatch(showFiltered(value));
    },
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Filter);