const allProducts = [
  { id: 123, name: 'HP Laptop', price: '$122.33' },
  { id: 124, name: 'Del Laptop', price: '$120.33' },
  { id: 125, name: 'MAC Laptop', price: '$127.33' },
  { id: 126, name: 'Lenovo Laptop', price: '$129.33' },
  { id: 127, name: 'Toshiba Laptop', price: '$189.33' },
];

export default (state = { products: allProducts, cartItems: [] }, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      if (state.cartItems.find((el) => el.id === action.id)) {
        return {
          ...state,
          cartItems: state.cartItems.map((el) =>
            el.id === action.id ? { ...el, count: el.count + 1 } : el
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [
            ...state.cartItems,
            { ...state.products.find((el) => el.id === action.id), count: 1 },
          ],
        };
      }
    case 'REMOVE_FROM_CART':
      if (state.cartItems.find((el) => el.id === action.id).count > 1) {
        return {
          ...state,
          cartItems: state.cartItems.map((el) =>
            el.id === action.id ? { ...el, count: el.count - 1 } : el
          ),
        };
      } else {
        return {
          ...state,
          cartItems: state.cartItems.filter((el) => el.id !== action.id),
        };
      }
    default:
      return state;
  }
};
