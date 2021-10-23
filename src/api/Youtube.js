import axios from "axios";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",

  params: {
    part: "snippet,id",
    maxResults: "20",
    key: "AIzaSyC_e7RP-Rz03JudUngO9fZHNOTiD-VavoE",
    order: "date",
  },
});