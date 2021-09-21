import Model from '../model/message.model';
import { IMessage } from '../interface/message.interface';

class MessageService {
  public static async create(data: {
    message: string;
    user: IMessage['user'];
  }) {
    try {
      return await Model.create(data);
    } catch (e) {
      return e;
    }
  }

  public static async findAll() {
    try {
      return await Model.find().populate('user', '-password');
    } catch (e) {
      return e;
    }
  }
}
export default MessageService;
