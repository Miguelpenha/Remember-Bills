import type { IBill } from '../../../types'
import type { NextApiRequest, NextApiResponse } from 'next'
import connectDB from '../../../services/connectDB'
import formatMoney from '../../../utils/formatMoney'
import billsModels from '../../../models/bill'

type IBody = Omit<IBill, 'created' | 'price' | '_id' | 'paid'>

async function createBill(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        await connectDB()

        const { name, payday, priceRaw, owner } = req.body as IBody

        const bill: IBody = {
            name,
            owner,
            payday,
            priceRaw
        }

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