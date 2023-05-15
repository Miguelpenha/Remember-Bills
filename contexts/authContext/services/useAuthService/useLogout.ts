import { Dispatch, SetStateAction } from 'react'
import logout from './logout'

function useLogout(setValue: Dispatch<SetStateAction<boolean>>) {
    return () => logout(setValue)
}

export default useLogout