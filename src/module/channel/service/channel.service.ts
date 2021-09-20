import Model from '../model/channel.model';

class ChannelService {
  public static async create(data: { name: string }) {
    try {
      return await Model.create(data);
    } catch (e) {
      return e;
    }
  }
}
export default ChannelService;
