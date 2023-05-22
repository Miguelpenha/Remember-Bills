import type { NextApiRequest, NextApiResponse } from 'next'
import connectDB from '../../../services/connectDB'
import billsModels from '../../../models/bill'

interface IBody {
    bill: string
}

async function paidBill(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'PATCH') {
        await connectDB()

        const { bill } = req.body as IBody

        await billsModels.updateOne({ _id: bill }, { paid: true })

        res.json({ paid: true })
    } else {
        res.status(404)
    }
}

export default paidBill