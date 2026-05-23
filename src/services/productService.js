import axios from "axios";

export const getProducts =
  async () => {
    const response =
      await axios.get(
        "https://dummyjson.com/products"
      );

    return response.data.products;
  };

export const getSingleProduct =
  async (id) => {
    const response =
      await axios.get(
        `https://dummyjson.com/products/${id}`
      );

    return response.data;
  };