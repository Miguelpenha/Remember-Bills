import { Dispatch, SetStateAction } from 'react'
import useLogout from './useLogout'
import useLogin from './useLogin'

function useAuthService(setIsLogged: Dispatch<SetStateAction<boolean>>) {
    const logout = useLogout(setIsLogged)
    const login = useLogin(setIsLogged)

    return {
        login,
        logout
    }
}

export default useAuthService