interface IBill {
    name: string
    price: number
    payday: number
    priceRaw: string
    created: {
        date: string
        hour: string
        system: Date
    }
}

export default IBill