import * as types from './actionTypes';

const initialState = {
  todos: [],
  isLoading: false,
  isError: null,
};

export const todoReducers = (oldState = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_TODOS_REQUEST:
      return {
        ...oldState,
        isLoading: true,
      };

    case types.GET_TODOS_SUCCESS:
      return {
        ...oldState,
        isLoading: false,
        todos: payload, 
      };

    case types.GET_TODOS_FAILURE:
      return {
        ...oldState,
        isLoading: false,
        isError: payload,
      };





      case types.ADD_TODOS_REQUEST:
      return {
        ...oldState,
        isLoading: false,
      };

    case types.ADD_TODOS_SUCCESS:
      return {
        ...oldState,
        isLoading: false,
        isError: payload, 
      };

    case types.ADD_TODOS_FAILURE:
      return {
        ...oldState,
        isLoading: false,
        isError: payload,
      };


    default:
      return oldState;
  }
};
