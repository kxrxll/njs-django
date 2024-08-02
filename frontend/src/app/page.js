"use client";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteProduct,
  fetchProducts,
  selectProducts,
} from "../redux/productsSlice";
import NavBar from "../components/NavBar";
import Loader from "../components/Loader";

export default function Products() {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const productsStatus = useSelector((state) => state.products.status);
  useEffect(() => {
    if (productsStatus === "idle") {
      dispatch(fetchProducts());
    }
  }, [productsStatus, dispatch]);

  const onDelete = (e) => {
    dispatch(deleteProduct(e.target.dataset.id));
  };

  return (
    <div className="bg-white">
      <NavBar></NavBar>
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 p-8">
        {products[0] ? (
          products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.link}
                  alt={product.name}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <span aria-hidden="true" className="" />
                    {product.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {product.description}
                  </p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {product.price}
                </p>
                <button className="rounded-md w-24 bg-indigo-600 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  Edit
                </button>
                <button
                  onClick={onDelete}
                  data-id={product.id}
                  className="rounded-md w-24 bg-indigo-600 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
}
