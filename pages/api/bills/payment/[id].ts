import type { NextApiRequest, NextApiResponse } from 'next'
import connectDB from '../../../../services/connectDB'
import billsModels from '../../../../models/bill'

interface IQuery {
    id: string
}

interface IBody {
    paid: boolean
}

async function paymentBill(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'PATCH') {
        await connectDB()

        const { id: bill } = req.query as unknown as IQuery
        const { paid } = req.body as IBody

        await billsModels.updateOne({ _id: bill }, { paid })

        res.json({ paid })
    } else {
        res.status(404)
    }
}

export default paymentBill