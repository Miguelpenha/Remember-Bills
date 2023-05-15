import { useContext } from 'react'
import AuthContext from './Context'

function useAuth() {
    return useContext(AuthContext)
}

export default useAuth