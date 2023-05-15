import { Dispatch, SetStateAction } from 'react'
import loginRaw from './login'

function useLogin(setValue: Dispatch<SetStateAction<boolean>>) {
    async function login(jwt: string) {
        return await loginRaw(jwt, setValue)
    }

    return login
}

export default useLogin