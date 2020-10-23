require('dotenv').config();

module.exports = {
  APP_ENV: process.env.APP_ENV,
  SECRET: process.env.PASSPORT_SECRET,
  MONGO_URI: `${process.env.MONGO_URI}/${process.env.DB_DATABASE}`,
  APP_PORT: process.env.APP_PORT,
  MAIL_USERNAME: process.env.MAIL_USERNAME,
  MAIL_PASSWORD: process.env.MAIL_PASSWORD,
  MAIL_PORT: process.env.MAIL_PORT,
  MAIL_HOST: process.env.MAIL_HOST,
  OPTIONS: {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true
  }
};