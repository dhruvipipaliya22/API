let productUrl = "http://localhost:3000/products";

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


export default productapi
