
import { types } from "./types";

export function fetchDataPending() {
    return {
      type: types.FETCH_DATA_PENDING
    };
  }
  export function fetchDataSuccess({ post }) {
    return {
      type: types.FETCH_DATA_SUCCESS,
      payload: {
        post,
      }
    };
  }
  export function fetchDataFailuer() {
    return {
      type: types.FETCH_DATA_FAILURE
    };
  }
  export function fetchUserPending() {
    return {
      type: types.FETCH_USER_PENDING
    };
  }
  
  export function fetchUserSuccess({ post, postId }) {
    return {
      type: types.FETCH_USER_SUCCESS,
      payload: {
        post,
        postId
      }
    };
  }
  
  export function fetchUserFailuer() {
    return {
      type: types.FETCH_USER_FAILURE
    };
  }
  
  export function fetchData() {
    return async dispatch => {
      dispatch(fetchDataPending());
  
      try {
        const users = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        ).then(res => res.json());
        dispatch(fetchDataSuccess({ users }));
      } catch {
        dispatch(fetchDataFailuer());
      }
    };
  }
  export function fetchUser({ postId }) {
    return async dispatch => {
      dispatch(fetchUserPending());
  
      try {
        const post = await fetch(
          `https://jsonplaceholder.typicode.com/users/${postId}`
        ).then(res => res.json());
  
        if (!post || post.id !== parseInt(postId, 10))
          throw new Error("User not found");
  
        dispatch(fetchUserSuccess({ post, postId }));
      } catch {
        dispatch(fetchUserFailuer());
      }
    };
  }

