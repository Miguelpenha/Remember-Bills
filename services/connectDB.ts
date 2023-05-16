import mongoose from 'mongoose'

interface ICached {
    conn?: any
    promise?: any
}

let cached: ICached = {}

if (!cached) {
    cached = { conn: null, promise: null }
}

async function connectDB() {
    if (cached.conn) {
        return cached.conn
    }

    if (!cached.promise) {
        cached.promise = mongoose.connect(process.env.MONGODB_URL).then(mongoose => mongoose)
    }

    cached.conn = await cached.promise

    return cached.conn
}

export default connectDB