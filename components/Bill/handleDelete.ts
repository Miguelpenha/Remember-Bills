import api from '../../services/api/base'

async function handleDelete(id: string) {
    await api.delete(`/bills/delete?bill=${id}`)
}

export default handleDelete