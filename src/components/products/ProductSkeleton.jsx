const ProductSkeleton = () => {
  return (
    <div className="bg-white rounded-3xl overflow-hidden animate-pulse border border-gray-100">
      
      <div className="h-56 bg-gray-200" />

      <div className="p-5">
        <div className="h-4 bg-gray-200 rounded w-24" />

        <div className="h-6 bg-gray-200 rounded w-full mt-4" />

        <div className="h-4 bg-gray-200 rounded w-full mt-3" />

        <div className="h-4 bg-gray-200 rounded w-2/3 mt-2" />

        <div className="flex justify-between mt-6">
          <div className="h-8 w-20 bg-gray-200 rounded" />

          <div className="h-8 w-16 bg-gray-200 rounded" />
        </div>
      </div>
    </div>
  );
};

export default ProductSkeleton;