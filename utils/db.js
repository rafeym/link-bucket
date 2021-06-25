import mongoose from 'mongoose'

const MONGO_URI =
    'mongodb+srv://linkbucketuser123:linkbucketuser123@cluster0.xjyos.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

let connected = false

export const connectDb = async () => {
    if (!connected) {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: true,
            useCreateIndex: true,
        })
    }
    connected = true
    console.log('Connected to MONGO_DB')
}
