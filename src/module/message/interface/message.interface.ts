import { Document } from 'mongoose';
import { IUser } from '../../user/type/user.type';

export interface IMessage extends Document {
  message: string;
  user: IUser['_id'];
}
