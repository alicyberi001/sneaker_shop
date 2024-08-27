export const urls = {
  auth: {
    login: "/auth/login",
    signup: "/auth/signup",
  },
  user: "/user",
  task: {
    new: "/task",
    list: "/task",
    delete: (id) => `/task/${id}`,
    done: (id) => `/task/done/${id}`,
    inprogress: (id) => `/task/inprogress/${id}`,
  },
};
