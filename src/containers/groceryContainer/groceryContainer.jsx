import { connect } from "react-redux";
import * as actions from "../../store/actions";
import grocery from "../../components/grocery/grocery";

const mapStateToProps = state => {
  return {
    groceryItems: state.items && state.items.groceryItems
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onInitGroceryItems: () => dispatch(actions.initGroceryItems()),
    onVoteUpItem: data => dispatch(actions.voteUpItem(data)),
    onVoteDownItem: data => dispatch(actions.voteDownItem(data))
  };
};

/**
 * @description - Pure container for Grocery component that holds the dispaching props and store value props.
 */
const groceryContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(grocery);
export default groceryContainer;
