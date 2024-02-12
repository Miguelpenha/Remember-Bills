import { Dispatch, SetStateAction } from 'react'
import logoutRaw from './logout'
import loginRaw from './login'

function useAuthService(setIsLogged: Dispatch<SetStateAction<boolean>>) {
    const logout = () => logoutRaw(setIsLogged)

    async function login(jwt: string) {
        return await loginRaw(jwt, setIsLogged)
    }

    return {
        login,
        logout
    }
}

export default useAuthService