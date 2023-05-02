import { types } from "../types";

const initialState = {
    loading: false,
    users: [],
    usersById: {},
    loadingUser: false
  };
export const PostReducer= (state = initialState, action) =>{
    switch (action.type) {
        case types.FETCH_DATA_PENDING: {
          return {
            ...state,
            loading: true
          };
        }
    
        case types.FETCH_DATA_SUCCESS: {
          const { users } = payload;
    
          return {
            ...state,
            loading: false,
            users
          };
        }
    
        case types.FETCH_DATA_FAILURE: {
          return {
            ...state,
            loading: false
          };
        }
    
        case types.FETCH_USER_PENDING: {
          return {
            ...state,
            loadingUser: true
          };
        }
    
        case types.FETCH_USER_SUCCESS: {
          const { user, userId } = payload;
    
          return {
            ...state,
            loadingUser: false,
            usersById: {
              ...state.usersById,
              [userId]: user
            }
          };
        }
    
        case types.FETCH_USER_FAILURE: {
          return {
            ...state,
            loadingUser: false
          };
        }
    
        default: {
          return state;
        }
      }
    }
    

