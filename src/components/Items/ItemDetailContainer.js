import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemCount from "../items/ItemCount";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../db/firebase";
import { PacmanLoader } from 'react-spinners';


const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  




  useEffect(() => {
    setLoading(true);

    const docDetail = doc(db, "Products", id);

    getDoc(docDetail)
      .then((response) => {
        const data = response.data();
        const productAdapted = { id: response.id, ...data };
        setProduct(productAdapted);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);



  if (loading) {
    return (
      <>
        <h1 className="text-center py-4 text-5xl bg-[#F3F4F6]">
          Loading...
        </h1>
        <div className="my-5 flex justify-center">
          <PacmanLoader color="#36D7B7" size={50} />
        </div>
      </>
    );
  } else {
    return (
      <div className="container_general bg-white">
        {product ? (
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <ItemCount product={product} />
            
           
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
};

export default ItemDetailContainer;
