import * as Yup from 'yup';

const messages = {
  min3Characters: 'This field must have at least 3 characters.',
  min4Characters: 'This field must have at least 4 characters.',
  min10Caracters: 'This field must have 10 carachters.',
  fieldIsInvalid: ' is invalid.',
  passwordMustMatch: 'Password must match.',
  requiredField: 'This field is required'
};

export const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .required(messages.requiredField)
    .min(3, messages.min3Characters),
  lastName: Yup.string()
    .required(messages.requiredField)
    .min(3, messages.min3Characters),
  email: Yup.string()
    .required(messages.requiredField)
    .email(`Email${messages.fieldIsInvalid}`),
  phoneNumber: Yup.string()
    .min(10, messages.min10Caracters)
    .transform((value) => value.replace(/[^\d]/g, '')),
  // TODO: Add further validations for security purposes.
  password: Yup.string()
    .required(messages.requiredField)
    .min(4, messages.min4Characters),
  confirmPassword: Yup.string()
    .required(messages.requiredField)
    .test('passwords-match', messages.passwordMustMatch, function (value) {
      return this.parent.password === value;
    })
});
