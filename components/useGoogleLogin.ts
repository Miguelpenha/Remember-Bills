import useAuth from '../contexts/authContext'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'

function useGoogleLogin() {
    const { login } = useAuth()
    const router = useRouter()

    function googleLogin() {
        google.accounts.id.initialize({
            auto_select: true,
            ux_mode: 'redirect',
            client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
            callback: async (res: any) => {
                const { authenticated } = await login(res.credential)
    
                if (authenticated) {
                    router.push('/')
    
                    toast('Login feito com sucesso!', {
                        type: 'success'
                    })
                } else {
                    toast('Conta inválida!', {
                        type: 'error'
                    })
                }
            }
        })
    
        google.accounts.id.prompt()
    }

    return googleLogin
}

export default useGoogleLogin