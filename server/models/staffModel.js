import mongoose from 'mongoose';

const staffSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true // Marking name as required
    },
    email: {
        type: String,
        required: true, // Marking email as required
        unique: true,   // Ensuring email is unique
        validate: {
            validator: function(v) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); // Email format validation
            },
            message: props => `${props.value} is not a valid email!`
        }
    },
    mobile: {
        type: Number,
        unique: true, // Ensuring mobile is unique
        required: true // Marking mobile as required
    },
    password: {
        type: String,
        required: true
    },
    isBlocked: {
        type: Boolean,
        default: false
    },
});

const staffModel = mongoose.model('staffs', staffSchema);
export default staffModel;
