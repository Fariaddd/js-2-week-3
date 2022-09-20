function formatCurrency(amount, currenySymbol = "usd"){

    const formattedAmount = amount.toFixed(2)
    return `${formattedAmount} ${currenySymbol}`
// which will make our item look more presentable e.g 1115 becomes "115.00 kr".


}

export {formatCurrency}


