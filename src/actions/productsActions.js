export function fetchProducts() {
  return dispatch => {
    dispatch(getProducts());
    return fetch('https://fakestoreapi.com/products')
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(populateProducts(json.products));
        return json.products;
      })
      .catch(error => dispatch(fetchProductsFailure(error)));
  };
}
// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const GET_PRODUCTS   = 'GET_PRODUCTS';
export const POPULATE_PRODUCTS = 'POPULATE_PRODUCTS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

export const getProducts = () => ({
  type: GET_PRODUCTS
});

export const populateProducts = products => ({
  type: POPULATE_PRODUCTS,
  payload: { products }
});

export const fetchProductsFailure = error => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: { error }
});






//const store = createStore(rootReducer, applyMiddleware(thunk));

// function GET_PRODUCTS() {
//   return fetch('https://fakestoreapi.com/products');
// }

// export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
//   const response = await client.get('/fakeApi/posts')
//   return response.posts
// })
// function POPULATE_PRODUCTS() {

// }

// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import { client } from '../../api/client'

// const initialState = []

// export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
//   const response = await client.get('/fakeApi/users')
//   return response.users
// })

// const usersSlice = createSlice({
//   name: 'users',
//   initialState,
//   reducers: {},
//   extraReducers: {
//     [fetchUsers.fulfilled]: (state, action) => {
//       return action.payload
//     },
//   },
// })

// export default usersSlice.reducer
