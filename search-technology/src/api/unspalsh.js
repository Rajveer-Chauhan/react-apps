import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID RZMKOJ_WP7BEdvH1JmZ1I99gV5gM8aG5I4fcOYvbTLQ",
  },
});
