import { Query } from "@tilework/opus";

export const CATEGORIES_QUERY = () => {
  return (
    new Query('categories', true)
      .addFieldList(['name'])
  )
};