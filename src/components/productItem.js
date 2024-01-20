import React from "react";
import { addToCart, removeFromCart, deleteItem } from "../redux/shopStore";
import { useDispatch } from "react-redux";

const ProductItem = (props) => {
  const dispatch = useDispatch();
  const { id, title, price } = props.product;
  return (
    <div className="product-item">
      <h3>{title}</h3>
      <h4>{price}</h4>
      <div className="action-buttons">
        <button onClick={() => dispatch(addToCart(id))}>Add to Cart</button>
        <button onClick={() => dispatch(removeFromCart(id))}>
          Remome from Cart
        </button>
      </div>
      <button className="delete" onClick={() => deleteItem(id)}>
        Remove
      </button>
    </div>
  );
};

export default ProductItem;
