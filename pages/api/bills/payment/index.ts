import type { NextApiRequest, NextApiResponse } from 'next'
import connectDB from '../../../../services/connectDB'
import billsModels from '../../../../models/bill'

interface IBody {
    paid: boolean
}

async function paymentsBills(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'PATCH') {
        await connectDB()

        const { paid } = req.body as IBody

        await billsModels.updateMany({  }, { paid })

        res.json({ paid })
    } else {
        res.status(404)
    }
}

export default paymentsBills