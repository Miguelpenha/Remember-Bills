import { IBill } from '../../types'
import formatDay from '../../utils/formatDay'

function getDate(bill: IBill) {
    const year = new Date().toLocaleDateString('pt-br', { timeZone: 'UTC', year: 'numeric' })
    const month = new Date().toLocaleDateString('pt-br', { timeZone: 'UTC', month: '2-digit' })
    const day = formatDay(bill.payday)

    return `${day}/${month}/${year}`
}

export default getDate