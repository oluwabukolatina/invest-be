import { Document } from 'mongoose';

export interface IChannel extends Document {
  name: string;
  description: string;
  members: any;
}
