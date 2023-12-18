import { IBill } from '../../../types'
import ISituation from '../../../types/situation'
import getSituation from '../../getSituation'

function includesInBill(bill: IBill, search: string, situation: ISituation | undefined) {
    const includesName = bill.name.toUpperCase().includes(search.toUpperCase())
    const includesOwner = bill.owner.toUpperCase().includes(search.toUpperCase())
    const includesPriceRaw = bill.priceRaw.toUpperCase().includes(search.toUpperCase())
    const includesPayDay = bill.payday.toUpperCase().includes(search.toUpperCase())
    const includes = includesName || includesOwner || includesPriceRaw || includesPayDay

    const situationExact = situation ? getSituation(bill) === situation : true

    return includes && situationExact
}

export default includesInBill