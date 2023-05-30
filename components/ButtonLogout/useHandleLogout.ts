import useAuth from '../../contexts/authContext'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'

function useHandleLogout() {
    const { logout } = useAuth()
    const router = useRouter()

    function handleLogout() {
        logout()

        toast('Logout feito', {
            type: 'info'
        })

        router.push('/login')
    }

    return handleLogout
}

export default useHandleLogout