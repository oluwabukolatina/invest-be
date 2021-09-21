import dotenv from 'dotenv';
import fs from 'fs';
import logger from './logger';

if (fs.existsSync('.env')) {
  logger.debug('Using .env file to supply config environment variables');
  dotenv.config({ path: '.env' });
}
function throwIfUndefined<T>(secret: T | undefined, name?: string): T {
  if (!secret) {
    logger.error(`${name} must not be undefined`);
    return process.exit(1);
  }
  return secret;
}
export const ENVIRONMENT = throwIfUndefined(process.env.NODE_ENV, 'NODE_ENV');

throwIfUndefined(
  process.env.INVEST_ON_DABA_DEV_DATABASE_URL,
  'INVEST_ON_DABA_DEV_DATABASE_URL',
);
throwIfUndefined(
  process.env.INVEST_ON_DABA_TEST_DATABASE_URL,
  'INVEST_ON_DABA_TEST_DATABASE_URL',
);

export const INVEST_ON_DABA_JWT_SECRET = throwIfUndefined(
  process.env.INVEST_ON_DABA_JWT_SECRET,
  'INVEST_ON_DABA_JWT_SECRET',
);
export const INVEST_ON_DABA_JWT_EXPIRY = throwIfUndefined(
  process.env.INVEST_ON_DABA_JWT_EXPIRY,
  'INVEST_ON_DABA_JWT_EXPIRY',
);
