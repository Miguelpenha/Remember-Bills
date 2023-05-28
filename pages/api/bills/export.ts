import type { NextApiRequest, NextApiResponse } from 'next'
import connectDB from '../../../services/connectDB'
import { IBill } from '../../../types'
import billsModels from '../../../models/bill'
import generateSpreadsheet from '../../../services/generateSpreadsheet'
import exportSpreadsheet from '../../../services/exportSpreadsheet'

async function exportBills(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        await connectDB()

        const bills: IBill[] = await billsModels.find()

        const spreadsheet = generateSpreadsheet(bills)

        await exportSpreadsheet(res, spreadsheet)
    } else {
        res.status(404)
    }
}

export default exportBills