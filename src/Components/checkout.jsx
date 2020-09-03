import React from 'react';

export default function Cart({ cart, setCart }) {
  const getTotalSum = () => {
    return cart.reduce(
      (sum, { cost, quantity }) => sum + cost * quantity,
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
      <h1>Checkout</h1>
      <div className="Totalcost">Total Cost: ${getTotalSum()}</div>
      <form class="p-2 checkout-text">
          <div class="checkout-space input-group flex-nowrap">
          <div class="input-group-prepend">
          <span class="input-group-text" id="addon-wrapping">First Name</span>
          </div>
          <input type="text" class="form-control" placeholder="First Name" aria-label="Username" aria-describedby="addon-wrapping"/>
          </div>

          <div class="checkout-space input-group flex-nowrap">
          <div class="input-group-prepend">
          <span class="input-group-text" id="addon-wrapping">Last Name</span>
          </div>
          <input type="text" class="form-control" placeholder="Last Name" aria-label="Last Name" aria-describedby="addon-wrapping"/>
          </div>

          <div class="checkout-space input-group flex-nowrap">
          <div class="input-group-prepend">
          <span class="input-group-text" id="addon-wrapping">Address</span>
          </div>
          <input type="text" class="form-control" placeholder="Address" aria-label="Address" aria-describedby="addon-wrapping"/>
          </div>

          <div class="checkout-space input-group flex-nowrap">
          <div class="input-group-prepend">
          <span class="input-group-text" id="addon-wrapping">Card Number</span>
          </div>
          <input type="text" class="form-control" placeholder="Card Number" aria-label="Card Number" aria-describedby="addon-wrapping"/>
          </div>

          <div class="checkout-space input-group flex-nowrap">
          <div class="input-group-prepend">
          <span class="input-group-text" id="addon-wrapping">CVV</span>
          </div>
          <input type="text" class=" cvv form-control" placeholder="CVV" aria-label="CVV" aria-describedby="addon-wrapping"/>
          </div>
          <button class="btn btn-success checkout-centre" type="submit">Purchase</button>
     </form>
    </>
  );
}
