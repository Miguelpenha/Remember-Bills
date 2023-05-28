import { IBill } from '../../../types'
import { ISituation } from './type'

function getSituation(bill: IBill): ISituation {
    if (bill.paid) {
        return 'paid'
    } else {
        const day = new Date().toLocaleDateString('pt-br', { timeZone: 'UTC', day: '2-digit' })

        if (bill.payday <= day) {
            return 'unpaid'
        } else {
            return 'waiting'
        }
    }
}

export default getSituation