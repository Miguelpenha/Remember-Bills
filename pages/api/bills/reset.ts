import type { NextApiRequest, NextApiResponse } from 'next'
import connectDB from '../../../services/connectDB'
import billsModels from '../../../models/bill'

async function resetBills(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'PATCH') {
        await connectDB()

        await billsModels.updateMany({}, {
            paid: false
        })

        res.json({ reset: true })
    } else {
        res.status(404)
    }
}

export default resetBills