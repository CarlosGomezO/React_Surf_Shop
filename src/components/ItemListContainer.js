import React, { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';

function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryid } = useParams(); 
  useEffect(() => {
    const fetchData = async () => {
      await setTimeout(async () => {
        let url = 'https://fakestoreapi.com/products';
        if (categoryid) {
          url = `https://fakestoreapi.com/products/category/${categoryid}`;
        }
        
        const response = await fetch(url);
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      }, 2000);
    };

    fetchData();
  }, [categoryid]);

  return (
    <div className="container_general bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          {greeting}
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            products.map((product) => (
              <div key={product.id} className="group relative bg-gray-100 p-4 rounded-lg">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-around">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <NavLink to={`/item/${product.id}`} className="hover:text-blue-500">
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.title}
                      </NavLink>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                    <button className="bg-[#4f9ee3] text-white px-4 py-1 rounded-full">Details</button>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    ${product.price}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemListContainer;
