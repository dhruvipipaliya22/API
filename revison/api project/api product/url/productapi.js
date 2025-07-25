let productUrl = "http://localhost:3000/products";
let cartUrl = "http://localhost:3000/cart";

const productapi = {
  get: async () => {
    const req = await fetch(productUrl);
    const res = await req.json();
    return res;
  },
  post: async (data) => {
    await fetch(productUrl, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    });
  },
  delete: async (id) => {
    await fetch(`${productUrl}/${id}`, {
      method: "DELETE",
    });
  },
  patch: async (id, data) => {
    await fetch(`${productUrl}/${id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    });
  },
};

const cartapi = {
  get: async () => {
    const req = await fetch(cartUrl);
    const res = await req.json();
    return res;
  },
  post: async (data) => {
    await fetch(cartUrl, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    });
  },
  delete: async (id) => {
    await fetch(`${cartUrl}/${id}`, {
      method: "DELETE",
    });
  },
  patch: async (id, data) => {
    await fetch(`${cartUrl}/${id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    });
  },
};

export { productapi, cartapi };
