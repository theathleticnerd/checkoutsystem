import React, { useState } from 'react';
import Webcam from 'react-webcam';
import data from './data';
const HOME_GARDEN = 'Home & Garden';
const UTILITY = 'Utilities';
const CHAIRS = 'Chair';
const videoConstraints = {
  width: 780,
  height: 720,
  facingMode: "user"
};


export default function Products({ setCart, cart }) {
  const [products] = useState([
    {
      category: UTILITY,
      name: 'AA Battery',
      cost: 2.99,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5-QAul_NfAs-s0XW9M087xWyPOGWvbfYjmqSl0QXabZRSYoid47i7kISiAteyIh0YOci5mtQ&usqp=CAc',
    },
    {
      category: HOME_GARDEN,
      name: 'Blanket',
      cost: 19.99,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSpwdYDmUL_ZEqhLV7ZWRdQAU7DGcGaxtCt7SrTlL9umrQs2Un7rj9Nbb9Vq01RtEfA0eAVmdt-&usqp=CAc',
    },
    {
        category: CHAIRS,
        name: 'Round Chair',
        cost: 4000,
        image:
        'https://i5.walmartimages.com/asr/a644f24c-fa53-42ed-849c-d91238261cf1_1.b7ba6d4fae39e27cbacfd07ad898772c.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff',
    },
  ]);

  const addToCart = (product) => {
    let newCart = [...cart];
    let itemInCart = newCart.find(
      (item) => product.name === item.name
    );
    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      itemInCart = {
        ...product,
        quantity: 1,
      };
      newCart.push(itemInCart);
    }
    setCart(newCart);
  };

  const [category, setCategory] = useState(HOME_GARDEN);

  const getProductsInCategory = () => {
    return products.filter(
      (product) => product.category === category
    );
  };

  return (
    <>
      <div className="productss">
      <h1>Products</h1>
      </div>

      <table>
      <tr>
        <th><Webcam audio={false} videoConstraints={videoConstraints}/></th>
        <th>
        <div className="note note1">
        <h1>Product Name</h1>
        <p>Cost</p>
        <button className="btn btn-lg btn-success aright" >Add to Cart</button>
        </div>
        </th>
        </tr>
      </table>

      <div className="category"><p>Select a category</p></div>
      <div className="option">
      <select class="btn btn-info btn-secondary dropdown-toggle" onChange={(e) => setCategory(e.target.value)}>
        <option value={HOME_GARDEN}>{HOME_GARDEN}</option>
        <option value={UTILITY}>{UTILITY}</option>
        <option value={CHAIRS}>{CHAIRS}</option>
      </select>
      </div>
      <div className="products">
        {getProductsInCategory().map((product, idx) => (
          <div className="product note" key={idx}>
            <h3>{product.name}</h3>
            <h4>${product.cost}</h4>
            <img src={product.image} class="resize" alt={product.name} />
            <br/>
            <button className="btn btn-primary" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
        </div>
    </>
  );
}
