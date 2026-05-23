const Pagination = ({
  currentPage,
  totalPages,
  setCurrentPage,
}) => {
  return (
    <div className="flex justify-center mt-10 gap-3 flex-wrap">
      
      {Array.from(
        { length: totalPages },
        (_, index) => (
          <button
            key={index}
            onClick={() =>
              setCurrentPage(index + 1)
            }
            className={`w-11 h-11 rounded-2xl font-medium transition-all
            ${
              currentPage === index + 1
                ? "bg-[#7c3aed] text-white"
                : "bg-white text-gray-700 hover:bg-[#f3efff]"
            }`}
          >
            {index + 1}
          </button>
        )
      )}
    </div>
  );
};

export default Pagination;