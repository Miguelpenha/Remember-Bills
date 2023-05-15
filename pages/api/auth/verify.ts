import type { NextApiRequest, NextApiResponse } from 'next'
import {jwtVerify } from 'jose'

interface IBody {
    token: string
}

interface IData {
    valid: boolean
}

async function verifyAuth(req: NextApiRequest, res: NextApiResponse<IData>) {
    if (req.method === 'POST') {
        const { token } = req.body as IBody

        try {
            if (await jwtVerify(token, new TextEncoder().encode(process.env.SECRET_JWT))) {
                res.json({ valid: true })
            } else {
                res.json({ valid: false })
            }
        } catch {
            res.json({ valid: false })
        }
    } else {
        res.status(404)
    }
}

export default verifyAuth