import * as actions from "actions";

export const searchSalon = searchCondition => {
  return async dispatch => {
    dispatch(actions.searchSalon(searchCondition));
  };
};
