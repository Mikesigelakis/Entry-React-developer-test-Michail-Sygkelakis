import { Query } from "@tilework/opus";

export const CURRENCIES_QUERY = () => {
  return (
    new Query('currencies', true)
      .addFieldList(["label", "symbol"])
  )
};