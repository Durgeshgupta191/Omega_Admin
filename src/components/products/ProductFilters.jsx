import { FiSearch } from "react-icons/fi";

const ProductFilters = ({
  search,
  setSearch,
  category,
  setCategory,
  sort,
  setSort,
  categories,
}) => {
  return (
    <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 mb-8">
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        
        {/* Search */}
        <div className="flex items-center gap-3 bg-[#f5f7fb] px-4 rounded-2xl">
          <FiSearch className="text-gray-400" />

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="w-full bg-transparent outline-none py-3"
          />
        </div>

        {/* Category */}
        <select
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
          className="bg-[#f5f7fb] rounded-2xl px-4 py-3 outline-none"
        >
          <option value="">All Categories</option>

          {categories.map((cat) => (
            <option key={cat}>
              {cat}
            </option>
          ))}
        </select>

        {/* Sort */}
        <select
          value={sort}
          onChange={(e) =>
            setSort(e.target.value)
          }
          className="bg-[#f5f7fb] rounded-2xl px-4 py-3 outline-none"
        >
          <option value="">Sort By</option>

          <option value="price-low">
            Price: Low to High
          </option>

          <option value="price-high">
            Price: High to Low
          </option>

          <option value="rating">
            Rating
          </option>

          <option value="name">
            Name
          </option>
        </select>

        {/* Result Count */}
        <div className="flex items-center justify-center bg-[#f3efff] rounded-2xl text-[#7c3aed] font-semibold">
          Products Panel
        </div>
      </div>
    </div>
  );
};

export default ProductFilters;