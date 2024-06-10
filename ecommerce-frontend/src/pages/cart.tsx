import { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc";
import CartItem from "../components/cart-item";
import { Link } from "react-router-dom";

const cartItems = [

  {
    productId : "zhcuhbv",
    photo : "https://www.apple.com/newsroom/images/product/mac/standard/Apple_MacBook-Pro_14-16-inch_10182021_big.jpg.large.jpg",
    name : "Macbook",
    price: 80000,
    quantity: 4,
    stock : 10,
  }

];

const subtotal = 4000;
const tax =Math.round( subtotal * .018);
const shippingCharges = 200;
const discount = 300;
const total = subtotal + tax  + shippingCharges;

const cart = () => {

  const[couponCode,setCouponCode] = useState<string>("");
  const[isvalidCouponCode,setIsvalidCouponCode] = useState<boolean>(false);

  useEffect(() => {

    const timeOutId = setTimeout(() => {
      if(Math.random() > 0.5) setIsvalidCouponCode(true); else setIsvalidCouponCode(false); 
    }, 1000);

    return() => {
      clearTimeout(timeOutId);
      setIsvalidCouponCode(false); 
    }
  },[couponCode])

  return (
    <div className="cart">

<main>
  {
    cartItems.length > 0 ? 
      cartItems.map((i, idx) => <CartItem key={idx} cartItem={i} />) 
      : 
      <h1>No items added</h1>
  }
</main>


      <aside>

      <p>SubTotal: ₹{subtotal}</p>
      <p>Shipping Charges: ₹{shippingCharges}</p>
      <p>Tax: ₹{tax}</p>

      <p>
        Discount: <em className="red"> - ₹{discount} </em>
      </p>

    <p>
      <b>
      Total: ₹{total}
      </b>
    </p>

    <input type="text" value={couponCode} placeholder="Have A Coupon?" onChange={(e)=>setCouponCode(e.target.value)} />

    {couponCode && (isvalidCouponCode? (<span className="green">
          ₹{discount} off using the <code>{couponCode}</code>
      </span>) :
      (<span className="red">
        Invalid Coupon <VscError/>
      </span>
    ))}

    {
      cartItems.length > 0 &&
      <Link to="/shipping" > CheckOut</Link> 
    }

      </aside>
    </div>
  )
}

export default cart
