import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Card from "./Card/index";
import CartItem from "./Cartitem";
import { addToCart, getCartItems, removeCartItem } from "../../../Redux/Actions/cartActions";
import PriceDetails from "./PriceDetails";
import OrderSummery from '../../Orders/OrderSummery';
import "./style.css";
import MaterialButton from "./Button";
import { Button } from '@material-ui/core'
import Navbar from '../Nav/Navbar'

// /*
// Before Login
// Add product to cart
// save in localStorage
// when try to checkout ask for credentials and 
// if logged in then add products to users cart database from localStorage
// */

const CartPage = (props) => {
  const cart = useSelector((state) => state.cart);
  const auth = localStorage.getItem('isAuthenticated')
  // const cartItems = cart.cartItems;
  const [cartItems, setCartItems] = useState(cart.cartItems);
  const dispatch = useDispatch();

  useEffect(() => {

    setCartItems(cart.cartItems);


  }, [cart.cartItems]);

  useEffect(() => {
    if (auth) {
      dispatch(getCartItems());
      console.log('lalall')
    }
  }, [auth]);

  const onQuantityIncrement = (_id, qty) => {
    console.log({ _id, qty });
    const { title, price, img } = cartItems
    console.log("cart id", cartItems)

    dispatch(addToCart({ _id, title, img, price }, 1));
  };

  const onQuantityDecrement = (_id, qty) => {

    const { title, price, img } = cartItems[_id];
    dispatch(addToCart({ _id, title, price }, -1));
  };

  const onRemoveCartItem = (_id) => {
    dispatch(removeCartItem({ productId: _id }));
  };

  if (props.onlyCartItems) {
    return (
      <>
        {Object.keys(cartItems).map((key, index) => (
          <CartItem
            key={index}
            cartItem={cartItems[key]}
            onQuantityInc={onQuantityIncrement}
            onQuantityDec={onQuantityDecrement}
          />
        ))}
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="cartContainer" style={{ alignItems: "flex-start" }}>

        <Card
          headerLeft={`My Cart`}
          headerRight={<div>Deliver to address</div>}
          style={{
            width: "calc(100% - 160px)",
            overflow: "hidden",
            '@media (max-width: 768px)': {
              display: 'none',
            },

          }}


        >
          {Object.keys(cartItems).map((key, index) => (
            <CartItem
              key={index}
              cartItem={cartItems[key]}
              onQuantityInc={onQuantityIncrement}
              onQuantityDec={onQuantityDecrement}
              onRemoveCartItem={onRemoveCartItem}
            />
          ))}

          <div
            style={{
              width: "100%",
              display: "flex",
              background: "#ffffff",
              justifyContent: "flex-end",
              boxShadow: "0 0 10px 10px #eee",
              padding: "10px 0",
              boxSizing: "border-box",
            }}
          >
            <div style={{ width: "250px" }}>
              <Button
                style={{
                  // fontFamily: `Playfair Display, serif`,
                  // width: '100%',
                  display: 'inline-block',
                  padding: '15px',
                  fontSize: '15px',
                  color: '#FFFFFF',
                  backgroundColor: '#fac9bf',
                  outline: 'none',
                  boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.2)',
                  border: 'none',
                  cursor: 'pointer',
                  borderRadius: '2px'
                }}
                // className='button'
                title="PLACE ORDER"
                onClick={() => props.history.push(`/orderSummary`)}
              >Place Order</Button>

            </div>
          </div>


        </Card>



        <PriceDetails
          totalItem={Object.keys(cart.cartItems).reduce(function (qty, key) {
            return qty + cart.cartItems[key].qty;
          }, 0)}
          totalPrice={Object.keys(cart.cartItems).reduce((totalPrice, key) => {
            const { price, qty } = cart.cartItems[key];
            return totalPrice + price * qty;
          }, 0)}
        />


      </div>
    </>
  );
};
export default CartPage;