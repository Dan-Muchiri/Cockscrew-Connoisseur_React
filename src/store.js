// cartStore.js
import create from 'zustand';

const useCartStore = create((set) => ({
  cartItems: [],
  fetchCartItems: async () => {
    try {
      const response = await fetch('http://localhost:3000/cart');
      const cartData = await response.json();
      set({ cartItems: cartData.length });
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  },
}));

export default useCartStore;

