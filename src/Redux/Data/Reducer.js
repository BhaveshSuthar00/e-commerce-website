import { DATA } from "./Action";

const initialState = {
  data: [],
  category: [],
  brand: [],
  discount: [],
  color: [],
  searchCateegory: "",
};
export const dataReducer = (store = initialState, { type, payload }) => {
  switch (type) {
    case DATA: {
      return {
        ...store,
        data: payload.product,
        category: payload.category,
        brand: payload.brand,
        discount: payload.discount,
      };
    }
    default:
      return store;
  }
};
