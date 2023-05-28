import api from '../../services/api/base'
import { toast } from 'react-toastify'

async function handlePayment(bill: string, paid: boolean) {
    await api.patch(`/bills/payment/${bill}`, {
        paid
    })

    if (paid) {
        toast('Conta paga!', {
            type: 'success'
        })
    } else {
        toast('Conta não paga', {
            type: 'info'
        })
    }
}

export default handlePayment