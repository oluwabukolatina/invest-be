import rateLimit from 'express-rate-limit';

const rateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 1 hour window
  max: 20,
  skipSuccessfulRequests: true,

  // message: 'You have exceeded the 100 requests',
  // headers: true,

  // handler(req, res) {
  //   ResponseHandler.ErrorResponse(
  //     res,
  //     429,
  //     false,
  //     'You have exceeded 100 requests',
  //   );
  // },
});
export default rateLimiter;
