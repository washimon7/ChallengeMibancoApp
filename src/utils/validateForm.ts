import { UserForm } from '../types';

export const validateForm = (formErrors: UserForm) => {
  let errors = formErrors;

  const fields = Object.entries(formErrors);
  fields.forEach(field => {
    errors = {
      ...errors,
      ...validateInput(field[0], field[1], errors),
    };
  });

  return errors;
};

export const validateInput = (
  name: string,
  value: any,
  formErrors: UserForm,
) => {
  switch (name) {
    case 'username':
      !value ? (formErrors[name] = 'Requerido') : delete formErrors[name];
      break;
    case 'password':
      const regexPass = /^[\S]{5}[\S]+$/;
      !value
        ? (formErrors[name] = 'Requerido')
        : !regexPass.test(value)
        ? (formErrors[name] = '6 caracteres como mínimo sin espacios')
        : delete formErrors[name];
      break;
    default:
      break;
  }

  return formErrors;
};
