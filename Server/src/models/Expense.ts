import mongoose from 'mongoose';

interface IExpense extends mongoose.Document {
  trip: mongoose.Types.ObjectId;
  user: mongoose.Types.ObjectId;
  amount: number;
  description: string;
  date: Date;
}

const expenseSchema = new mongoose.Schema<IExpense>({
  trip: { type: mongoose.Schema.Types.ObjectId, ref: 'Trip', required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  amount: { type: Number, required: true },
  description: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Expense = mongoose.model<IExpense>('Expense', expenseSchema);
export default Expense;
