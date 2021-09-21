import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import HttpException from '../../../utils/http-exception';
import ResponseHandler from '../../../utils/response-handler';
import DummyService from '../service/dummy.service';
import Email from '../../../utils/email/email';
import DummyEmailHelper from '../helper/email-helper';

class DummyController {
  public createDummy = async (
    { body }: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const dummy = await DummyService.create(body);
      if (!dummy) {
        return next(new HttpException(StatusCodes.BAD_REQUEST, 'Not created'));
      }
      await Email.sendEmail(
        DummyEmailHelper.createNewDummyEmail({
          name: dummy.name,
          email: 'oluwabukolatinatest@gmail.com',
        }),
      );
      return ResponseHandler.CreatedResponse(res, 'Created', dummy);
    } catch (error) {
      return next(error);
    }
  };
}
export default DummyController;
