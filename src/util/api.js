const isDevelopment = process.env.NODE_ENV === "development";

export const DOMAIN = isDevelopment
    ? "http://localhost:3030"
    : "https://fbl-server.onrender.com";
