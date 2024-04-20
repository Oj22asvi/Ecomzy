import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div classsName="flex">
    
      {
    cart.length > 0  ? 
    (<div>


      <div className="flex flex-col border-bottom border-black items-center justify-between 
      gap-3  ">
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>
      <div className="">

        <div className="border border-black">
          <div className="text-green-600 font-semibold">Your Cart</div>
          <div className="text-green-600 font-semibold">Summary</div>
          <p>
            <span>Total Items: {cart.length}</span>
          </p>
        </div>

        <div>
          <p className="text-blue-800 font-semibold">Total Amount: ${totalAmount}</p>
        </div>

      </div>


    </div>) : 
    (<div>
      <h1>Cart Empty</h1>
      <Link to={"/"}>
        <button>
          Shop Now
        </button>
      </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;
