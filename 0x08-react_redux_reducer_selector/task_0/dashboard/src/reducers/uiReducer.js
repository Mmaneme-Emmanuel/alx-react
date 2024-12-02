// Import action types
import uiActionTypes from '../actions/uiActionTypes';

// Initial state of the UI reducer
const initialState = {
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {}
};

// Reducer function
const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case uiActionTypes.DISPLAY_NOTIFICATION_DRAWER:
      return {
        ...state,
        isNotificationDrawerVisible: true,
      };

    case uiActionTypes.HIDE_NOTIFICATION_DRAWER:
      return {
        ...state,
        isNotificationDrawerVisible: false,
      };

    case uiActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isUserLoggedIn: true,
      };

    case uiActionTypes.LOGIN_FAILURE:
      return {
        ...state,
        isUserLoggedIn: false,
      };

    case uiActionTypes.LOGOUT:
      return {
        ...state,
        isUserLoggedIn: false,
      };

    default:
      return state; // Return the current state if no action matches
  }
};

// Export the initial state and the reducer
export { initialState, uiReducer };
