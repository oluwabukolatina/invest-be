import { Schema, model } from 'mongoose';
import { IMessage } from '../interface/message.interface';

const MessageSchema = new Schema(
  {
    message: String,
    user: { type: Schema.Types.ObjectId, ref: 'User' },
  },
  { timestamps: true },
);

export default model<IMessage>('Message', MessageSchema);
