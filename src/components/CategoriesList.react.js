import React from "react";
import { connect } from "react-redux";
import { getProducts } from "../actions/productsActions";

class CategoriesList extends React.Component {
  componentDidMount() {
    this.props.dispatch(getProducts());
  }

  render() {
    const { error, loading, products } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <ul>
        {products.map(product =>
          <li key={product.id}>{product.title}</li>
        )}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products.title,
  loading: state.products.loading,
  error: state.products.error
});

export default connect(mapStateToProps)(CategoriesList);