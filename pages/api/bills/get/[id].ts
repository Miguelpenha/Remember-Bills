import type { NextApiRequest, NextApiResponse } from 'next'
import connectDB from '../../../../services/connectDB'
import billsModels from '../../../../models/bill'

interface IQuery {
    id: string
}

async function getBill(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        await connectDB()

        const { id } = req.query as unknown as IQuery

        const bill = await billsModels.findById(id)

        res.json(bill)
    } else {
        res.status(404)
    }
}

export default getBill