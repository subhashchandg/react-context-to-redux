import React from 'react';
export default (props) => {
  const { product, buttonLabel, clickHandler } = props;
  return (
    <div className="product">
      <p>
        {product.name} - {product.price}
        {product.count ? `(${product.count})` : null}
      </p>
      <div className="button" onClick={clickHandler}>
        {buttonLabel}
      </div>
    </div>
  );
};
