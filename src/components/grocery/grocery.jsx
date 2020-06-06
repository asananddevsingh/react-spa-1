import React from "react";
import ItemCard from "../itemCard/itemCard";
import WithHeader from "../../hoc/withHeader/withHeader";

/**
 * @description - Grocery component that is connected to the container and responsible to make the API calls.
 *
 * @param {*} props - Component props
 */
class Grocery extends React.PureComponent {
  /**
   * Get the list of items.
   */
  componentDidMount() {
    this.props.onInitGroceryItems();
  }

  /**
   * Update the vote up count.
   */
  voteUpHandler = itemData => {
    this.props.onVoteUpItem(itemData);
  };

  /**
   * Update the vote down count.
   */
  voteDownHandler = itemData => {
    this.props.onVoteDownItem(itemData);
  };

  render() {
    const { groceryItems } = this.props;
    const formattedItems = Object.values(groceryItems);
    return (
      <WithHeader>
        <ItemCard
          onVoteUp={this.voteUpHandler}
          onVoteDown={this.voteDownHandler}
          groceryItems={formattedItems}
        />
      </WithHeader>
    );
  }
}

export default Grocery;
