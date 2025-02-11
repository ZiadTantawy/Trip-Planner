import mongoose from 'mongoose';

interface IChat extends mongoose.Document {
    user: mongoose.Types.ObjectId;
    messages: { sender: 'user' | 'bot'; message: string; timestamp: Date }[];
    trip: mongoose.Types.ObjectId;
    createdAt: Date;
}

const chatSchema = new mongoose.Schema<IChat>({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    messages: [
        {
            sender: { type: String, enum: ['user', 'bot'], required: true },
            message: { type: String, required: true },
            timestamp: { type: Date, default: Date.now }
        }
    ],
    trip: { type: mongoose.Schema.Types.ObjectId, ref: 'Trip' },
}, { timestamps: true });

const Chat = mongoose.model<IChat>('Chat', chatSchema);
export default Chat;
