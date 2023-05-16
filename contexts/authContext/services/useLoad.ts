import { Dispatch, SetStateAction } from 'react'
import { parseCookies } from 'nookies'
import api from '../../../services/api/base'

interface IResponse {
    valid: boolean
}

interface IRequest {
    token: string
}

function useLoad(setIsLogged: Dispatch<SetStateAction<boolean>>, logout: Function) {
    async function load() {
        const { [process.env.NEXT_PUBLIC_LOGIN_COOKIE_NAME]:isLogged } = parseCookies()

        if (isLogged) {
            const { valid } = (await api.post<IResponse>('/auth/verify', {
                token: isLogged
            } as IRequest)).data

            if (valid) {
                setIsLogged(true)
            } else {
                setIsLogged(false)

                logout()
            }
        } else {
            setIsLogged(false)

            logout()
        }
    }

    return load
}

export default useLoad