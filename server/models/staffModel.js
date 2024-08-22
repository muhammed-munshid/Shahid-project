import mongoose from 'mongoose'

const staffSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    mobile: {
        type: Number,
    },
    password: {
        type: String,
        required: true
    },
})


const staffModel = mongoose.model('staffs', staffSchema)
export default staffModel