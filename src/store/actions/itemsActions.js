import * as actionTypes from "./actionsTypes";
import axios from "../../utils/axiosUtil";

/**========================= GROCERY ITEMS =========================*/
const setGroceryItems = groceryItems => {
  return {
    type: actionTypes.FETCH_GROCERY_ITEMS_SUCCESS,
    groceryItems: groceryItems
  };
};

const fetchGroceryItemsFail = () => {
  return {
    type: actionTypes.FETCH_GROCERY_ITEMS_FAIL
  };
};

/**
 * @description - Method to get list of the grocery items.
 *
 * @param {*} orderData - Request data for API.
 */
export const initGroceryItems = () => {
  return dispatch => {
    axios
      .get("/groceryItems.json")
      .then(response => {
        dispatch(setGroceryItems(response.data));
      })
      .catch(error => {
        dispatch(fetchGroceryItemsFail());
      });
  };
};

/**========================= VOTE UP =========================*/
const voteUpSuccess = data => {
  return {
    type: actionTypes.VOTE_DOWN_ITEM_SUCCESS,
    updatedItem: data,
    loading: false
  };
};

const voteUpFail = error => {
  return {
    type: actionTypes.VOTE_DOWN_ITEM_FAIL,
    error: error,
    loading: false
  };
};

/**
 * @description - Method to update the vote up.
 *
 * @param {*} orderData - Request data for API.
 */
export const voteUpItem = orderData => {
  const putUrl = "/groceryItems/item" + orderData.id + ".json";
  const postData = {
    ...orderData,
    upVoteCount: orderData.upVoteCount + 1
  };
  return dispatch => {
    axios
      .put(putUrl, postData)
      .then(response => {
        dispatch(voteUpSuccess(response.data));
      })
      .catch(error => {
        dispatch(voteUpFail(error));
      });
  };
};

/**========================= VOTE DOWN =========================*/
const voteDownSuccess = data => {
  return {
    type: actionTypes.VOTE_DOWN_ITEM_SUCCESS,
    updatedItem: data,
    loading: false
  };
};

const voteDownFail = error => {
  return {
    type: actionTypes.VOTE_DOWN_ITEM_FAIL,
    error: error,
    loading: false
  };
};

/**
 * @description - Method to update the vote down.
 *
 * @param {*} orderData - Request data for API.
 */
export const voteDownItem = orderData => {
  const putUrl = "/groceryItems/item" + orderData.id + ".json";
  const postData = {
    ...orderData,
    downVoteCount: orderData.downVoteCount + 1
  };
  return dispatch => {
    axios
      .put(putUrl, postData)
      .then(response => {
        dispatch(voteDownSuccess(response.data));
      })
      .catch(error => {
        dispatch(voteDownFail(error));
      });
  };
};
