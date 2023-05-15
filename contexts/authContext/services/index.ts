import { Dispatch, SetStateAction } from 'react'
import useLoad from './useLoad'
import useAuthService from './useAuthService'

function useService(setIsLogged: Dispatch<SetStateAction<boolean>>) {
    const { login, logout } = useAuthService(setIsLogged)
    const load = useLoad(setIsLogged, logout)

    return { load, login, logout }
}

export default useService