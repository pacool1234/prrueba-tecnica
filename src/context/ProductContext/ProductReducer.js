const products = (state, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };

    case "SORT":
      const sorted = state.products.sort(function (a, b) {
        let keyA, keyB;
        if (action.payload.property == "title" || action.payload.property == "category") {
          keyA = a[action.payload.property];
          keyB = b[action.payload.property];
        } else {
          keyA = +a[action.payload.property];
          keyB = +b[action.payload.property];
        }
        if (action.payload.isAsc) {
          return keyA < keyB ? -1 : 1;
        } else {
          return keyA < keyB ? 1 : -1;
        }
      });
      return {
        ...state,
        products: sorted,
      };

    default:
      return state;
  }
};

export default products;
