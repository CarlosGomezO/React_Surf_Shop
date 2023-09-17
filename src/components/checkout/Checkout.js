import { useContext, useState } from "react";
import { CartContext } from "../cart/CartContext";
import {
  Timestamp,
  addDoc,
  collection,
  documentId,
  query,
  where,
  writeBatch,
  getDocs,
} from "firebase/firestore";
import { db } from "../db/firebase";
import CheckoutForm from "../checkout/CheckoutFrom";
import { Link } from "react-router-dom";

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [error, setError] = useState(null);

  const { cart, total, clearCart } = useContext(CartContext);

  const createOrder = async ({ name, phone, email }) => {
    setLoading(true);

    try {
      const objOrder = {
        buyer: { name, phone, email },
        items: cart,
        total: total,
        data: Timestamp.fromDate(new Date()),
      };

      const batch = writeBatch(db);
      const outOfStock = [];

      const ids = cart.map((prod) => prod.id);
      const productsRef = collection(db, "products");
      const productsAddedFromFirestore = await getDocs(
        query(productsRef, where(documentId(), "in", ids))
      );

      productsAddedFromFirestore.docs.forEach((doc) => {
        const dataDoc = doc.data();
        const stockDb = dataDoc.stock;
        const productAddedToCart = cart.find((prod) => prod.id === doc.id);
        const prodQuantity = productAddedToCart?.quantity;

        if (stockDb >= prodQuantity) {
          batch.update(doc.ref, { stock: stockDb - prodQuantity });
        } else {
          outOfStock.push({ id: doc.id, ...dataDoc });
        }
      });

      if (outOfStock.length === 0) {
        await batch.commit();
        const orderRef = collection(db, "orders");
        const orderAdded = await addDoc(orderRef, objOrder);
        setOrderId(orderAdded.id);
        clearCart();
      } else {
        setError("Some products are out of stock.");
      }
    } catch (error) {
      setError("An error occurred while processing your order.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      {loading ? (
        <div className="text-center">
          <h1 className="text-5xl bg-gray-200 py-4">Loading...</h1>
         
        </div>
      ) : orderId ? (
        <div className="text-center">
          <h1 className="text-4xl text-white bg-[#4f9ee3] py-14">
            Order ID: {orderId}
          </h1>
          
          <Link to="/" className="flex justify-center">
            <button className="bg-black text-white rounded-full border border-gray-400 py-5 px-8 my-10 text-lg font-medium transition hover:border-white hover:bg-white hover:text-black uppercase">
              BUY AGAIN
            </button>
          </Link>
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-5xl bg-gray-200 py-14 mb-2">Checkout</h1>
          {error && (
            <p className="text-red-500 text-lg mt-4">{error}</p>
          )}
          <CheckoutForm onConfirm={createOrder} />
        </div>
      )}
    </div>
  );
};

export default Checkout;
