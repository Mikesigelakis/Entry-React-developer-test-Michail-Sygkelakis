const Price = (prices, item_count, currency) => {


    const selected_currency_price = prices.filter(item =>
        item.currency.label === currency.label
    )
    const full_price = (selected_currency_price[0].amount * item_count).toFixed(2) + ' ' + selected_currency_price[0].currency.symbol

    return full_price
}


export default Price;