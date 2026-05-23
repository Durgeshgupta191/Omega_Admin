import {
  useEffect,
  useMemo,
  useState,
  useCallback,
} from "react";

import {
  useSearchParams,
} from "react-router-dom";

import ProductCard from "../components/products/ProductCard";
import ProductSkeleton from "../components/products/ProductSkeleton";
import ProductFilters from "../components/products/ProductFilters";
import Pagination from "../components/products/Pagination";
import ColumnToggle from "../components/products/ColumnToggle";

import toast from "react-hot-toast";

import useDebounce from "../hooks/useDebounce";

import {
  getProducts,
} from "../services/productService";

const ITEMS_PER_PAGE = 8;

const Products = () => {
  const [products, setProducts] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  const [searchParams, setSearchParams] =
    useSearchParams();

  // URL States
  const [search, setSearch] =
    useState(
      searchParams.get("search") ||
        ""
    );

  const [category, setCategory] =
    useState(
      searchParams.get(
        "category"
      ) || ""
    );

  const [sort, setSort] =
    useState(
      searchParams.get("sort") ||
        ""
    );

  const [currentPage, setCurrentPage] =
    useState(1);

  // Column Visibility
  const [
    visibleColumns,
    setVisibleColumns,
  ] = useState({
    category: true,
    rating: true,
    price: true,
  });

  // Debounced Search
  const debouncedSearch =
    useDebounce(search);

  // Fetch Products
  const fetchProducts =
    useCallback(async () => {
      try {
        setLoading(true);

        const data =
          await getProducts();

        setProducts(data);

        toast.success(
          "Products updated",
          {
            duration: 1000,
          }
        );
      } catch (err) {
        setError(
          "Failed to fetch products"
        );
      } finally {
        setLoading(false);
      }
    }, []);

  // Initial Fetch
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // Polling Every 10s
  useEffect(() => {
    const interval =
      setInterval(() => {
        fetchProducts();
      }, 10000);

    return () =>
      clearInterval(interval);
  }, [fetchProducts]);

  // URL Sync
  useEffect(() => {
    setSearchParams({
      search: search || "",
      category: category || "",
      sort: sort || "",
    });
  }, [
    search,
    category,
    sort,
    setSearchParams,
  ]);

  // Categories
  const categories = useMemo(() => {
    return [
      ...new Set(
        products.map(
          (product) =>
            product.category
        )
      ),
    ];
  }, [products]);

  // Filter + Sort
  const filteredProducts =
    useMemo(() => {
      let updatedProducts = [
        ...products,
      ];

      // Search
      if (debouncedSearch) {
        updatedProducts =
          updatedProducts.filter(
            (product) =>
              product.title
                .toLowerCase()
                .includes(
                  debouncedSearch.toLowerCase()
                )
          );
      }

      // Category
      if (category) {
        updatedProducts =
          updatedProducts.filter(
            (product) =>
              product.category ===
              category
          );
      }

      // Sorting
      switch (sort) {
        case "price-low":
          updatedProducts.sort(
            (a, b) =>
              a.price - b.price
          );
          break;

        case "price-high":
          updatedProducts.sort(
            (a, b) =>
              b.price - a.price
          );
          break;

        case "rating":
          updatedProducts.sort(
            (a, b) =>
              b.rating - a.rating
          );
          break;

        case "name":
          updatedProducts.sort(
            (a, b) =>
              a.title.localeCompare(
                b.title
              )
          );
          break;

        default:
          break;
      }

      return updatedProducts;
    }, [
      products,
      debouncedSearch,
      category,
      sort,
    ]);

  // Pagination
  const totalPages = Math.ceil(
    filteredProducts.length /
      ITEMS_PER_PAGE
  );

  const paginatedProducts =
    filteredProducts.slice(
      (currentPage - 1) *
        ITEMS_PER_PAGE,
      currentPage *
        ITEMS_PER_PAGE
    );

  return (
    <div>
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-5xl font-bold text-[#7c3aed]">
          Product Management
        </h1>

        <p className="text-gray-500 mt-3">
          Manage and monitor your
          products
        </p>
      </div>

      {/* Filters */}
      <ProductFilters
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        sort={sort}
        setSort={setSort}
        categories={categories}
      />

      {/* Column Toggle */}
      <ColumnToggle
        visibleColumns={
          visibleColumns
        }
        setVisibleColumns={
          setVisibleColumns
        }
      />

      {/* Error */}
      {error && (
        <div className="bg-red-100 text-red-500 p-4 rounded-2xl mb-6">
          {error}
        </div>
      )}

      {/* Empty */}
      {!loading &&
        filteredProducts.length ===
          0 && (
          <div className="bg-white rounded-3xl p-10 text-center">
            <h2 className="text-2xl font-bold text-gray-700">
              No Products Found
            </h2>

            <p className="text-gray-400 mt-3">
              Try changing filters
            </p>
          </div>
        )}

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        
        {loading
          ? Array.from({
              length: 8,
            }).map(
              (_, index) => (
                <ProductSkeleton
                  key={index}
                />
              )
            )
          : paginatedProducts.map(
              (product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  visibleColumns={
                    visibleColumns
                  }
                />
              )
            )}
      </div>

      {/* Pagination */}
      {!loading &&
        filteredProducts.length >
          0 && (
          <Pagination
            currentPage={
              currentPage
            }
            totalPages={
              totalPages
            }
            setCurrentPage={
              setCurrentPage
            }
          />
        )}
    </div>
  );
};

export default Products;