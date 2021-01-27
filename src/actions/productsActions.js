export function fetchProducts() {
  return dispatch => {
    dispatch(getProducts());
    return fetch("https://fakestoreapi.com/products")
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        console.log('json test', json);
        dispatch(populateProducts(json));
        return json;
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