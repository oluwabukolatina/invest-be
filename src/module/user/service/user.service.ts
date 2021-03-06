import Model from '../entity/user.model';
import { IUser } from '../type/user.type';

interface ICreateUser {
  email: IUser['email'];
  password: IUser['password'];
}
interface IFindUser {
  _id: IUser['_id'];
}
export default class UserService {
  public static createUser = async (data: ICreateUser) => {
    try {
      return await Model.create(data);
    } catch (e) {
      return e;
    }
  };

  public static async saveUser(data: IUser) {
    try {
      return await data.save();
    } catch (e) {
      return e;
    }
  }

  public static async findUser(data: { email?: string; _id?: string }) {
    try {
      return await Model.findOne(data);
    } catch (e) {
      return e;
    }
  }
}
