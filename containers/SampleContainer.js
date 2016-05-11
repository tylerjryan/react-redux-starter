import { connect } from 'react-redux';
import { addEntity } from '../actions';
import TabsInstance from '../components/TabsInstance';

const mapStateToProps = (state) => (
  { entities: state }
);

const mapDispatchToProps = (dispatch) => ({
  onEntityClick: () => dispatch(addEntity()),
});

const SampleContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TabsInstance);

export default SampleContainer;
