import { Page } from './page';
import { State } from '../reducers';
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter } from '../actions';

const mapStateToProps = (state: State) => ({
  count: state.counterReducer.value,
});

const mapDispatchToProps = (dispatch: any) => ({
  increment: () => { dispatch(incrementCounter()); },
  decrement: () => { dispatch(decrementCounter()); },
});

export const PageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Page);
