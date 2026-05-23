import {
  useEffect,
  useState,
} from "react";

import {
  useParams,
  Link,
} from "react-router-dom";

import {
  FiArrowLeft,
  FiStar,
} from "react-icons/fi";

import ProductGallery from "../components/products/ProductGallery";

import ProductDetailsSkeleton from "../components/products/ProductDetailsSkeleton";

import {
  getSingleProduct,
} from "../services/productService";

const ProductDetails = () => {
  const { id } = useParams();

  const [product, setProduct] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  // Fetch Product
  const fetchProduct =
    async () => {
      try {
        setLoading(true);

        const data =
          await getSingleProduct(id);

        setProduct(data);
      } catch (err) {
        setError(
          "Failed to fetch product"
        );
      } finally {
        setLoading(false);
      }
    };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  // Loading
  if (loading) {
    return (
      <ProductDetailsSkeleton />
    );
  }

  // Error
  if (error) {
    return (
      <div className="bg-red-100 text-red-500 p-5 rounded-3xl">
        {error}
      </div>
    );
  }

  return (
    <div>
      {/* Back */}
      <Link
        to="/products"
        className="inline-flex items-center gap-2 text-[#7c3aed] font-medium mb-8"
      >
        <FiArrowLeft />

        Back to Products
      </Link>

      {/* Main */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* Left */}
        <div className="bg-white rounded-3xl p-8 shadow-sm">
          
          <ProductGallery
            images={
              product?.images || []
            }
          />
        </div>

        {/* Right */}
        <div className="bg-white rounded-3xl p-8 shadow-sm">
          
          {/* Category */}
          <div className="inline-block bg-[#f3efff] text-[#7c3aed] px-4 py-2 rounded-2xl text-sm font-semibold capitalize">
            {product?.category}
          </div>

          {/* Title */}
          <h1 className="text-5xl font-bold text-gray-800 mt-6 leading-tight">
            {product?.title}
          </h1>

          {/* Brand */}
          <p className="text-gray-500 text-lg mt-3">
            Brand:{" "}
            
            <span className="font-semibold text-gray-700">
              {product?.brand}
            </span>
          </p>

          {/* Rating + Stock */}
          <div className="flex items-center gap-3 mt-5 flex-wrap">
            
            {/* Rating */}
            <div className="flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-2xl">
              
              <FiStar />

              <span className="font-semibold">
                {product?.rating}
              </span>
            </div>

            {/* Stock */}
            <div
              className={`px-4 py-2 rounded-2xl font-medium
              
              ${
                product?.stock > 0
                  ? "bg-green-100 text-green-600"
                  : "bg-red-100 text-red-500"
              }`}
            >
              {product?.stock > 0
                ? `${product?.stock} In Stock`
                : "Out of Stock"}
            </div>
          </div>

          {/* Price */}
          <div className="mt-8">
            
            <h2 className="text-6xl font-bold text-[#7c3aed]">
              ${product?.price}
            </h2>
          </div>

          {/* Description */}
          <div className="bg-[#f8f8fb] rounded-3xl p-6 mt-8 border border-gray-100">
            
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Description
            </h3>

            <p className="text-gray-500 leading-8">
              {product?.description}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-8">
            
            <button className="bg-[#7c3aed] text-white px-8 py-4 rounded-2xl hover:opacity-90 transition-all font-semibold">
              Edit Product
            </button>

            <button className="bg-white border border-gray-200 text-gray-700 px-8 py-4 rounded-2xl hover:bg-gray-50 transition-all font-semibold">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;