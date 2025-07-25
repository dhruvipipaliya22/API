let cartUrl = "http://localhost:3000/users";

const cartapi = {
  get: async () => {
    const user = JSON.parse(localStorage.getItem("userData"));
    if (!user || !user.id) {
      console.error("User not found in localStorage.");
      return []; // fallback array
    }

    const res = await fetch(`${cartUrl}/${user.id}`);
    const data = await res.json();

    return Array.isArray(data.cart) ? data.cart : [];
  },

  patch: async (updatedCart) => {
    const user = JSON.parse(localStorage.getItem("userData"));
    if (!user || !user.id) {
      console.error("User not found in localStorage for patch.");
      return;
    }

    await fetch(`${cartUrl}/${user.id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ cart: updatedCart }),
    });
  }
};

export default cartapi;
