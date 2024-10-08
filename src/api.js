import { axiosClient } from "./axiosClient";

export const clientApi = {
  async getAuthorInfo(authorId) {
    return axiosClient
      .get("/author/" + authorId)
      .then(({ data }) => data)
      .catch((err) => console.log(err));
  },
  async getCategories() {
    return axiosClient
      .get("/categories")
      .then(({ data }) => data)
      .catch((err) => console.log(err));
  },
  async getArticles(categoryId) {
    return axiosClient
      .get("/category/" + categoryId)
      .then(({ data }) => data)
      .catch((err) => console.log(err));
  },

  async getCategoryById(categoryId) {
    const res = await this.getCategories();
    return res.find(({ id }) => id === categoryId);
  },
};
