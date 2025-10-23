import API from "./axiosInstance";

// get user
export const getUserByUsername = async (username) => {
  const res = await API.get("/users", {
    params: { username },
  });
  return res.data;
};

// ambil user
export const registerUser = async (data) => {
  const res = await API.post("/users", data);
  return res.data;
};

// update user pake id
export const updateUser = async (id, data) => {
  const res = await API.put(`/users/${id}`, data);
  return res.data;
};

// delete 
export const deleteUser = async (id) => {
    const response = await API.delete(`/users/${id}`);
    return response.data;
  };