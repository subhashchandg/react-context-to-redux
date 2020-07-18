import React from 'react';
import Product from './product';
import { connect } from 'react-redux';

const mapStateToProps = (store) => ({
  cartItems: store.cartItems,
  products: store.products,
});

const mapDispatchToProps = (dispatch) => ({
  addToCartHandler: (id) => dispatch({ type: 'ADD_TO_CART', id: id }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  React.memo((props) => {
    const { products, cartItems, addToCartHandler } = props;

    return (
      <div className="product-container">
        {products.map((product) => (
          <Product
            product={product}
            buttonLabel="Add to cart"
            clickHandler={addToCartHandler.bind(this, product.id)}
          />
        ))}
      </div>
    );
  })
);
