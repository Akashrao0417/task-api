import { query } from 'express-validator';
import { checkValidationResults } from './handleValidationErrors.js';

export const validateTaskQuery = [
  query('completed')
    .optional()
    .custom((value) => value === 'true' || value === 'false')
    .withMessage('completed must be either true or false'),

  checkValidationResults,
];

