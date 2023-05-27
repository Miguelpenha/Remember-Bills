import type { IBill } from '../../../types'
import type { NextApiRequest, NextApiResponse } from 'next'
import connectDB from '../../../services/connectDB'
import formatMoney from '../../../utils/formatMoney'
import billsModels from '../../../models/bill'

interface IBody extends Omit<IBill, 'created' | 'price' | '_id' | 'paid'> {
    id: string
}

async function editBill(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        await connectDB()

        const { name, payday, priceRaw, owner, id } = req.body as IBody

        const bill: Omit<IBody, 'id'> = {
            name,
            owner,
            payday,
            priceRaw
        }

        if (bill) {
            const { valueRaw, valueFormatted } = formatMoney(bill.priceRaw)
            
            await billsModels.updateOne({ _id: id }, {
                ...bill,
                price: valueRaw,
                priceRaw: valueFormatted
            } as IBill)

            res.json({ edited: true })
        } else {
            res.json({ message: 'Bill is required' })
        }
    } else {
        res.status(404)
    }
}

export default editBill