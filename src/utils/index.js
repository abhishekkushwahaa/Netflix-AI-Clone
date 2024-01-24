import axios from "axios";
export const moviesAPI = await axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: import.meta.env.VITE_TMDB_API_KEY,
    language: "en-US",
  },
});

export const fetchToken = async () => {
  try {
    const { data } = await moviesAPI.get("/authentication/token/new");
    const token = data.request_token;
    if (data.success) {
      localStorage.setItem("request_token", token);
      window.location.href = `https://www.themoviedb.org/authenticate/${token}?redirect_to=${window.location.origin}/approved`;
    }
  } catch (error) {
    console.log("Something went wrong while fetching token");
  }
};

export const fetchSessionId = async () => {
  const token = localStorage.getItem("request_token");
  if (token) {
    try {
      const {
        data: { session_id },
      } = await moviesAPI.post("/authentication/session/new", {
        request_token: token,
      });
      localStorage.setItem("session_id", session_id);
      return session_id;
    } catch (error) {
      console.log("Something went wrong while fetching session id");
    }
  }
};
