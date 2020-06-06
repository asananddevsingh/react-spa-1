import * as actionTypes from "../actions/actionsTypes";
import { updateObject } from "../../utils/reducerUtil";

const initialState = {
  groceryItems: []
};

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_GROCERY_ITEMS_SUCCESS:
      return updateObject(state, {
        groceryItems: action.groceryItems
      });
    case actionTypes.VOTE_UP_ITEM_SUCCESS:
      return updateObject(state, {
        loading: action.loading,
        groceryItems: {
          ...state.groceryItems,
          ["item" + action.updatedItem.id]: {
            ...action.updatedItem
          }
        }
      });
    case actionTypes.VOTE_DOWN_ITEM_SUCCESS:
      return updateObject(state, {
        loading: action.loading,
        groceryItems: {
          ...state.groceryItems,
          ["item" + action.updatedItem.id]: {
            ...action.updatedItem
          }
        }
      });
    default:
      return state;
  }
};

export default itemsReducer;
