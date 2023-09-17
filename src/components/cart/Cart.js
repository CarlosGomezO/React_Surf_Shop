import { useContext } from "react";
import { CartContext } from "../cart/CartContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart } = useContext(CartContext);
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  const total = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (totalQuantity === 0) {
    return (
      <section className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold my-10">Missing Products</h1>
        <Link to="/" className="mb-10">
          <button className="bg-black text-white py-3 px-6 rounded-full text-lg font-medium hover:bg-white hover:text-black transition">
            Back
          </button>
        </Link>
      </section>
    );
  }

  return (
    <section className="container mx-auto mt-5">
      <div className="flex shadow-md my-5">
        <div className="w-[100%] bg-white px-10 py-10">
          <div className="flex justify-between border-b pb-8">
            
            <h1 className="font-semibold text-2xl">{totalQuantity} Items</h1>
          </div>
          <div className="flex mt-10 mb-5">
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
              Product Details
            </h3>
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">
              Quantity
            </h3>
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">
              Price
            </h3>
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">
              Sub-Total
            </h3>
          </div>
          {cart.map((p) => (
            <CartItem key={p.id} {...p} />
          ))}
          <Link to="/" className="inline-flex font-semibold text-black text-sm mt-10 mr-3">
            <svg className="inline mr-2 text-black w-4" viewBox="0 0 448 512">
              <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
            </svg>
            Back
          </Link>
          
          <div className="flex font-semibold justify-between py-6 text-sm uppercase">
              <span></span>
              <span>Total = {total} USD </span>
            </div>
            
            <Link to="/checkout">
              <button className="rounded-full border border-[#E5E7EB] py-3 text-base font-medium text-body-color transition hover:border-white hover:bg-black hover:text-white uppercase w-full">
                Checkout
              </button>
            </Link>
            
        </div>
        

      </div>
    </section>
  );
};

export default Cart;
