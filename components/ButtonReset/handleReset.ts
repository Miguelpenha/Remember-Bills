import api from '../../services/api/base'
import { toast } from 'react-toastify'

async function handleReset() {
    await api.patch('/bills/payment', {
        paid: false
    })

    toast('Contas resetadas', {
        type: 'info'
    })
}

export default handleReset