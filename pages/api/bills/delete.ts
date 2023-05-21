import type { NextApiRequest, NextApiResponse } from 'next'
import connectDB from '../../../services/connectDB'
import billsModels from '../../../models/bill'

interface IQuery {
    bill: string
}

async function deleteBill(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'DELETE') {
        await connectDB()

        const { bill } = req.query as any as IQuery

        await billsModels.deleteOne({ _id: bill })

        res.json({ deleted: true })
    } else {
        res.status(404)
    }
}

export default deleteBill