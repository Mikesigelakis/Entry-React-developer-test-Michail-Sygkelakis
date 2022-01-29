import { Query } from "@tilework/opus";

export const PRODUCTS_QUERY = (category) => {
  return (
    new Query('category', true)
      .addArgument("input", "CategoryInput", { title: category })
      .addFieldList(["products {id,name,inStock,gallery,prices{amount,currency{label,symbol}}}"])
      
  )
};