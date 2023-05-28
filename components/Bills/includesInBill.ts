import { IBill } from '../../types'

function includesInBill(bill: IBill, search: string) {
    const includesName = bill.name.toUpperCase().includes(search.toUpperCase())
    const includesOwner = bill.owner.toUpperCase().includes(search.toUpperCase())
    const includesPriceRaw = bill.priceRaw.toUpperCase().includes(search.toUpperCase())
    const includesPayDay = bill.payday.toUpperCase().includes(search.toUpperCase())

    return includesName || includesOwner || includesPriceRaw || includesPayDay
}

export default includesInBill