module.exports = {
  development: {
    database: process.env.INVEST_ON_DABA_DEV_DATABASE_URL,
    emailUserName: process.env.INVEST_ON_DABA_DEV_GMAIL_USERNAME,
    emailPassword: process.env.INVEST_ON_DABA_DEV_GMAIL_PASSWORD,
  },
  test: {
    database: process.env.INVEST_ON_DABA_TEST_DATABASE_URL,
    emailUserName: process.env.INVEST_ON_DABA_DEV_GMAIL_USERNAME,
    emailPassword: process.env.INVEST_ON_DABA_DEV_GMAIL_PASSWORD,
  },
  production: {
    database: process.env.INVEST_ON_DABA_DATABASE_URL,
    emailUserName: process.env.INVEST_ON_DABA_DEV_GMAIL_USERNAME,
    emailPassword: process.env.INVEST_ON_DABA_DEV_GMAIL_PASSWORD,
  },
};
