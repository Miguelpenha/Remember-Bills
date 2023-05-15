interface IAuthContext {
    isLogged: boolean
    logout: () => void
    login: (jwt: string) => Promise<{ authenticated: boolean }>
}

export default IAuthContext