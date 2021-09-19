import Model from '../model/dummy.model';

class DummyService {
  public static async create(data: { name: string }) {
    try {
      return await Model.create(data);
    } catch (e) {
      return e;
    }
  }
}
export default DummyService;
