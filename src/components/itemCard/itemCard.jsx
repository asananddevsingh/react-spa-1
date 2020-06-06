import React from "react";
import "./itemCard.css";
import ItemImage from "../itemImage/itemImage";
import VoteUp from "../voteUp/voteUp";
import VoteDown from "../voteDown/voteDown";

/**
 * @description - Component that creates the list of items.
 *
 * @param {*} props - Component props
 */
const itemCard = props => {
  return (
    <>
      {props.groceryItems &&
        props.groceryItems.map(item => {
          return (
            <div className="Item" key={item.id}>
              <div>
                <ItemImage imagePath={item.imagePath} altText={item.name} />
              </div>
              <div className="Item-Name">{item.name}</div>
              <div className="Vote-Wrapper">
                <VoteUp
                  voteCount={item.upVoteCount}
                  onClick={() => props.onVoteUp(item)}
                />
                <VoteDown
                  voteCount={item.downVoteCount}
                  onClick={() => props.onVoteDown(item)}
                />
              </div>
              <div className="Vote-Result">
                Result: <strong>{item.upVoteCount - item.downVoteCount}</strong>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default itemCard;
