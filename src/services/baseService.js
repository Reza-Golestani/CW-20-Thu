import axios from "axios";

const BASE_URL = "http://localhost:4100"
export const http = axios.create({
baseURL:BASE_URL
})