const env = process.env.NODE_ENV;

const API =
    env === "production"
        ? "https://brrrgrrr-server.onrender.com"
        : "http://localhost:3001";

export default API;
