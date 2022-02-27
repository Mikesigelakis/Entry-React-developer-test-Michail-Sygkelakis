import { Query } from "@tilework/opus";

export const PRODUCTS_QUERY = (category) => {
  return new Query("category", true)
    .addArgument("input", "CategoryInput", { title: category })
    .addFieldList([
      "products {id,name,brand,inStock,attributes {id, items {value, id}},gallery,prices{amount,currency{label,symbol}}}",
    ]);
};
