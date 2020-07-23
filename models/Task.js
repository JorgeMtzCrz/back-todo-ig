const { Schema, model } = require('mongoose');

const taskSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    name: String,
    finishBy: String,
    status: {
        type: String,
        enum: ['Completed', 'Uncompleted'],
        default: 'Uncompleted'
    },
}, {
    timestamps: true,
    versionKey: false
});


module.exports = model('Task', taskSchema);