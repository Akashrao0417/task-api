import { validationResult } from 'express-validator';

export function checkValidationResults(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map((err) => err.msg);
    return res
      .status(400)
      .json({
        error: 'Validation failed',
        details: errorMessages,
        errors: errorMessages,
      });
  }
  next();
}
