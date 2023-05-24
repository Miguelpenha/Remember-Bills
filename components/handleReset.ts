import api from '../services/api/base'
import { toast } from 'react-toastify'

async function handleReset() {
    await api.patch('/bills/reset')

    toast('Contas resetadas', {
        type: 'success'
    })
}

export default handleReset