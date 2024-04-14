import css from "./RegistrationPage.module.css"
import { useId } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from "yup"
import { useDispatch } from "react-redux"
import { register } from "../../redux/auth/operations"

const ValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
  email: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
        .required("Required"),
  password: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required")
})
export default function RegistrationPage() {
    const dispatch = useDispatch()
    const nameId = useId()
    const emailId = useId()
    const passwordId = useId()
    const handleSubmit = (values, event) => {
        dispatch(register(values))
        event.resetForm()
    }
    return (
        <Formik initialValues={{
            name: "",
            email: "",
            password: ""
        }} onSubmit={handleSubmit}
        validationSchema={ValidationSchema}>
            <Form className={css.form}>
                <div className={css.container}>
                    <label htmlFor={nameId}>Name</label>
                    <Field name="name" id={nameId} />
                    <ErrorMessage name="name" as="span" />
                </div>
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
                <button type='submit'>Register</button>
            </Form>
        </Formik>
    )
}