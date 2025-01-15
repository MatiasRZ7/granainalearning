// Definition of the form fields for the sign-up and sign-in forms to be used in the application.
// it is important because it allows for the easy creation of forms and validation of the forms.

export type AuthFormProps = {
    id: string
    type: "email" | "text" | "password"
    inputType: "select" | "input"
    options?: { value: string; label: string; id: string }[]
    label?: string
    placeholder: string
    name: string
  }
  export const SIGN_UP_FORM: AuthFormProps[] = [
    {
      id: "1",
      inputType: "input",
      placeholder: "First name",
      name: "firstname",
      type: "text",
    },
    {
      id: "2",
      inputType: "input",
      placeholder: "Last name",
      name: "lastname",
      type: "text",
    },
    {
      id: "3",
      inputType: "input",
      placeholder: "Email",
      name: "email",
      type: "email",
    },
    {
      id: "4",
      inputType: "input",
      placeholder: "Password",
      name: "password",
      type: "password",
    },
  ]
  
  export const SIGN_IN_FORM: AuthFormProps[] = [
    {
      id: "1",
      inputType: "input",
      placeholder: "Email",
      name: "email",
      type: "email",
    },
    {
      id: "4",
      inputType: "input",
      placeholder: "Password",
      name: "password",
      type: "password",
    },
  ]