import mongoose from "mongoose";

interface Iuser extends mongoose.Document {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    trips: mongoose.Types.ObjectId[];
    preferences: {
        tripType:"family"|"friends"|"solo"|"couple";
        focus:string[];
    };
}
const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    trips: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Trip' }],
    preferences: {
        tripType: { type: String, enum: ['family', 'couple', 'solo', 'group'], required: true },
        focusActivities: { type: [String], default: [] }
    }
});

const User = mongoose.model<Iuser>('User', userSchema);
export default User;
