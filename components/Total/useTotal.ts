import { IBill } from '@/types'
import { useState, useEffect } from 'react'
import dinero from 'dinero.js'

function useTotal(bills: IBill[] | undefined) {
    const [percentPaid, setPercentPaid] = useState<number>()
    const [totalValueNoPaid, setTotalValueNoPaid] = useState<string>()
    const [totalValuePaid, setTotalValuePaid] = useState<string>()

    useEffect(() => {
        if (bills) {
            const totalPaid = bills.filter(bill => bill.paid).reduce((partialSum, a) => partialSum + a.price, 0)
            const total = bills.reduce((partialSum, a) => partialSum + a.price, 0)

            setPercentPaid(Math.round((totalPaid/total)*100))
            setTotalValuePaid(dinero({ amount: totalPaid, currency: 'BRL' }).toFormat())
            setTotalValueNoPaid(dinero({ amount: total, currency: 'BRL' }).toFormat())
        }
    }, [bills])

    return {
        percentPaid,
        totalValuePaid,
        totalValueNoPaid
    }
}

export default useTotal