import type { NextApiRequest, NextApiResponse } from 'next'
import { decodeJwt, SignJWT } from 'jose'

interface IBody {
    jwt: string
}

interface IData {
    token?: string
    valid: boolean
}

interface IUser {
    hd: string
    email: string
    email_verified: boolean
}

async function login(req: NextApiRequest, res: NextApiResponse<IData>) {
    if (req.method === 'POST') {
        const { jwt } = req.body as IBody
        const user = decodeJwt(jwt) as unknown as IUser

        if (process.env.AUTHORIZED_EMAILS.split(',').includes(user.email)) {
            const token = await new SignJWT({})
            .setSubject('true')
            .setExpirationTime('100y')
            .setProtectedHeader({ alg: 'HS256' })
            .sign(new TextEncoder().encode(process.env.SECRET_JWT))

            res.json({ valid: true, token })
        } else {
            res.json({ valid: false })
        }
    } else {
        res.status(404)
    }
}

export default login