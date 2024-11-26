import axios from "axios";

const BASE_API = "https://innowide-server.onrender.com";


const UserService = {
  contactUs: async (data) => {
    try {
      const response = await axios.post(`${BASE_API}/contact-us`, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  getInTouch: async (data) => {
    try {
      const response = await axios.post(`${BASE_API}/get-in-touch`, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  emailSent: async (email) => {
    try {
      const response = await axios.post(`${BASE_API}/reach-out`, email);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  demo: async (data) => {
    try {
      const response = await axios.post(`${BASE_API}/demo`, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  login: async (userName, password) => {
    try {
      const response = await axios.post(`${BASE_API}/login`, {
        userName: userName,
        password: password,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  postblog: async (data) => {
    try {
      const token = localStorage.getItem("authToken");
      console.log(token);
      const response = await axios.post(`${BASE_API}/blogs`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: token ? `Bearer ${token}` : "",
        },
      });
      return response.data;
    } catch (error) {
      console.error(
        "Error posting blog:",
        error.response?.data || error.message
      );
      throw error;
    }
  },
  postblogget: async () => {
    try {
      const response = await axios.get(`${BASE_API}/blogs`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  deleteBlog: async (id) => {
    try {
      const token = localStorage.getItem("authToken");
      console.log("Deleting blog with ID:", id);
      const response = await axios.delete(`${BASE_API}/blogs/${id}`, {
        headers: {
          "Content-Type": "application/json", 
          Authorization: token ? `Bearer ${token}` : "",
        },
      });
      return response.data;
    } catch (error) {
      console.error(
        "Error deleting blog:",
        error.response?.data || error.message
      );
      throw error;
    }
  },
};

export default UserService;
