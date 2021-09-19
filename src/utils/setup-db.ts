import { connection } from 'mongoose';
import db from '../config/database';

const setupTestDB = () => {
  beforeAll((done) => {
    db.connectToDb()
      .then(() => {
        done();
      })
      .catch(() => done());
  });
  beforeAll(async () => {
    const { collections } = connection;
    Object.keys(collections).forEach((e) => {
      const collection = collections[e];
      collection.deleteMany({});
    });
  });
  afterAll(async () => {
    await db.disconnectFromDB();
  });
};

export default setupTestDB;
