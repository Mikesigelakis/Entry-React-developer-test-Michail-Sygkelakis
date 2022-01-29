import { Query } from "@tilework/opus";

export const PRODUCT_DETAILS_QUERY = (id) => {
  return (
    new Query('product', true)
      .addArgument("id", "String!",   id )
      .addFieldList(["id", "name", "inStock", "gallery", "description", "brand", "attributes {id, items {value, id}}", "prices {amount,currency{label, symbol}}"])
  )
};