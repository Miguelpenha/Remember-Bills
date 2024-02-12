import { Dispatch, SetStateAction } from 'react'
import { setCookie } from 'nookies'
import api from '../../../../services/api/base'

interface IResponse {
    token: string
    valid: boolean
}

interface IRequest {
    jwt: string
}

async function login(jwt: string, setValue: Dispatch<SetStateAction<boolean>>) {
    const { valid, token } = (await api.post<IResponse>('/auth/login', {
        jwt
    } as IRequest)).data

    if (valid) {
        setValue(true)

        setCookie(undefined, process.env.NEXT_PUBLIC_LOGIN_COOKIE_NAME, token, {
            path: '/',
            secure: true,
            domain: process.env.NEXT_PUBLIC_DOMAIN,
            maxAge: 52560000 * 60 * 1 // 100 year
        })

        return { authenticated: true }
    } else {
        return { authenticated: false }
    }
}

export default login