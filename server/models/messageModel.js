import mongoose from 'mongoose';
const ObjectId = mongoose.Types.ObjectId;

const messageSchema = new mongoose.Schema({
    userType: { type: String, enum: ['admin', 'staff'], required: true }, // Specifies whether the sender is a user or staff
    user: { 
        type: ObjectId, 
        required: true,
        validate: {
            validator: function(v) {
                // Ensure that userType is either 'user' or 'staff' before referencing the collection
                return this.userType === 'admin' || this.userType === 'staff';
            },
            message: props => `Invalid userType: ${props.value}`
        },
        refPath: 'userType' // Dynamically reference either 'users' or 'staffs' collection
    },
    message: { type: String, required: true },
    timestamp: { type: Date, default: Date.now }
});

const messageModel = mongoose.model('messages', messageSchema);
export default messageModel;
