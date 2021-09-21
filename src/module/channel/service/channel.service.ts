import Model from '../model/channel.model';
import { IChannel } from '../interface/channel.interface';

class ChannelService {
  public static async create(data: { name: string }) {
    try {
      return await Model.create(data);
    } catch (e) {
      return e;
    }
  }

  public static async findOne(data: {
    _id?: IChannel['_id'];
    members?: IChannel['members'];
    name?: IChannel['name'];
  }) {
    try {
      return await Model.findOne(data);
    } catch (e) {
      return e;
    }
  }

  public static async addMember(
    channelId: IChannel['_id'],
    params: IChannel['members'],
  ) {
    try {
      return await Model.findByIdAndUpdate(
        channelId,
        { $push: params },
        { new: true, useFindAndModify: false },
      );
    } catch (e) {
      return e;
    }
  }
}
export default ChannelService;
