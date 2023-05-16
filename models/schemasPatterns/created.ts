const createdSchema = {
    system: {
        type: Date,
        default: () => new Date()
    },
    date: {
        type: String,
        default: () => new Date().toLocaleDateString('pt-br', { timeZone: 'UTC' })
    },
    hour: {
        type: String,
        default: () => new Date().toLocaleTimeString('pt-br', {
            timeZone: 'UTC',
            timeStyle: 'short'
        })
    }
}

export default createdSchema