import { Link } from "react-router-dom";

const ProductCard = ({
  product,
  visibleColumns,
}) => {
  return (
    <Link
      to={`/products/${product.id}`}
      className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1"
    >
      {/* Image */}
      <div className="h-56 bg-[#f5f7fb] flex items-center justify-center p-6">
        
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full object-contain"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        
        {/* Category */}
        {visibleColumns.category && (
          <p className="text-sm text-[#7c3aed] font-medium capitalize">
            {product.category}
          </p>
        )}

        {/* Title */}
        <h2 className="text-xl font-bold text-gray-800 mt-2 line-clamp-1">
          {product.title}
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-sm mt-2 line-clamp-2">
          {product.description}
        </p>

        {/* Bottom */}
        <div className="flex items-center justify-between mt-5">
          
          {visibleColumns.price && (
            <h3 className="text-2xl font-bold text-gray-800">
              ${product.price}
            </h3>
          )}

          {visibleColumns.rating && (
            <div className="bg-[#f3efff] text-[#7c3aed] px-3 py-1 rounded-xl text-sm font-medium">
              ⭐ {product.rating}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;