import axios from "axios";

// const ORIGIN = import.meta.env.VITE_SERVER_ORIGIN || "https://cses.iitism.ac.in";
const ORIGIN = "http://localhost:5000";

const axiosInstance = axios.create({
  baseURL: `${ORIGIN}/api`,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const { response } = error;
    if (response) {
      const { data } = response;

      if (data.errorCode === "NOT_AUTHORIZED") {
        window.localStorage.clear("token");
      }
      return {
        data: {
          success: false,
          message: data.message || "An error occurred",
        },
      };
    }
    return {
      data: {
        success: false,
        message: "Server error",
      },
    };
  }
);

export default axiosInstance;
