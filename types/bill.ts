interface IBill {
    _id: string
    name: string
    paid: boolean
    price: number
    owner: string
    payday: number
    priceRaw: string
    created: {
        date: string
        hour: string
        system: Date
    }
}

export default IBill