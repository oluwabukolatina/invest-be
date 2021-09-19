import { Schema, model } from 'mongoose';
import { IDummy } from '../interface/dummy.interface';

const DummySchema = new Schema(
  {
    name: String,
  },
  { timestamps: true },
);

export default model<IDummy>('Dummy', DummySchema);
