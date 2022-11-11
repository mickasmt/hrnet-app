import { parse, isDate } from "date-fns";

export function parseDateString(value, originalValue) {
  const parsedDate = isDate(originalValue)
    ? originalValue
    : parse(originalValue, "dd/MM/yyyy", new Date());

  return parsedDate;
}


/**
 * Convert yup error into an error object where the keys are the fields and the values are the errors for that field
 * @param {ValidationError} err The yup error to convert
 * @returns {ErrorObject} The error object
 */
export function yupErrorToErrorObject(err) {
  const object = {};

  err.inner.forEach((x) => {
    if (x.path !== undefined) {
      object[x.path] = x.errors;
    }
  });

  return object;
}