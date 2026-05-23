const ChartCard = ({
  title,
  children,
}) => {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
      
      <h3 className="text-2xl font-bold text-gray-800 mb-6">
        {title}
      </h3>

      {children}
    </div>
  );
};

export default ChartCard;