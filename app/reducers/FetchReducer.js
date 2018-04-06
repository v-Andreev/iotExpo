import {
  FETCH_PRODUCTS_BEGIN,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR
} from '../actions/FetchActions';

const initialState = {
  items: [],
  loading: false,
  error: null
};

export default function productReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_PRODUCTS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: {
          ...action.payload
        }
      };

    case FETCH_PRODUCTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: []
      };

    default:
      return state;
  }
}
