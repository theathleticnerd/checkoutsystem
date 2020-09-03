import React from 'react';

export default function Cart({ cart, setCart }) {
  const getTotalSum = () => {
    return cart.reduce(
      (sum, {cost, quantity }) => sum +cost * quantity,
      0
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const setQuantity = (product, amount) => {
    const newCart = [...cart];
    newCart.find(
      (item) => item.name === product.name
    ).quantity = amount;
    setCart(newCart);
  };

  const removeFromCart = (productToRemove) => {
    setCart(
      cart.filter((product) => product !== productToRemove)
    );
  };

  return (
    <>
      <h1>Cart</h1>
      {cart.length > 0 && (
        <button className="btn btn-danger" onClick={clearCart}>Clear Cart</button>
      )}
      <div className="products">
        {cart.map((product, idx) => (
          <div className="product note" key={idx}>
            <h3>{product.name}</h3>
            <h4>${product.cost}/-</h4>
            <div className="input-group-prepend centre">
            <span className="input-group-text" id="addon-wrapping">Qty</span>
            <input
              className="textbox"
              value={product.quantity}
              onChange={(e) =>
                setQuantity(
                  product,
                  parseInt(e.target.value)
                )
              }
            />
            </div>

            <img src={product.image} className="resize"alt={product.name} />
            <button className="btn btn-outline-danger btn-lg" onClick={() => removeFromCart(product)}>
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="Totalcost">Totalcost: ${getTotalSum()}</div>
    </>
  );
}
