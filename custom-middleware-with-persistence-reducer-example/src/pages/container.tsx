import { Page } from './page';
import { State } from '../reducers';
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter, loadPersistedState } from '../actions';

const mapStateToProps = (state: State) => ({
  count: state.counterReducer.value,
});

const mapDispatchToProps = (dispatch: any) => ({
  increment: () => { dispatch(incrementCounter()); },
  decrement: () => { dispatch(decrementCounter()); },
  loadPersistedState: () => { dispatch(loadPersistedState()); },
});

export const PageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Page);
