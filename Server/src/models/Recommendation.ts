import mongoose from 'mongoose';

interface IRecommendation extends mongoose.Document {
    user: mongoose.Types.ObjectId;
    tripType: 'family' | 'couple' | 'solo' | 'group';
    focusActivities: string[];
    activities: mongoose.Types.ObjectId[];
    createdAt: Date;
}

const recommendationSchema = new mongoose.Schema<IRecommendation>({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    tripType: { type: String, enum: ['family', 'couple', 'solo', 'group'], required: true },
    focusActivities: { type: [String], default: [] },
    activities: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Activity' }],
}, { timestamps: true });

const Recommendation = mongoose.model<IRecommendation>('Recommendation', recommendationSchema);
export default Recommendation;
