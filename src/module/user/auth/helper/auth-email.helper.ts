import { ENVIRONMENT } from '../../../../config/secrets';
import { FRONT_END_SIGN_IN_URL } from '../../../../utils/url';
import EmailTemplatesHelper from '../../../../utils/email/helper';

const env = require('../../../../config/env')[String(ENVIRONMENT)];

const AuthEmailHelper = {
  createWelcomeEmail(options: { email: string }) {
    const { email } = options;
    return {
      subject: 'Welcome To Invest on Daba',
      from: env.emailUsername,
      to: email,
      html: EmailTemplatesHelper.generateTemplate(
        { email },
        'welcome-email.html',
      ),
    };
  },
};
export default AuthEmailHelper;
