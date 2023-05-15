import { IClient } from '../../../types'
import type { NextApiRequest, NextApiResponse } from 'next'
import generateContract from '../../../services/generateContract'

interface IBody {
    client: IClient
}

async function contract(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { client } = req.body as IBody

        generateContract(client, res)
    } else {
        res.status(404)
    }
}

export default contract