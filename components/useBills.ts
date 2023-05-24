import api from '../services/api'
import { IBill } from '../types'

function useBills() {
    const { data: bills, mutate } = api.get<IBill[]>('/bills')

    bills?.sort((a, b) => b.price - a.price)
    bills?.sort((a, b) => a.payday - b.payday)
    bills?.sort((a, b) => Number(a.paid) - Number(b.paid))

    return { bills, mutate }
}

export default useBills