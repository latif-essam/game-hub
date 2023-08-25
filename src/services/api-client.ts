import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "85d8a5c7f64549d6b0d2ade6205dcc27",
  },
});
