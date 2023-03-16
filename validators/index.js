export const validatePassword = (value) => {
  if (value === undefined) return false;

  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])(?=.*[0-9]).{6,}$/.test(
    value
  );
};

export const validateEmail = (value) => {
  if (value === undefined) return false;

  return /^[a-zA-Z0-9.-/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
    value
  );
};

export const validateOnlyLetters = (value) => {
  if (value === undefined) return false;

  return /[\D]{3}/.test(value);
};

export const validatePhoneNumber = (value) => {
  if (value === undefined) return false;

  return /^((\\+[1-9]{1,4}[ \\-])|(\\([0-9]{2,3}\\)[ \\-])|([0-9]{2,4})[ \\-])?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/.test(
    value
  );
};
