import axios from "axios";

const apiUrl = "/data/products.json";

function getProducts() {
    const products = axios(apiUrl);
    return products;
};

export default getProducts;
