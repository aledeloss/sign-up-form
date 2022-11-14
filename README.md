# Sign up form

## Running the project in local

For running the project in your local, please run the following commands in your terminardo:

- `git clone https://github.com/aledeloss/sign-up-form.git`,
- `npm install`,
- `npm run dev`.

## Deployment

You may find a demo of the form at https://sign-up-form-aledeloss.vercel.app/.

## Known issues

- Password validation rules are weak for a production sign up page and should be improved.

## Next steps

- Styles could be way improved. The delivered page is a very basic form, with preset styles set in Material UI library. I chose this option to save some time and get the best possible product in the available time.
- Developing some Jest tests is recommendable. If possible, I would test that:
  - All components render without crashing,
  - Error messages are shown when values that don't match the validation rules are entered,
  - Due success and error messages are displayed upon the API response.
