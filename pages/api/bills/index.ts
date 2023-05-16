import type { NextApiRequest, NextApiResponse } from 'next'
import connectDB from '../../../services/connectDB'
import { IBill } from '../../../types'
import billsModels from '../../../models/bill'

async function bills(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        await connectDB()

        const bills: IBill[] = await billsModels.find()

        res.json(bills)
    } else {
        res.status(404)
    }
}

export default bills