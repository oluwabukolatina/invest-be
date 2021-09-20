import { Schema, model } from 'mongoose';
import { IChannel } from '../interface/channel.interface';

const ChannelSchema = new Schema(
  {
    name: String,
    description: String,
  },
  { timestamps: true },
);

export default model<IChannel>('Channel', ChannelSchema);
