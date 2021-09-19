import transporter from './nodemailer';
import logger from '../../config/logger';

export interface IMailDetails {
  subject: string;
  from: string;
  to: any;
  html: string;
  text?: string;
}
const Email = {
  async sendWithNodemailer(options: IMailDetails) {
    return transporter.sendMail(options, (err, info) => {
      if (err) {
        logger.error(err);
      } else {
        logger.info('Mail Sent Successfully', info);
      }
    });
  },

  async sendEmail(options: IMailDetails) {
    return this.sendWithNodemailer(options);
  },
};

export default Email;
