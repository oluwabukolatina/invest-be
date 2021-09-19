module.exports = {
  development: {
    database: process.env.STARTER_DATABASE_URL,
    emailUserName: process.env.STARTER_DEV_GMAIL_USERNAME,
    emailPassword: process.env.STARTER_DEV_GMAIL_PASSWORD,
  },
  test: {
    database: process.env.STARTER_TEST_DATABASE_URL,
    emailUserName: process.env.STARTER_DEV_GMAIL_USERNAME,
    emailPassword: process.env.STARTER_DEV_GMAIL_PASSWORD,
  },
};
