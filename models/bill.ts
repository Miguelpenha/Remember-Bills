import mongoose from 'mongoose'
import { IBill } from '../types'
import createdSchema from './schemasPatterns/created'

const schema = new mongoose.Schema<IBill>({
    name: String,
    price: Number,
    owner: String,
    payday: String,
    priceRaw: String,
    created: createdSchema,
    paid: {
        type: Boolean,
        default: false
    }
})

const billsModels = mongoose.models.bills || mongoose.model<IBill>('bills', schema)

export default billsModels