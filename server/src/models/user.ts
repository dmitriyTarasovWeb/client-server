import { Schema, model, Document } from 'mongoose';

export interface UserDocument extends Document {
  email: string;
  name: string;
  rooms: string[];
}

const userSchema = new Schema<UserDocument>({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  rooms: [{ type: String }],
});

const User = model<UserDocument>('User', userSchema);
export default User;