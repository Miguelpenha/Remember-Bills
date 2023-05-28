import api from '../../../services/api/base'
import { toast } from 'react-toastify'

async function handleDelete(id: string) {
    await api.delete(`/bills/delete?bill=${id}`)

    toast('Conta excluída', {
        type: 'error'
    })
}

export default handleDelete