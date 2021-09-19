import EmailTemplatesHelper from '../../../utils/email/helper';
import { ENVIRONMENT } from '../../../config/secrets';

const env = require('../../../config/env')[String(ENVIRONMENT)];

const DummyEmailHelper = {
  createNewDummyEmail(options: { name: string; email: string }) {
    const { name } = options;
    return {
      subject: 'RESET YOUR PASSWORD',
      from: env.emailUsername,
      to: options.email,
      html: EmailTemplatesHelper.generateTemplate(
        { name },
        '/welcome-email.html',
      ),
    };
  },
};
export default DummyEmailHelper;
