import { IBill } from '../../../types'
import type { NextApiRequest, NextApiResponse } from 'next'
import connectDB from '../../../services/connectDB'
import formatMoney from '../../../utils/formatMoney'
import billsModels from '../../../models/bill'

interface IBody {
    name: string
    payday: number
    priceRaw: string
}

async function createBill(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        await connectDB()

        const { name, payday, priceRaw } = req.body as IBody

        const bill = {
            name,
            payday,
            priceRaw
        } as IBill

        if (bill) {
            const { valueRaw } = formatMoney(bill.priceRaw)

            await billsModels.create({
                ...bill,
                price: valueRaw
            } as IBill)

            res.json({ created: true })
        } else {
            res.json({ message: 'Bill is required' })
        }
    } else {
        res.status(404)
    }
}

export default createBill