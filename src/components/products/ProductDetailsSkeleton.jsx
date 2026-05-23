const ProductDetailsSkeleton = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 animate-pulse">
      
      {/* Left */}
      <div className="bg-white rounded-3xl h-125" />

      {/* Right */}
      <div className="space-y-5">
        <div className="h-6 w-32 bg-gray-200 rounded" />

        <div className="h-12 w-full bg-gray-200 rounded" />

        <div className="h-24 w-full bg-gray-200 rounded" />

        <div className="h-10 w-40 bg-gray-200 rounded" />

        <div className="h-20 w-full bg-gray-200 rounded" />

        <div className="h-14 w-44 bg-gray-200 rounded-2xl" />
      </div>
    </div>
  );
};

export default ProductDetailsSkeleton;