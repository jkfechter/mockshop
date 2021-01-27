import {
    GET_PRODUCTS,
    POPULATE_PRODUCTS,
    FETCH_PRODUCTS_FAILURE
  } from '../actions/productsActions';
  
  const initialState = {
    products: [],
    loading: false,
    error: null
  };
  
  export default function productReducer(state = initialState, action) {
    switch(action.type) {
      case GET_PRODUCTS:
        // Mark the state as "loading" so we can show a spinner or something
        // Also, reset any errors. We're starting fresh.
        console.log('test')
        return {
          ...state,
          loading: true,
          error: null
        };
  
      case POPULATE_PRODUCTS:
        // All done: set loading "false".
        // Also, replace the items with the ones from the server
        console.log('action', action);
        return {
          ...state,
          loading: false,
          products: action.payload.products
        };
  
      case FETCH_PRODUCTS_FAILURE:
        // The request failed. It's done. So set loading to "false".
        // Save the error, so we can display it somewhere.
        // Since it failed, we don't have items to display anymore, so set `items` empty.
        //
        // This is all up to you and your app though:
        // maybe you want to keep the items around!
        // Do whatever seems right for your use case.
        return {
          ...state,
          loading: false,
          error: action.payload.error,
          products: []
        };
  
      default:
        // ALWAYS have a default case in a reducer
        return state;
    }
  }