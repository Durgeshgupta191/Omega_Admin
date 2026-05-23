export const calculateAnalytics = (products) => {
  // Total products
  const totalProducts = products.length;

  // Average rating
  const averageRating =
    (
      products.reduce(
        (acc, item) => acc + item.rating,
        0
      ) / totalProducts
    ).toFixed(1);

  // Total inventory value
  const inventoryValue =
    products.reduce(
      (acc, item) =>
        acc + item.price * item.stock,
      0
    );

  // Categories
  const categoryMap = {};

  products.forEach((product) => {
    categoryMap[product.category] =
      (categoryMap[product.category] || 0) +
      1;
  });

  const categoryData = Object.entries(
    categoryMap
  ).map(([name, value]) => ({
    name,
    value,
  }));

  // Rating distribution
  const ratingData = products.map(
    (product) => ({
      name: product.title.slice(0, 10),
      rating: product.rating,
    })
  );

  // Stock data
  const stockData = products.map(
    (product) => ({
      name: product.title.slice(0, 10),
      stock: product.stock,
    })
  );

  return {
    totalProducts,
    averageRating,
    inventoryValue,
    categoryData,
    ratingData,
    stockData,
  };
};