const ColumnToggle = ({
  visibleColumns,
  setVisibleColumns,
}) => {
  const columns = [
    "category",
    "rating",
    "price",
  ];

  const toggleColumn = (column) => {
    setVisibleColumns((prev) => ({
      ...prev,
      [column]: !prev[column],
    }));
  };

  return (
    <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 mb-6">
      
      <h3 className="font-bold text-lg mb-4 text-gray-700">
        Show / Hide Fields
      </h3>

      <div className="flex gap-4 flex-wrap">
        
        {columns.map((column) => (
          <button
            key={column}
            onClick={() =>
              toggleColumn(column)
            }
            className={`px-5 py-3 rounded-2xl transition-all capitalize
            ${
              visibleColumns[column]
                ? "bg-[#7c3aed] text-white"
                : "bg-[#f5f7fb] text-gray-700"
            }`}
          >
            {column}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ColumnToggle;