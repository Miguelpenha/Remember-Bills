import { IBill } from '../types'
import { useState, useEffect } from 'react'
import dinero from 'dinero.js'

function useInsights(bills: IBill[] | undefined) {
    const [billsPaid, setBillsPaid] = useState(0)
    const [billsNoPaid, setBillsNoPaid] = useState(0)
    const [billsTotalValue, setBillsTotalValue] = useState('')
    const [billsTotalValuePaid, setBillsTotalValuePaid] = useState('')
    const [billsTotalValueNoPaid, setBillsTotalValueNoPaid] = useState('')

    useEffect(() => {
        if (bills) {
            let paidCounter = 0
            let noPaidCounter = 0
            let totalValue = 0
            let totalValuePaid = 0
            let totalValueNoPaid = 0

            bills.map(bill => {
                totalValue += bill.price

                if (bill.paid) {
                    paidCounter ++

                    totalValuePaid += bill.price
                } else {
                    noPaidCounter ++

                    totalValueNoPaid += bill.price
                }
            })

            setBillsPaid(paidCounter)
            setBillsNoPaid(noPaidCounter)
            setBillsTotalValue(dinero({ amount: totalValue, currency: 'BRL' }).toFormat())
            setBillsTotalValuePaid(dinero({ amount: totalValuePaid, currency: 'BRL' }).toFormat())
            setBillsTotalValueNoPaid(dinero({ amount: totalValueNoPaid, currency: 'BRL' }).toFormat())
        }
    }, [bills])

    return {
        billsPaid,
        billsNoPaid,
        billsTotalValue,
        billsTotalValuePaid,
        billsTotalValueNoPaid
    }
}

export default useInsights