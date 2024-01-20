import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "../components/productItem";
import { clearCart } from "../redux/shopStore";

const Shop = () => {
  const { products, cart } = useSelector((state) => state.shop);
  const dispatch = useDispatch();

  return (
    <>
      <h1>
        Welcome to Your Favorite shop{" "}
        <span>{cart.length > 0 ? cart.length : <h6>Cart is empty</h6>}</span>
        <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
      </h1>
      <div className="products">
        {products.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </div>
    </>
  );
};

export default Shop;
