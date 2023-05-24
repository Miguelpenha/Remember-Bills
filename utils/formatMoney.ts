import dinero from 'dinero.js'

function formatMoney(value: string) {
    if (!value.includes(',')) {
        value = `${value},00`
    }
    
    const valueRaw = Number(
        value
        .replace('.', '')
        .replace(',', '')
        .replace('R$', '')
        .trimStart()
    )

    dinero.globalLocale = 'pt-BR'

    const valueFormatted = dinero({ amount: valueRaw, currency: 'BRL' }).toFormat()

    return {
        valueRaw,
        valueFormatted
    }
}

export default formatMoney