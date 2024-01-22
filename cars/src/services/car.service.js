import axios from "axios";

export const CarService = {
  async getAll() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    return response.data;
  },

  async getById(id) {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );

    return response.data;
  },

  async create(data) {
    return axios.post("https://jsonplaceholder.typicode.com/posts", data);
  },
};
