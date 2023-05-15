import type { NextApiRequest, NextApiResponse } from 'next'

async function unauthorized(req: NextApiRequest, res: NextApiResponse) {
    res.status(401).json({ unauthorized: true })
}

export default unauthorized