import mongoose from 'mongoose';

const diarySchema = new mongoose.Schema({
    date: {
        type: Date,
        default: new Date()
    },
    note1: {
        type: String,
    },
    note2: {
        type: String,
    },
    note3: {
        type: Number,
    },
    note4: {
        type: Number,
    },
    note5: {
        type: Number,
    },
    note6: {
        type: Number,
    },
    note7: {
        type: Number,
    },
    note8: {
        type: Number,
    },
    note9: {
        type: Number,
    },
    note10: {
        type: Number,
    },
    note11: {
        type: String,
    },
    note12: {
        type: String,
    },
    note13: {
        type: String,
    },
    note14: {
        type: String,
    },
    note15: {
        type: String,
    },
    note16: {
        type: String,
    },
    note17: {
        type: Number,
    },
    note18: {
        type: Number,
    },
    note19: {
        type: String,
    },
    note20: {
        type: String,
    },
    note21: {
        type: String,
    },
    note22: {
        type: String,
    },
    note23: {
        type: String,
    },
    note24: {
        type: String,
    },
    note25: {
        type: String,
    },
    note26: {
        type: String,
    },
    note27: {
        type: Number,
    },
    note28: {
        type: String,
    },
    note29: {
        type: String,
    },
    note30: {
        type: Number,
    },
    note31: {
        type: Number,
    },
    note32: {
        type: Number,
    },
    note33: {
        type: Number,
    },
    note34: {
        type: String,
    },
    note35: {
        type: String,
    },
    note36: {
        type: Number,
    },
    note37: {
        type: String,
    },
});

const diaryModel = mongoose.model('diaries', diarySchema);
export default diaryModel;
