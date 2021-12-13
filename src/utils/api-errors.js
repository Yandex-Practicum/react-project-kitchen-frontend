/**
 * @param {?Object} apiErrors
 * @param {string} suffix
 * @returns {Object}
 */
const transformApiErrors = (apiErrors, suffix = 'Error') => {
  const errors = {};
  if (apiErrors) {
    if (typeof apiErrors.error === 'object' && apiErrors.message) {
      errors['error-message'] = apiErrors.message;
    } else {
      Object.keys(apiErrors).forEach((key) => {
        errors[`${key}${suffix}`] = `${key} ${apiErrors[key]}`;
      });
    }
  }
  return errors;
};

// eslint-disable-next-line import/prefer-default-export
export { transformApiErrors };
