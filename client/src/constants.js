const env = process.env.NODE_ENV;

const API =
    env === "production"
        ? "https://brrrgrrr-ixr2.onrender.com"
        : "http://localhost:3001";

export default API;
