import mongoose from 'mongoose';

interface IActivity extends mongoose.Document {
  name: string;
  category: 'food' | 'nature' | 'exploration' | 'culture' | 'adventure';
  location: string;
  description: string;
  priceRange: { min: number; max: number };
}

const activitySchema = new mongoose.Schema<IActivity>({
  name: { type: String, required: true },
  category: { type: String, enum: ['food', 'nature', 'exploration', 'culture', 'adventure'], required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  priceRange: {
    min: { type: Number, required: true },
    max: { type: Number, required: true }
  }
});

const Activity = mongoose.model<IActivity>('Activity', activitySchema);
export default Activity;
