import { connect } from 'react-redux';
import { selectTab } from '../actions';
import App from '../components/App';

const mapStateToProps = (state) => ({
  currentTab: state.currentTab,
});

const mapDispatchToProps = (dispatch) => ({
  handleSelectTab: (key) => dispatch(selectTab(key)),
});

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
