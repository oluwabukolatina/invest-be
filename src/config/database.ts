import { connect, disconnect } from 'mongoose';
import { ENVIRONMENT } from './secrets';
import logger from './logger';

const env = require('./env')[String(ENVIRONMENT)];

async function connectToDb() {
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  };
  // return connect(env.database, options);
  try {
    await connect(env.database, options);
    logger.info('MongoDB connection SUCCESS');
  } catch (error) {
    logger.error('MongoDB connection FAIL');
    process.exit(1);
  }
}
async function disconnectFromDB() {
  await disconnect();
}
export default { connectToDb, disconnectFromDB };
