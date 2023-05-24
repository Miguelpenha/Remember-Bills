import api from '../../services/api/base'
import { toast } from 'react-toastify'

async function handleClick(bill: string) {
    await api.patch('/bills/paid', {
        bill
    })

    toast('Conta paga!', {
        type: 'success'
    })
}

export default handleClick