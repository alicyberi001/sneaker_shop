export const urls = {
  auth: {
    login: "/auth/login",
    signup: "/auth/signup",
  },
  user : "/user",
  sneaker: "/sneaker",
  brands: "/sneaker/brands",
  item: (id) => `/sneaker/item/${id}`,
};
