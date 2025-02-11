import mongoose from "mongoose";

interface ITrip extends mongoose.Document {
  user: mongoose.Types.ObjectId;
  title: string;
  destination: string;
  startDate: Date;
  endDate: Date;
  activities: mongoose.Types.ObjectId[];
  collaborators: mongoose.Types.ObjectId[];
  expenses: { user: mongoose.Types.ObjectId; amount: number }[];
  itinerary: { day: number; activities: string[] }[];
  createdAt: Date;
  updatedAt: Date;
}

const tripSchema = new mongoose.Schema<ITrip>({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  destination: [{ type: String, required: true }],
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  activities: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Activity' }],
  collaborators: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  expenses: [{ user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, amount: { type: Number, required: true } }],
  itinerary: [{ day: { type: Number, required: true }, activities: { type: [String], required: true } }],
}, { timestamps: true });

const Trip = mongoose.model<ITrip>('Trip', tripSchema);
export default Trip;
