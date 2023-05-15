import { createContext } from 'react'
import IAuthContext from './type'

const AuthContext = createContext<IAuthContext>({} as IAuthContext)

export default AuthContext