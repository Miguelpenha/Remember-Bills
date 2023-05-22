import api from '../../services/api/base'

async function handleClick(bill: string) {
    await api.patch('/bills/paid', {
        bill
    })
}

export default handleClick