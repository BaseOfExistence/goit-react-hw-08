import css from "./LoginForm.module.css"
import { useId } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from "yup"
import { useDispatch } from "react-redux"
import { login } from "../../redux/auth/operations"

const ValidationSchema = Yup.object().shape({
  email: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
        .required("Required"),
  password: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required")
})
export default function LoginForm() {
    const dispatch = useDispatch()
    const emailId = useId()
    const passwordId = useId()
    const handleSubmit = (values, event) => {
        dispatch(login(values))
        event.resetForm()
    }
    return (
        <Formik initialValues={{
            email: "",
            password: ""
        }} onSubmit={handleSubmit}
        validationSchema={ValidationSchema}>
            <Form className={css.form}>
                <div className={css.container}>
                    <label htmlFor={emailId}>Email</label>
                    <Field name="email" id={emailId} />
                    <ErrorMessage name="email" as="span" />
                </div>
                <div className={css.container}>
                    <label htmlFor={passwordId}>Password</label>
                    <Field name="password" id={passwordId} />
                    <ErrorMessage name="password" as="span" />
                </div>
                <button type='submit'>Login</button>
            </Form>
        </Formik>
    )
}